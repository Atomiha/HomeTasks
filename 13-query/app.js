"use strict";
function object2Query(object) {
  let query = "";
  for (const el of Object.keys(object)) {
    query += el + "=" + object[el] + "&";
  }
  return query.slice(0, -1);
}

const query = {
  search: "Вася",
  take: 10,
};

console.log(object2Query(query));

//console.log(this);
//console.log(window);

const addNum = (num1, num2) => {
  //console.log(this);
  return num1 + num2;
};

const user = {
  name: "L",
  surname: "A",
  getFullName: function () {
    console.log(this);
    return this.name + " " + this.surname;
  },
};
addNum();

user.getFullName();

const company = {
  name: "ООО Агро",
  employees: [
    {
      name: "Света",
    },
    {
      name: "Вася",
    },
  ],
  ceo: {
    name: "Вася",
    getCEOName: function () {
      console.log(this.name);
    },
  },
  getCompanyName: function () {
    console.log(this.name);
  },

  getEmployeesNames: function () {
    const names = this.employees.map((e) => e.name);
    console.log(names);
  },
};

company.getCompanyName();
company.ceo.getCEOName();
company.getEmployeesNames();
