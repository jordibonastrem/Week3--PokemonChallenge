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

  await Promise.all(
    results.map(async (result) => {
      const pokemonInfo = await pokeApiConnection.getPokemonInfo(result.url);
      const nextPokemon = new Pokemon(
        pokemonInfo.id,
        pokemonInfo.name,
        pokemonInfo.sprites.other.dream_world.front_default,
        pokemonInfo.types
      );

      pokemonArr.push(nextPokemon);
    })
  );
})();
console.log(pokemonArr);
new Page(document.querySelector("body"));
// pokemonArr.forEach((pokemon) => {
//   new PokemonCard(document.querySelector(".pokemon-list"), pokemon);
// });
new PokemonCard(document.querySelector(".pokemon-list"), pokemonArr[0]);
