function currencyConversion(sum, sourceCur, targetCur) {
  const pair = {
    "₽$": sum / 81,
    "₽€": sum / 95,
    "$₽": sum * 81,
    "€₽": sum * 95,
    "$€": sum / 1.17,
    "€$": sum * 1.17,
  };
  if (sourceCur === targetCur) {
    return sum;
  }
  const key = sourceCur + targetCur;

  return pair[key] ?? null;
}

money = prompt("Введите сумму для конвертации");
sourceCur = prompt("Введите код исходной валюты");
targetCur = prompt("Введите код целевой валюты");

console.log(
  `Cумма в ${targetCur} = ${currencyConversion(money, sourceCur, targetCur)} `
);
