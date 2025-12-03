"use strict";

function random(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
}

function dice(diceType) {
    const diceTypeInt = Number(diceType.slice(1));
    return Number.isInteger(diceTypeInt) && diceType[0] === "d"
        ? random(1, diceTypeInt)
        : null;
}

console.log(dice("d20"));
