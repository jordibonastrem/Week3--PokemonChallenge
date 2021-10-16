/* eslint-disable class-methods-use-this */
class PokeApiConnection {
  urlApi = "https://pokeapi.co/api/v2/pokemon";

  async getPokemons(endpointIndex = "0", endpointLimit = "10") {
    const response = await fetch(
      `${this.urlApi}?offset=${endpointIndex}&limit=${endpointLimit}`
    );
    const responseJson = await response.json();
    return responseJson;
  }
}
export default PokeApiConnection;
