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
    
                  <img
                src="${this.pokemon.imgSrc}"
                height="200"
                class="card__img"
              />
              <h2 class="card__name">${this.pokemon.name}</h2>
              <span class="card__number">#${this.pokemon.id}</span>
         
   `;

    this.element.innerHTML = html;
  }
}

export default PokemonCard;
