/* eslint-disable no-new */
import Page from "./Page.js";
import PokeApiConnection from "./PokeApiConnection.js";
import Pokemon from "./Pokemon.js";
import PokemonCard from "./PokemonCard.js";

// new Page(document.querySelector("body"));
const pokemonArr = [];
const pokeApiConnection = new PokeApiConnection();

(async () => {
  const numberOfPages = await pokeApiConnection.getPokemonsNumPages();
  console.log(numberOfPages);
  const pokemons = await pokeApiConnection.getPokemons();
  const results = await pokemons.results;

  await Promise.all(
    results.map(async (result) => {
      const pokemonInfo = await pokeApiConnection.getPokemonInfo(result.url);

      const nextPokemon = new Pokemon(
        pokemonInfo.id,
        pokemonInfo.name,
        pokemonInfo.sprites.other.dream_world.front_default,
        pokemonInfo.types,
        pokemonInfo.stats[0].base_stat,
        pokemonInfo.stats[1].base_stat,
        pokemonInfo.stats[2].base_stat,
        pokemonInfo.stats[5].base_stat,
        pokemonInfo.types[0].type.name
      );

      pokemonArr.push(nextPokemon);
    })
  );

  new Page(document.querySelector("body"), numberOfPages);
  pokemonArr.forEach((pokemon) => {
    new PokemonCard(document.querySelector(".cards__list"), pokemon);
  });
})();

// pokemonArr.forEach((pokemon) => {
//   new PokemonCard(document.querySelector(".pokemon-list"), pokemon);
// });
// new PokemonCard(document.querySelector(".pokemon-list"), pokemonArr[0]);
