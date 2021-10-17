/* eslint-disable class-methods-use-this */
class PokeApiConnection {
  urlApi = "https://pokeapi.co/api/v2/pokemon";
  endpointLimit = "9";

  async getPokemons(endpointIndex = "0") {
    const response = await fetch(
      `${this.urlApi}?offset=${endpointIndex}&limit=${this.endpointLimit}`
    );
    const responseJson = await response.json();
    return responseJson;
  }

  async getPokemonInfo(url) {
    const response = await fetch(url);
    const responseJson = await response.json();
    return responseJson;
  }

  // async getPokemonsNumPages() {
  //   const response = await fetch(this.urlApi);
  //   const responseJson = await response.json();
  //   let pokemonPageNumber = responseJson.count;
  //   pokemonPageNumber /= this.endpointLimit;
  //   pokemonPageNumber = parseInt(pokemonPageNumber, 10);
  //   return pokemonPageNumber;
  // }
}
export default PokeApiConnection;
