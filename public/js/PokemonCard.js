import Component from "./Component.js";

class PokemonCard extends Component {
  pokemon;
  constructor(parentElement, pokemon) {
    super(parentElement, "card", "li");
    this.pokemon = pokemon;

    this.generateHtml();
    this.getTypes();
    this.getColor();
    this.events();
  }

  getColor() {
    this.element.querySelector(
      ".card__content"
    ).style.background = `radial-gradient(circle at 50% 0,${this.pokemon.color} 36%, #ffffff 36%)`;
    this.element
      .querySelectorAll(".card__content__types span")
      .forEach((spanTypeColor) => {
        spanTypeColor.style.backgroundColor = this.pokemon.color;
      });
  }
  getTypes() {
    this.pokemon.types.forEach((item) => {
      const span = document.createElement("span");
      span.textContent = item.type.name;
      this.element.querySelector(".card__content__types").appendChild(span);
    });
  }

  events() {
    const buttonAdd = this.element.querySelector(".button__add");
    buttonAdd.addEventListener("click", () => {
      console.log("eee");
    });
  }
  generateHtml() {
    const html = ` 
  
            <div class="card__container">
              <div class="card__content">
              <button class="button__add">add</button>
                <p class="card__content__hp">
                  <span>HP</span>
                  ${this.pokemon.hp}
                </p>
                <img
                  src=${this.pokemon.imgSrc}
                  height="200"
                  class="card__content__img"
                />
                <h2 class="card__content__name">${this.pokemon.name.toUpperCase()}</h2>
                <div class="card__content__types">
  
                </div>
                <div class="card__content__stats">
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
    `;

    this.element.innerHTML = html;
  }
}

export default PokemonCard;
