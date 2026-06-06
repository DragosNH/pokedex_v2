import { pokedex as pd } from "./pokemons.js";

const form = document.querySelector("form");
const search = document.querySelector("#search-bar");
const main = document.querySelector("main");




form.addEventListener("submit", (e) => {
    e.preventDefault();

    let val = Number(search.value);
    let pokedex = pd.find(pokemon => pokemon.id === val);

    if (!pokedex) {
        console.log("Pokémon not found");
        return;
    }

    let pokeName = pokedex.name;
    let pokeImg = pokedex.image;

    function getTypeColor(type) {
        switch (type) {
            case "Grass": return "#78C850";
            case "Fire": return "#F08030";
            case "Water": return "#6890F0";
            case "Electric": return "#F8D030";
            case "Psychic": return "#F85888";
            case "Ice": return "#98D8D8";
            case "Dragon": return "#7038F8";
            case "Dark": return "#705848";
            case "Fairy": return "#EE99AC";
            case "Normal": return "#A8A878";
            case "Fighting": return "#C03028";
            case "Flying": return "#A890F0";
            case "Poison": return "#A040A0";
            case "Ground": return "#E0C068";
            case "Rock": return "#B8A038";
            case "Bug": return "#A8B820";
            case "Ghost": return "#705898";
            case "Steel": return "#B8B8D0";
            default: return "none";
        }
    }

    let type1Color = getTypeColor(pokedex.type1);
    let type2Color = getTypeColor(pokedex.type2);

    let w1 = getTypeColor(pokedex.weackness1);
    let w2 = getTypeColor(pokedex.weackness2);
    let w3 = getTypeColor(pokedex.weackness3);
    let w4 = getTypeColor(pokedex.weackness4);
    let w5 = getTypeColor(pokedex.weackness5);
    let w6 = getTypeColor(pokedex.weackness6);

    const hideIfEmpty = value => value === "" ? "hidden" : "";


    let t2Class = hideIfEmpty(pokedex.type2);
    let w2Class = hideIfEmpty(pokedex.weackness2);
    let w3Class = hideIfEmpty(pokedex.weackness3);
    let w4Class = hideIfEmpty(pokedex.weackness4);
    let w5Class = hideIfEmpty(pokedex.weackness5);
    let w6Class = hideIfEmpty(pokedex.weackness6);

    let container = `
        <div class="container">
            <div class="topElements">
                <button class="leftBtn btn"><</button>
                <h2>${pokeName}</h2>
                <button class="rightBtn btn">></button>
            </div>
            <div class="firstLine">
                <div class="pokeType">
                    <div class="types">
                        <h3>Type</h3>
                        <div class="typeElements">
                            <p class="type" style="background:${type1Color}">${pokedex.type1}</p>
                            <p class="type ${t2Class}" style="background:${type2Color}">${pokedex.type2}</p>
                        </div>
                    </div>
                </div>
                <div class="pokeImgCont">
                    <div class="firstImgContainer">
                        <div class="secondImgContainer">
                            <div class="thirdImgContainer">
                                <img class="pokeImg" src="${pokeImg}" alt="${pokeName}">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pokeWeakness">
                    <div class="types">
                        <h3>Weakness</h3>
                        <div class="typeElements">
                            <p class="type" style="background:${w1}">${pokedex.weackness1}</p>
                            <p class="type ${w2Class}" style="background:${w2}">${pokedex.weackness2}</p>
                            <p class="type ${w3Class}" style="background:${w3}">${pokedex.weackness3}</p>
                            <p class="type ${w4Class}" style="background:${w4}">${pokedex.weackness4}</p>
                            <p class="type ${w5Class}" style="background:${w5}">${pokedex.weackness5}</p>
                            <p class="type ${w6Class}" style="background:${w6}">${pokedex.weackness6}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="secondLine">
                <p class="descriptionTxt">${pokedex.description}</p>
            </div>
        </div>
    `;

    main.innerHTML = container;

    search.value = "";

    console.log(pokeName);
    main.innerHTML = "";
    main.insertAdjacentHTML("beforeend", container);

    let currentIndex = pd.findIndex(p => p.id === val);
    const leftBtn = document.querySelector(".leftBtn");
    const rightBtn = document.querySelector(".rightBtn");
    const updateSlide = (index) => {
        if (index >= pd.length) currentIndex = 0;
        else if (index < 0) currentIndex = pd.length - 1;
        else currentIndex = index;

        const newPoke = pd[currentIndex];
        search.value = newPoke.id;
        form.dispatchEvent(new Event("submit"));
    };

    leftBtn.addEventListener('click', () => updateSlide(currentIndex - 1));
    rightBtn.addEventListener('click', () => updateSlide(currentIndex + 1));


});
