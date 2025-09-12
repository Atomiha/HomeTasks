function isDate(str) {
  const regex = /^(\d{1,2})([.\/-])(\d{1,2})\2(\d{4})$/;
  const match = str.match(regex);
  if (!match) return false;

  const first = Number(match[1]);
  const second = Number(match[3]);
  const year = Number(match[4]);

  let day, month;

  if (match[2] === "/") {
    month = first;
    day = second;
  } else {
    day = first;
    month = second;
  }

  const isValidDay = day >= 1 && day <= 31;
  const isValidMonth = month >= 1 && month <= 12;
  const isValidYear = year > 0;

  return isValidDay && isValidMonth && isValidYear;
}

const possibleDates = [
  "10-02-2022",
  "тест",
  "11/22/2023",
  "00/13/2022",
  "41/12/2023",
  "10.02.2022",
];

const dates = possibleDates.filter((date) => isDate(date));
console.log(dates);
