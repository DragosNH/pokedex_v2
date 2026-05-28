import { pokedex as pd } from "./pokemons.js";

let pokedex = pd.find(pokemon => pokemon.id === 1).name;
