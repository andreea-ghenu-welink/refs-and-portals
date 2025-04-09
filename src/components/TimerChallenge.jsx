import { useState, useRef } from 'react';

import ResultModal from './ResultModal';

export default function TimerChallenge({title, targetTime}) {
  const timerIdRef = useRef();
  const dialogRef = useRef();

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const timeIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;
  
  // If the time is over, stop the timer
  if (timeRemaining <= 0) {
    clearInterval(timerIdRef.current);
    dialogRef.current.open();
  }

  function handleReset() {
    setTimeRemaining(targetTime * 1000);
  }

  function handleStart() {  
    timerIdRef.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);
  }

  function handleStop() {
    dialogRef.current.open();
    clearInterval(timerIdRef.current);
  }

  return (
    <>
      <ResultModal ref={dialogRef} targetTime={targetTime} remainingTime={timeRemaining} onReset={handleReset}/>
      <section className="challenge">
          <h2>{title}</h2>
          <p className="challenge-time">{targetTime} second{targetTime > 1 ? 's' : ''}</p>
          <p>
          <button onClick={timeIsActive ? handleStop : handleStart}>
            {timeIsActive ? 'Stop' : 'Start'} Challenge 
          </button>
        </p>
        <p className={timeIsActive ? 'active' : ''}>
          {timeIsActive ? 'Time is running...' : 'Timer inactive'}
        </p>
      </section>
    </>
  );
} 