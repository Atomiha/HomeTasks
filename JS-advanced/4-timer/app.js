"use strict";

function declension(number, forms) {
    const n = Math.abs(number) % 100;
    const n1 = n % 10;

    if (n > 10 && n < 20) return forms[2];
    if (n1 > 1 && n1 < 5) return forms[1];
    if (n1 === 1) return forms[0];
    return forms[2];
}

function remainingTime() {
    const now = new Date();
    const newYear = new Date(now.getFullYear() + 1, 0, 1);
    let months = 0;
    let temp = new Date(now);

    while (true) {
        const next = new Date(temp);
        next.setMonth(next.getMonth() + 1);

        if (next <= newYear) {
            months++;
            temp = next;
        } else {
            break;
        }
    }

    let diff = newYear - temp;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff %= 1000 * 60 * 60 * 24;

    const hours = Math.floor(diff / (1000 * 60 * 60));
    diff %= 1000 * 60 * 60;

    const minutes = Math.floor(diff / (1000 * 60));
    diff %= 1000 * 60;

    const seconds = Math.floor(diff / 1000);

    const timerEl = document.getElementById("timer");

    timerEl.textContent =
        `До Нового года осталось:  ` +
        `${String(months).padStart(2, "0")} ${declension(months, [
            "месяц",
            "месяца",
            "месяцев",
        ])}, ` +
        `${String(days).padStart(2, "0")} ${declension(days, [
            "день",
            "дня",
            "дней",
        ])}, ` +
        `${String(hours).padStart(2, "0")} ${declension(hours, [
            "час",
            "часа",
            "часов",
        ])}, ` +
        `${String(minutes).padStart(2, "0")} ${declension(minutes, [
            "минута",
            "минуты",
            "минут",
        ])}, ` +
        `${String(seconds).padStart(2, "0")} ${declension(seconds, [
            "секунда",
            "секунды",
            "секунд",
        ])}`;
}

remainingTime();
setInterval(remainingTime, 1000);
