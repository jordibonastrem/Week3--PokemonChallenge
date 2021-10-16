import Component from "./Component.js";

class PokemonCard extends Component {
  pokemon;
  constructor(parentElement, pokemon) {
    super(parentElement, "card", "li");
    this.pokemon = pokemon;
    // console.log(pokemon);
    this.generateHtml();
  }

  generateHtml() {
    const html = ` 
    <li class="card">
            <div class="card__container">
              <div class="card__content">
                <p class="card__content__hp">
                  <span>HP</span>
                  ${this.pokemon.hp}
                </p>
                <img
                  src=${this.pokemon.imgSrc}
                  height="200"
                  class="card__img"
                />
                <h2 class="card__name">${this.pokemon.name}</h2>
                <div class="card__types">
                  <span>${this.pokemon.type}</span>
                  <span>${this.pokemon.type}</span>
                </div>
                <div class="stats">
                  <div>
                    <h3>${this.pokemon.attack}</h3>
                    <p>Attack</p>
                  </div>
                  <div>
                    <h3>${this.pokemon.defense}</h3>
                    <p>Defense</p>
                  </div>
                  <div>
                    <h3>${this.pokemon.speed}</h3>
                    <p>Speed</p>
                  </div>
                </div>
              </div>
            </div>
    </li>`;

    this.element.innerHTML = html;
  }
}

export default PokemonCard;
