"use strict";

const Person = function (race, name, language) {
    this.race = race;
    this.name = name;
    this.language = language;
};

Person.prototype.speak = function () {
    console.log(`Язык: ${this.language}, Имя: ${this.name}`);
};

const Orc = function (name, language, weapon) {
    Person.call(this, "Orc", name, language);
    this.weapon = weapon;
};

Orc.prototype = Object.create(Person.prototype);
Orc.prototype.constructor = Orc;

Orc.prototype.hit = function () {
    console.log(`Был нанесен удар оружием: ${this.weapon}`);
};

const Elf = function (name, language, spell) {
    Person.call(this, "Elf", name, language);
    this.spell = spell;
};

Elf.prototype = Object.create(Person.prototype);
Elf.prototype.constructor = Elf;

Elf.prototype.createSpell = function () {
    console.log(`Было применено заклинание: ${this.spell}`);
};

const orc = new Orc("Горг", "Орочий", "Топор");
orc.speak();
orc.hit();

const elf = new Elf("Леголас", "Эльфийский", "Огненная стрела");
elf.speak();
elf.createSpell();
