class PokeApiConnection {
  urlApi = "https://pokeapi.co/api/v2/pokemon";

  async getPokemonPage() {
    const response = await fetch(this.urlApi);
    const pokemons = await response.json();
    return pokemons;
  }
}

p = new PokeApiConnection();
p.getPokemonPage();
