const minutesBase = 60;
const hoursBase = 60 * minutesBase;
const daysBase = 24 * hoursBase;

function refreshCountdown () {
    const countdown = document.getElementById("countdown");
    const launchDate = Date.parse(countdown.dataset.time) / 1000;
    const difference = launchDate - Date.now() / 1000;
    const diff = {
        days: Math.floor(difference / daysBase),
        hours : Math.floor(difference % daysBase / hoursBase),
        minutes : Math.floor(difference % hoursBase / minutesBase),
        seconds : Math.floor(difference % minutesBase) 
    }

    document.getElementById("days_count").innerText = diff.days;
    document.getElementById("hours_count").innerText = diff.hours;
    document.getElementById("minutes_count").innerText = diff.minutes;
    document.getElementById("seconds_count").innerText = diff.seconds;
    window.setTimeout (() => {
        window.requestAnimationFrame(refreshCountdown);
    }, 1000);
}
refreshCountdown ()