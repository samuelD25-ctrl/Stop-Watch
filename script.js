let timer;
let seconds = 0;
let isRunning = false;

function formatTime(sec) {
  const hrs = String(Math.floor(sec / 3600)).padStart(2, '0');
  const mins = String(Math.floor((sec % 3600) / 60)).padStart(2, '0');
  const secs = String(sec % 60).padStart(2, '0');
  return `${hrs}:${mins}:${secs}`;
}

function updateDisplay() {
  document.getElementById('display').textContent = formatTime(seconds);
}

function startStopwatch() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(() => {
      seconds++;
      updateDisplay();
    }, 1000);
  }
}

function pauseStopwatch() {
  isRunning = false;
  clearInterval(timer);
}

function resetStopwatch() {
  pauseStopwatch();
  seconds = 0;
  updateDisplay();
  document.getElementById('laps').innerHTML = '';
}

function recordLap() {
  if (isRunning) {
    const lapTime = formatTime(seconds);
    const li = document.createElement('li');
    li.textContent = `Lap ${document.getElementById('laps').children.length + 1}: ${lapTime}`;
    document.getElementById('laps').appendChild(li);
  }
}
