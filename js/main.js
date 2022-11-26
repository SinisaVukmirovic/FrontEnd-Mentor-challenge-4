import { daysCounter, hoursCounter, minsCounter, secsCounter } from './DOMelems.js';
// const startCounterFrom = new Date("Nov 26, 2022 15:12:39").getTime();
const startCounterFrom = new Date("Dec 10, 2022 14:39:59").getTime();
const tickEverySec = 1000;

const interval = setInterval(() => {
    const today = new Date().getTime();

    const countdownTime = startCounterFrom - today;

    const days = Math.floor(countdownTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((countdownTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((countdownTime % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((countdownTime % (1000 * 60)) / 1000);
    // console.log(days, hours, mins, secs);

    daysCounter.textContent = `${days}`;
    hoursCounter.textContent = `${hours}`;
    minsCounter.textContent = `${mins}`;
    secsCounter.textContent = `${secs}`;

    if (countdownTime <= 0) {
        clearInterval(interval);

        daysCounter.textContent = '0';
        hoursCounter.textContent = '0';
        minsCounter.textContent = '0';
        secsCounter.textContent = '0';
    }
}, tickEverySec);