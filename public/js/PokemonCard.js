import Component from "./Component.js";

class PokemonCard extends Component {
  pokemon;
  constructor(parentElement, pokemon) {
    super(parentElement, "pokemon-card", "li");
    this.pokemon = pokemon;
    this.generateHtml();
  }

  generateHtml() {
    const html = `  
    
                  <img
                src="${this.pokemon.imgSrc}"
                alt="${this.pokemon.name}"
                class="pokemon-card__img"
              />
              <span class="pokemon-card__number">#${this.pokemon.name}</span>
              <span class="pokemon-card__name">${this.pokemon.name}</span>   
   `;

    this.element.innerHTML = html;
  }
}

export default PokemonCard;
