"use strict";

const request = new XMLHttpRequest();
const url = "https://pokeapi.co/api/v2/pokemon/ditto";
request.open("GET", url);

request.send();

request.addEventListener("load", function () {
    if (this.status !== 200) return;
    const { abilities } = JSON.parse(this.responseText);
    const request = new XMLHttpRequest();
    request.open("GET", abilities[0].ability.url);

    request.send();

    request.addEventListener("load", function () {
        const { effect_entries } = JSON.parse(this.responseText);
        const enEffect = effect_entries.find((e) => e.language.name === "en");
        console.log(enEffect.effect);
    });
});
