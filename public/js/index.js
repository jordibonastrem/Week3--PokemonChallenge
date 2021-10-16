/* eslint-disable no-new */
import Page from "./Page.js";
import PokeApiConnection from "./PokeApiConnection.js";
import Pokemon from "./Pokemon.js";
import PokemonCard from "./PokemonCard.js";

// new Page(document.querySelector("body"));
const pokemonArr = [];
const pokeApiConnection = new PokeApiConnection();

(async () => {
  const pokemons = await pokeApiConnection.getPokemons();
  const results = await pokemons.results;

  results.forEach(async (result) => {
    const pokemonInfo = await pokeApiConnection.getPokemonInfo(result.url);
    const nextPokemon = new Pokemon(
      pokemonInfo.id,
      pokemonInfo.name,
      pokemonInfo.sprites.other.dream_world.front_default,
      pokemonInfo.types
    );
    console.log(nextPokemon);
    pokemonArr.push(nextPokemon);
  });

  // pokemonArr.forEach((pokemon) => {
  //   console.log(pokemon);
  // });
})();

// new Page(document.querySelector("body"));
// const pokemon = new Pokemon(1, "pikachu", "wwe.pikachu.png", "water");
// new PokemonCard(document.querySelector(".pokemon-list"), pokemon);
