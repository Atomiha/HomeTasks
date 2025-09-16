function isCardNumber(num) {
  num = num.trim().replaceAll("-", "");
  if (!Number(num) || num.length !== 16) {
    return false;
  }
  const numArr = num.split("").map((el) => Number(el));
  const numArrDoubleEvenElem = numArr.map((el, i) =>
    i % 2 === 0 ? (el * 2) % 9 : el
  );
  const resSum = numArrDoubleEvenElem.reduce((sum, el) => sum + el, 0);

  return resSum % 10 === 0;
}

const positiveCardNum = "4561-2612-1234-5464";

console.log(isCardNumber(positiveCardNum));

const users = [
  { name: "Вася", age: 30 },
  { name: "Катя", age: 18 },
  { name: "Аня", age: 40 },
  { name: "Петя", age: 25 },
];

console.log(users.sort((a, b) => a.age - b.age));

const users2 = [
  {
    name: "Вася",
    surname: "Пупкин",
    age: 30,
    skills: ["Разработка", "DevOps"],
  },
  { name: "Катя", age: 18, surname: "Белова", skills: ["Дизайн"] },
];

const new_users2 = users2.map((user) => {
  return {
    fullName: user.name + " " + user.surname,
    skillsNum: user.skills.length,
  };
});
console.log(new_users2);

const wallet = {
  balance: 0,
  operations: [],
  increseBalance: function (reason, sum) {
    this.operations.push({ reason, sum });
    this.balance += sum;
    return true;
  },
  decreaseBalance: function (reason, sum) {
    this.operations.push({ reason, sum: -sum });
    this.balance -= sum;
    return this.balance >= 0;
  },
  operationsCount: function () {
    return this.operations.length;
  },
};
console.log(wallet.increseBalance(`перевод от пользователя банка`, 150));
console.log(wallet.decreaseBalance(`Оплата покупки в магазине`, 160));
console.log(wallet.operationsCount());
console.log(wallet);

const warehouse = {
  goods: [],
  findGoodById: function (id) {
    return this.goods.find((good) => good.id === id);
  },
  addGood: function (good) {
    if (good) {
      this.goods.push(good);
    }
    return this.goods;
  },
  getWeightKg: function () {
    return this.goods.reduce((sum, good) => sum + (good?.weight?.kg ?? 0), 0);
  },
};

/* Товары */
const car = {
  id: 1,
  weight: {
    kg: 1000,
  },
  brand: "Ford",
};

const chair = {
  id: 2,
  weight: {
    kg: 2,
  },
};

const paper = {
  id: 3,
  color: "red",
};

console.log(warehouse.addGood(car));
console.log(warehouse.addGood(chair));
console.log(warehouse.addGood(paper));
console.log(warehouse.findGoodById(2));
console.log(warehouse.findGoodById(3));
console.log(warehouse.getWeightKg());
