/* eslint-disable class-methods-use-this */
class PokeApiConnection {
  urlApi = "https://pokeapi.co/api/v2/pokemon";
  pokemonEndPoint;

  async getResponseJson() {
    const response = await fetch(this.urlApi);
    const responseJson = await response.json();
    return responseJson;
  }

  getNextPage({ next }) {
    console.log(next);
  }
}

p = new PokeApiConnection();
(async () => {
  const pokemons = await p.getResponseJson();
  console.log(pokemons);
  // p.getNextPage(pokemons);
})();
