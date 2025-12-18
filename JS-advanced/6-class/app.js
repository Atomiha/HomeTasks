"use strict";

class Car {
    #brand;
    #model;
    #mileage;
    constructor(brand, model, mileage) {
        this.#model = model;
        this.#brand = brand;
        this.#mileage = mileage;
    }

    get mileage() {
        return this.#mileage;
    }

    set mileage(value) {
        this.#mileage = value;
    }

    get brand() {
        return this.#brand;
    }
    get model() {
        return this.#model;
    }
    info() {
        return `Автомобиль марки: ${this.#brand} и модели: ${
            this.#model
        } имеет пробег: ${this.#mileage}`;
    }
}

const car = new Car("Tesla", "Model S", 100);
console.log(car.brand);
console.log(car.model);
console.log(car.mileage);
console.log(car.info());
car.mileage = 50;
console.log(car.mileage);
console.log(car.info());
