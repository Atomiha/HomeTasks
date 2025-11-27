const languageCode = prompt("Enter language code (en, ru, de)");
let greeting;
switch (languageCode) {
  case "en":
    greeting = "Good afternoon";
    break;
  case "ru":
    greeting = "Добрый день";
    break;
  case "de":
    greeting = "Guten Tag";
    break;
  default:
    greeting = "Language code not found";
}
console.log(greeting);
