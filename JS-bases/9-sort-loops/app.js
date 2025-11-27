const arr = [1, 40, -5, 10, 0];

function sort(arr, order = "ASC") {
  if (!["ASC", "DESC"].includes(order.toUpperCase())) {
    return arr;
  }
  const compare = order === "ASC" ? (a, b) => a < b : (a, b) => a > b;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (compare(arr[i], arr[j])) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
}

console.log(sort(arr, "DESC"));
