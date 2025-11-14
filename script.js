let timer;
let isRunning = false;
let startTime;
let elapsedTime = 0;
let lapTimes = [];

const display = document.getElementById('display');
const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const resetBtn = document.getElementById('reset');
const lapBtn = document.getElementById('lap');
const lapsDiv = document.getElementById('laps');
const lapList = document.getElementById('lapList');

function formatTime(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    const centiseconds = Math.floor((ms % 1000) / 10); // 0-99
    return `${hours.toString().padStart(2, '0')}:` + `${minutes.toString().padStart(2, '0')}:` + `${seconds.toString().padStart(2, '0')}.` + `${centiseconds.toString().padStart(2, '0')}`;
}

function updateDisplay() {
    display.textContent = formatTime(elapsedTime);
}

function start() {
    if (!isRunning) {
        isRunning = true;
        startTime = Date.now() - elapsedTime;
        timer = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            updateDisplay();
        }, 10);
    }
}

function pause() {
    if (isRunning) {
        isRunning = false;
        clearInterval(timer);
    }
}

function reset() {
    pause();
    elapsedTime = 0;
    lapTimes = [];
    updateDisplay();
    if (lapList) lapList.innerHTML = '';
}

function lap() {
    if (isRunning) {
        lapTimes.push(elapsedTime);
        const li = document.createElement('li');
        li.className = 'lap-item';
        li.textContent = `Lap ${lapTimes.length}: ${formatTime(elapsedTime)}`;
        lapList.appendChild(li);
    }
}

startBtn.addEventListener('click', start);
pauseBtn.addEventListener('click', pause);
resetBtn.addEventListener('click', reset);
lapBtn.addEventListener('click', lap);
updateDisplay();
