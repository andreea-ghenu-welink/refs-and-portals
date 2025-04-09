import { forwardRef, useImperativeHandle, useRef } from 'react';
// createPortal is used to render the component into a different part of the DOM
import { createPortal } from 'react-dom'; 

// forwardRef is used to pass the ref from the parent to the child component in older versions of React (< 19)
const ResultModal = forwardRef(function ResultModal({targetTime, remainingTime, onReset}, ref) {
  const internalDialogRef = useRef();

  const userLost = remainingTime <=0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - (remainingTime / (targetTime*1000))) * 100);

  // useImperativeHandle is used to expose the defined methods to the parent component
  useImperativeHandle(ref, () => {
    return {
      open: () => internalDialogRef.current.showModal()
    };
  });
  
  return (
    createPortal(
      <dialog className="result-modal" ref={internalDialogRef} onClose={onReset}>
        {userLost && <h2>You lost!</h2>}
        {!userLost && <h2>Your Score: {score}%</h2>}
        <p>The target time was <strong>{targetTime}</strong> seconds.</p>
        <p>You stopped the timer with <strong>{formattedRemainingTime}</strong> seconds left.</p>
        <form method="dialog" onSubmit={onReset}>
          <button>Close</button>
        </form>
      </dialog>,
      document.getElementById('modal')  
    )
  );
});

export default ResultModal;
