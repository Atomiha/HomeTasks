"use strict";

const url = "https://pokeapi.co/api/v2/pokemon/ditto";
// const request = new XMLHttpRequest();
// request.open("GET", url);

// request.send();

// request.addEventListener("load", function () {
//     if (this.status !== 200) return;
//     const { abilities } = JSON.parse(this.responseText);
//     const request = new XMLHttpRequest();
//     request.open("GET", abilities[0].ability.url);

//     request.send();

//     request.addEventListener("load", function () {
//         const { effect_entries } = JSON.parse(this.responseText);
//         const enEffect = effect_entries.find((e) => e.language.name === "en");
//         console.log(enEffect.effect);
//     });
// });

function getData(url, errorMessage) {
    return fetch(url).then((response) => {
        if (!response.ok) {
            throw new Error(`${errorMessage}  ${response.status}`).message;
        }
        return response.json();
    });
}

const req = getData(url, "Can't get Pokemons info")
    .then(({ abilities }) => {
        return getData(abilities[0].ability.url, "Can't get Pokemon info");
    })
    .then(({ effect_entries }) => {
        const enEffect = effect_entries.find((e) => e.language.name === "en");
        console.log(enEffect.effect);
    })
    .catch((error) => console.log(error));
