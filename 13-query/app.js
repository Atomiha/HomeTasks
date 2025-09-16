function object2Query(object) {
  let query = "";
  for (el of Object.keys(object)) {
    query += el + "=" + object[el] + "&";
  }
  return query.slice(0, -1);
}

const query = {
  search: "Вася",
  take: 10,
};

console.log(object2Query(query));
