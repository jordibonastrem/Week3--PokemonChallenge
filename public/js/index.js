/* eslint-disable no-new */
import Page from "./Page.js";
// import PokeApiConnection from "./PokeApiConnection.js";
import Pokemon from "./Pokemon.js";
import PokemonCard from "./PokemonCard.js";

// new Page(document.querySelector("body"));

// const p = new PokeApiConnection();
// (async () => {
//   const pokemons = await p.getPokemons();
//   console.log(pokemons);
// })();

new Page(document.querySelector("body"));
const pokemon = new Pokemon(1, "pikachu", "wwe.pikachu.png", "water");
new PokemonCard(document.querySelector(".pokemon-list"), pokemon);

// const pe = new Pokemon(1, "pikachu", "wwe.pikachu.png", "water");

// const p = new PokemonCard("pokemon-list", pe);
