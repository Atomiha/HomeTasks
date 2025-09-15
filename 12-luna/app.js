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
