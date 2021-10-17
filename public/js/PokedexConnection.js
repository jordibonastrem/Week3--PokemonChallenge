class PokedexConnection {
  pokemonList;
  url = "https://pokedex-jordi.herokuapp.com/pokemon";
  constructor(pokemonList = "") {
    this.pokemonList = pokemonList;
    this.connectToLocalApi();
  }

  async connectToLocalApi() {
    console.log("EEEE");
    const response = await fetch(this.url);
    const responseJson = await response.json();
    console.log(responseJson);
  }
}

export default PokedexConnection;
