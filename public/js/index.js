/* eslint-disable no-new */
import Page from "./Page.js";
import PokeApiConnection from "./PokeApiConnection.js";
import Pokemon from "./Pokemon.js";
import PokemonCard from "./PokemonCard.js";
import PaginationComponent from "./PaginationComponent.js";

// new Page(document.querySelector("body"));
const pokemonArr = [];
const pokeApiConnection = new PokeApiConnection();
let pageNumber = "0";

async function newPage() {
  const pokemons = await pokeApiConnection.getPokemons(`${pageNumber * 10}`);
  const results = await pokemons.results;
  console.log("eee");
  console.log(results);
  pageNumber++;

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

  const page = new Page(document.querySelector("body"));
  pokemonArr.forEach((pokemon) => {
    new PokemonCard(document.querySelector(".cards__list"), pokemon);
  });

  new PaginationComponent(
    page.element.querySelector(".pagination"),
    "pagination__previous",
    "<"
  );
  new PaginationComponent(
    page.element.querySelector(".pagination"),
    "pagination__next",
    ">",
    newPage
  );
}

(async () => {
  newPage();
  // const pokemons = await newPage();
  // const results = await pokemons.results;
  // await Promise.all(
  //   results.map(async (result) => {
  //     const pokemonInfo = await pokeApiConnection.getPokemonInfo(result.url);
  //     const nextPokemon = new Pokemon(
  //       pokemonInfo.id,
  //       pokemonInfo.name,
  //       pokemonInfo.sprites.other.dream_world.front_default,
  //       pokemonInfo.types,
  //       pokemonInfo.stats[0].base_stat,
  //       pokemonInfo.stats[1].base_stat,
  //       pokemonInfo.stats[2].base_stat,
  //       pokemonInfo.stats[5].base_stat,
  //       pokemonInfo.types[0].type.name
  //     );
  //     pokemonArr.push(nextPokemon);
  //   })
  // );
  // const page = new Page(document.querySelector("body"));
  // pokemonArr.forEach((pokemon) => {
  //   new PokemonCard(document.querySelector(".cards__list"), pokemon);
  // });
  // new PaginationComponent(
  //   page.element.querySelector(".pagination"),
  //   "pagination__previous",
  //   "<"
  // );
  // new PaginationComponent(
  //   page.element.querySelector(".pagination"),
  //   "pagination__next",
  //   ">",
  //   newPage
  // );
})();

// pokemonArr.forEach((pokemon) => {
//   new PokemonCard(document.querySelector(".pokemon-list"), pokemon);
// });
// new PokemonCard(document.querySelector(".pokemon-list"), pokemonArr[0]);
