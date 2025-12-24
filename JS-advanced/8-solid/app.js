"use strict";

class Billing {
    #amount;
    constructor(amount) {
        this.#amount = amount;
    }
    get amount() {
        return this.#amount;
    }
    calculateTotal() {
        return this.#amount;
    }
}
class FixBilling extends Billing {}
class HourBilling extends Billing {
    constructor(amount, hours) {
        super(amount);
        this.hours = hours;
    }

    calculateTotal() {
        return this.amount * this.hours;
    }
}

class ItemBilling extends Billing {
    constructor(amount, items) {
        super(amount);
        this.items = items;
    }

    calculateTotal() {
        return this.amount * this.items;
    }
}

const bills = [
    new FixBilling(100),
    new HourBilling(50, 3),
    new ItemBilling(20, 7),
];

for (const bill of bills) {
    console.log(bill.constructor.name, "=>", bill.calculateTotal());
}
