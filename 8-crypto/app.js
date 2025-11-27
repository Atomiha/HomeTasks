const crypto = (word) => {
  const half = Math.floor(word.length / 2);

  const first = word.slice(0, half).split("").reverse().join("");

  const second = word.slice(-1) + word.slice(half + 1, -1) + word[half];

  return first + second;
};

const check = (cryptoPassword, word) => crypto(word) === cryptoPassword;

console.log(crypto("password"));
console.log(check("ssapdorw", "password"));
