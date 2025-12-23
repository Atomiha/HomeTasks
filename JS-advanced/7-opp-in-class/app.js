"use strict";

// const Person = function (race, name, language) {
//     this.race = race;
//     this.name = name;
//     this.language = language;
// };

// Person.prototype.speak = function () {
//     console.log(`Язык: ${this.language}, Имя: ${this.name}`);
// };

class Person {
    constructor(race, name, language) {
        this.race = race;
        this.name = name;
        this.language = language;
    }
    speak() {
        return `Язык: ${this.language}; Имя: ${this.name}`;
    }
}

// const Orc = function (name, language, weapon) {
//     Person.call(this, "Orc", name, language);
//     this.weapon = weapon;
// };

// Orc.prototype = Object.create(Person.prototype);
// Orc.prototype.constructor = Orc;

// Orc.prototype.hit = function () {
//     console.log(`Был нанесен удар оружием: ${this.weapon}`);
// };

class Orc extends Person {
    constructor(name, language, weapon) {
        super("Orc", name, language);
        this.weapon = weapon;
    }
    hit() {
        return `Был нанесен удар оружием: ${this.weapon}`;
    }
    speak() {
        return `Язык: ${this.language}; Имя: ${this.name}; Оружие: ${this.weapon}`;
    }
}

// const Elf = function (name, language, spell) {
//     Person.call(this, "Elf", name, language);
//     this.spell = spell;
// };

// Elf.prototype = Object.create(Person.prototype);
// Elf.prototype.constructor = Elf;

// Elf.prototype.createSpell = function () {
//     console.log(`Было применено заклинание: ${this.spell}`);
// };

class Elf extends Person {
    constructor(name, language, spell) {
        super("Elf", name, language);
        this.spell = spell;
    }
    createSpell() {
        return `Было применено заклинание: ${this.spell}`;
    }
    speak() {
        return `Язык: ${this.language}; Имя: ${this.name}; Заклинание: ${this.spell}`;
    }
}

const orc = new Orc("Горг", "Орочий", "Топор");
console.log(orc.speak());
console.log(orc.hit());

const elf = new Elf("Леголас", "Эльфийский", "Огненная стрела");
console.log(elf.speak());
console.log(elf.createSpell());
