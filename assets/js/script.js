import { pokedex as pd } from "./pokemons.js";

const form = document.querySelector("form");
const search = document.querySelector("#search-bar");
const main = document.querySelector("main");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let val = Number(search.value);
    let pokedex = pd.find(pokemon => pokemon.id === val);

    let pokeName = pokedex.name;
    let pokeImg = pokedex.image;


    let container = `
        <div class="container">
            <h2>${pokeName}</h2>
            <div class="firstLine">
                <div class="types">
                    <h3>Type</h3>
                    <div class="typeElements">
                        <p class="type">${pokedex.type1}</p>
                        <p class="type">${pokedex.type2}</p>
                    </div>
                </div>
                <div class="firstImgContainer">
                    <div class="secondImgContainer">
                        <div class="thirdImgContainer">
                            <img class="pokeImg" src="${pokeImg}" alt="${pokeName}">
                        </div>
                    </div>
                </div>
                <div class="types">
                    <h3>Weakness</h3>
                    <div class="typeElements">
                        <p class="type">${pokedex.weackness1}</p>
                        <p class="type">${pokedex.weackness2}</p>
                        <p class="type">${pokedex.weackness3}</p>
                        <p class="type">${pokedex.weackness4}</p>
                    </div>
                </div>    
            </div>
            <div class="secondLine">
                <p class="descriptionTxt">${pokedex.description}</p>
            </div>
        </div>
    `;

    if (!pokedex) {
        console.log("Pokémon not found");
        return;
    }

    search.value = "";

    console.log(pokeName);
    main.innerHTML = "";
    main.insertAdjacentHTML("beforeend", container);
});