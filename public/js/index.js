/* eslint-disable no-new */
import Page from "./Page.js";
import PokeApiConnection from "./PokeApiConnection.js";
import Pokemon from "./Pokemon.js";
import PokemonCard from "./PokemonCard.js";
import PaginationComponent from "./PaginationComponent.js";

const pokeApiConnection = new PokeApiConnection();
let pageNumber = "0";

async function newPokemonArray(prevornext = "next") {
  if (pageNumber != 0) {
    document.querySelector(".main").remove();
  }
  if (prevornext === "next") {
    pageNumber++;
  } else {
    pageNumber--;
  }

  const pokemonArr = [];
  const pokemons = await pokeApiConnection.getPokemons(`${pageNumber * 10}`);
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
  const page = new Page(document.querySelector("body"));
  pokemonArr.forEach((pokemon) => {
    new PokemonCard(document.querySelector(".cards__list"), pokemon);
  });

  new PaginationComponent(
    page.element.querySelector(".pagination"),
    "pagination__next",
    ">",
    newPokemonArray
  );
  new PaginationComponent(
    page.element.querySelector(".pagination"),
    "pagination__previous",
    "<",
    newPokemonArray
  );

  const buttonNext = document.querySelector(".pagination__next");
  const buttonPrev = document.querySelector(".pagination__previous");

  buttonNext.addEventListener("click", () => {
    newPokemonArray("next");
  });
  buttonPrev.addEventListener("click", () => {
    newPokemonArray("prev");
  });
}

(async () => {
  await newPokemonArray();
})();
