function startCountdown(duration) {
    let timer = duration, hours, minutes, seconds;
    setInterval(function () {
        hours = Math.floor((timer / 3600) % 24);
        minutes = Math.floor((timer / 60) % 60);
        seconds = timer % 60;
        document.getElementById('hours').textContent = hours < 10 ? "0" + hours : hours;
        document.getElementById('minutes').textContent = minutes < 10 ? "0" + minutes : minutes;
        document.getElementById('seconds').textContent = seconds < 10 ? "0" + seconds : seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}
const countdownTime = (12 * 3600) + (25 * 60) + 45;
startCountdown(countdownTime);