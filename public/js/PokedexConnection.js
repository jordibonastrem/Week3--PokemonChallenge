class PokedexConnection {
  pokemonList;
  url = "https://pokedex-jordi.herokuapp.com/pokemon";
  constructor(pokemonList = "") {
    this.pokemonList = pokemonList;
    console.log(pokemonList);
    this.connectToLocalApi();
  }

  async connectToLocalApi() {
    const response = await fetch(this.url);
    const responseJson = await response.json();
    console.log(responseJson);
  }

  async postPokemons() {
    await fetch(this.url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.pokemonList),
    });
  }
}

export default PokedexConnection;
