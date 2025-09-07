const greaterFive = (num) => num > 5;

function arrayFilter(arr, check) {
  let res = [];
  for (const element of arr) {
    if (check(element)) {
      res.push(element);
    }
  }
  return res;
}

console.log(arrayFilter([10, 3, 5, 7, 9], greaterFive));
