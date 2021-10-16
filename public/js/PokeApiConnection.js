class PokeApiConnection {
  urlApi = "https://pokeapi.co/api/v2/pokemon";

  async getResponseJson() {
    const response = await fetch(this.urlApi);
    const responseJson = await response.json();
    return responseJson;
  }

  getNextPage({ next }) {
    console.log(next);
  }

  getPokemons({ results }) {
    console.log(results);
    results.forEach(({ name, url }) => {
      console.log(name, url);
    });
  }
}

p = new PokeApiConnection();
(async () => {
  const pokemons = await p.getResponseJson();
  console.log(pokemons);
  p.getNextPage(pokemons);
  p.getPokemons(pokemons);
})();
