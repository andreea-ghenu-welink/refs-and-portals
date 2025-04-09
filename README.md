# The Almost Final Countdown

A React-based timing challenge game where players test their ability to estimate time intervals.

## Overview

This application provides a series of timer-based challenges where users try to stop the timer as close as possible to the target time. It features:

- Multiple difficulty levels with different time targets
- Player name customization
- Visual feedback during active timers
- Score calculation based on timing accuracy
- Modal result display using React Portals

## Technologies Used

- React 19
- React Hooks (useState, useRef, useImperativeHandle)
- React Portals for modal dialogs
- CSS for styling and animations
- Vite for development and building

## Getting Started

### Prerequisites

- Node.js (latest stable version recommended)

### Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```
4. Open your browser and navigate to the URL shown in your terminal (typically http://localhost:5173)

## How to Play

1. Enter your name in the input field and click "Set Name"
2. Choose a challenge by clicking the "Start Challenge" button
3. Try to stop the timer as close as possible to the target time
4. View your score based on how accurately you stopped the timer
5. Try again with a different challenge!

## Build

To build the application for production:

```
npm run build
```

The build files will be located in the `dist` directory.

## License

This project is open source and available under the MIT License. 