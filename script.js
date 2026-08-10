let startTime;
let elapsedTime = 0;
let timerInterval;
let lapStartTime = 0;
let laps = [];

const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const lapBtn = document.getElementById('lapBtn');
const resetBtn = document.getElementById('resetBtn');
const lapsList = document.getElementById('lapsList');
const lapCountSpan = document.getElementById('lapCount');

function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);

    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);

    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);

    let diffInMs = (diffInSec - ss) * 100;
    let ms = Math.floor(diffInMs);

    let formattedHH = hh.toString().padStart(2, "0");
    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    let formattedMS = ms.toString().padStart(2, "0");

    return `${formattedHH}:${formattedMM}:${formattedSS}.${formattedMS}`;
}

function print(txt) {
    display.innerHTML = txt;
}

function start() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
        elapsedTime = Date.now() - startTime;
        print(timeToString(elapsedTime));
    }, 10);
    startBtn.disabled = true;
    pauseBtn.disabled = false;
    lapBtn.disabled = false;
}

function pause() {
    clearInterval(timerInterval);
    startBtn.disabled = false;
    pauseBtn.disabled = true;
}

function reset() {
    clearInterval(timerInterval);
    print("00:00:00.00");
    elapsedTime = 0;
    lapStartTime = 0;
    laps = [];
    renderLaps();
    startBtn.disabled = false;
    pauseBtn.disabled = true;
    lapBtn.disabled = true;
}

function recordLap() {
    const currentLapTime = elapsedTime - lapStartTime;
    laps.unshift({
        duration: currentLapTime,
        total: elapsedTime
    });
    lapStartTime = elapsedTime;
    renderLaps();
}

function renderLaps() {
    lapCountSpan.innerText = laps.length.toString().padStart(2, "0");
    if (laps.length === 0) {
        lapsList.innerHTML = `<tr><td colspan="3" class="p-12 text-center opacity-30 italic font-body">No recorded data available. Press START to begin tracking.</td></tr>`;
        return;
    }

    lapsList.innerHTML = laps.map((lap, index) => {
        const lapIndex = laps.length - index;
        return `
            <tr class="border-b-2 border-primary hover:bg-primary hover:text-on-primary transition-colors cursor-default">
                <td class="p-4 border-r-2 border-primary font-black">LAP ${lapIndex.toString().padStart(2, "0")}</td>
                <td class="p-4 timer-text">${timeToString(lap.duration)}</td>
                <td class="p-4 text-right timer-text opacity-70">${timeToString(lap.total)}</td>
            </tr>
        `;
    }).join('');
}

startBtn.addEventListener("click", start);
pauseBtn.addEventListener("click", pause);
resetBtn.addEventListener("click", reset);
lapBtn.addEventListener("click", recordLap);

// micro-interaction: key bindings
window.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        e.preventDefault();
        if (!startBtn.disabled) startBtn.click();
        else if (!pauseBtn.disabled) pauseBtn.click();
    }
    if (e.code === 'KeyL') {
        lapBtn.click();
    }
    if (e.code === 'KeyR') {
        resetBtn.click();
    }
});
