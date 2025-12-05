"use strict";

function ageValidation(dateStr) {
    const birth = new Date(dateStr);
    const today = new Date();

    let age = today.getFullYear() - birth.getFullYear();

    const monthDiff = today.getMonth() - birth.getMonth();
    const dayDiff = today.getDate() - birth.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    return age >= 14;
}

console.log(ageValidation("2022-01-01"));
