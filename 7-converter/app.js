function currencyConversion(sum, sourceCur, targetCur) {
  if (sourceCur === "₽" && targetCur == "$") {
    return sum / 81;
  }
  if (sourceCur === "$" && targetCur == "₽") {
    return sum * 81;
  }
  if (sourceCur === targetCur) {
    return sum;
  }
  return null;
}

money = prompt("Введите сумму для конвертации");
sourceCur = prompt("Введите код исходной валюты");
targetCur = prompt("Введите код целевой валюты");

console.log(
  `Cумма в ${targetCur} = ${currencyConversion(money, sourceCur, targetCur)} `
);
