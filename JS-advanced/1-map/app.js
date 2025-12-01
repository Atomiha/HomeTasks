"use strict";

const users = [
    { id: 1, name: "Вася" },
    { id: 2, name: "Петя" },
    { id: 1, name: "Вася" },
];

const uniqueUsersSet = new Set();

const uniqueUsers = users.filter((user) => {
    const userstr = JSON.stringify(user);
    if (uniqueUsersSet.has(userstr)) {
        return false;
    }
    uniqueUsersSet.add(userstr);
    return true;
});
console.log(uniqueUsers);
