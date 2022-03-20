const timerBlock = document.querySelector('.timer__time');
const deadline = new Date(2022, 2, 31);

function updateClock() {
    const date = new Date().getTime();
    const dateDeadline = new Date(deadline).getTime();
    const timeRemaining = (dateDeadline - date) / 1000;

    const days = Math.floor(timeRemaining / 60 / 60 / 24);
    const hours = ('0' + Math.floor((timeRemaining / 60 / 60) % 24)).slice(-2);
    const minutes = ('0' + Math.floor((timeRemaining / 60) % 60)).slice(-2);
    const seconds = ('0' + Math.floor(timeRemaining % 60)).slice(-2);

    timerBlock.textContent = `${days} ${daysText(days)} ${hours}:${minutes}:${seconds}`;
    if (timeRemaining <= 0) {
        timer.clearInterval();
        timerBlock.textContent = '00:00:00';
    }
}

function daysText(days) {
    const num = days % 10;

    if (num === 1 && days !== 11) {
        return 'день';
    } else if ((num === 2 || num === 3 || num === 4) && (days !== 12 || days !== 13 || days !== 14)) {
        return 'дня';
    } else {
        return 'дней';
    }
}

let timer = setInterval(updateClock, 500);