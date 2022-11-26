const daysCounter = document.querySelector('[data-days]');
const hoursCounter = document.querySelector('[data-hours]');
const minsCounter = document.querySelector('[data-mins]');
const secsCounter = document.querySelector('[data-secs]');

// const counteStart = new Date('Jan 1, 2020 09:00:00').getTime();

const startCounterFrom = new Date("Dec 10, 2022 14:39:59").getTime();
// function addDays(countFrom) {
//     let todaysDate = new Date();
//     let startCountFrom = todaysDate.setDate(todaysDate + countFrom);
//     return startCountFrom;
// }

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
}, tickEverySec);
