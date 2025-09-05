const reversePartWord = (word, start, finish) =>
  word.slice(start, finish).split("").reverse().join("");

const crypto = (password) => {
  const half = password.length / 2;
  return (
    reversePartWord(password, 0, half) +
    reversePartWord(password, half, password.length)
  );
};

const check = (cryptoPassword, word) => crypto(cryptoPassword) === word;

console.log(crypto("password"));
console.log(check("ssapdrow", "password"));
