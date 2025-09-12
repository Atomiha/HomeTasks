function isDate(str) {
  if (!(str.includes("/") || str.includes("."))) {
    return false;
  }

  const arrStr = str.includes("/") ? str.split("/") : str.split(".");

  const isYear = arrStr[2] > 0;

  const isMonth = str.includes("/")
    ? 0 < arrStr[0] && arrStr[0] <= 12
    : 0 < arrStr[1] && arrStr[1] <= 12;

  const isDay = str.includes("/")
    ? 0 < arrStr[1] && arrStr[1] <= 31
    : 0 < arrStr[0] && arrStr[0] <= 31;

  return isYear && isMonth && isDay;
}

const possibleDates = [
  "10-02-2022",
  "тест",
  "11/12/2023",
  "00/13/2022",
  "41/12/2023",
  "10.02.2022",
];

const dates = possibleDates.filter((date) => isDate(date));
console.log(dates);
