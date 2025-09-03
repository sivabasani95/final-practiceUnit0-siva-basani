// JavaScript Fundamentals

// Use variables, functions, and data types to store and update the timer, session count, and motivational messages.

let focusTime = 25 * 60; // 25 minutes in seconds
let breakTime = 5 * 60; // 5 minutes
let sessionsCompleted = 0;

function formatTime(seconds) {
  let mins = Math.floor(seconds / 60);
  let secs = seconds % 60;
  return `${mins}:${secs < 10 ? '0' + secs : secs}`;
}

//  Control Flow

// Use conditionals and loops to determine whether the timer is running a focus or break session, and how many sessions the user has completed.

function checkMilestone(sessions) {
  if (sessions === 4) {
    alert("Awesome! You've completed 4 sessions. Take a longer break!");
  } else if (sessions % 2 === 0) {
    alert("Nice job! Keep going!");
  }
}

// DOM Manipulation

// Update the timer on the web page, show session counts, and change messages dynamically.

const timerDisplay = document.getElementById("timer");
const sessionCount = document.getElementById("sessionCount");

function updateDisplay(time) {
  timerDisplay.textContent = formatTime(time);
}

function updateSessionCount(count) {
  sessionCount.textContent = `Sessions Completed: ${count}`;
}

// Events

// Handle user interaction like clicking a "Start" button or resetting the timer.

document.getElementById("startBtn").addEventListener("click", () => {
  startTimer(focusTime);
});

// HTML/CSS Integration

// Basic structure and styling to bring the app to life.

// HTML Example:

<div id="app">
  <h1>FocusTime</h1>
  <p id="timer">25:00</p>
  <p id="sessionCount">Sessions Completed: 0</p>
  <button id="startBtn">Start</button>
</div>


// CSS Example:

#app {
  font-family: sans-serif;
  text-align: center;
  margin-top: 50px;
}

#timer {
  font-size: 48px;
  color: #333;
}

