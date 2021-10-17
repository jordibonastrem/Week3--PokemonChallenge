import Component from "./Component.js";

class Page extends Component {
  constructor(parentElement) {
    super(parentElement, "main", "section");
    this.generateHtml();
  }

  generateHtml() {
    const html = `     
    <header class="header">
    
      </header>
      <main class="main">
          <nav>
      <div class="heading">
        <h4>Pokemons</h4>
      </div>
      <ul class="nav-links">
        <button class="button-nav active">Pokedex</button>
        <button class="button-nav active">PokeApi</button>
      </ul>
    </nav>
        <section class="cards">
          <ul class="cards__list">
          </ul>
        </section>
        <div class="pagination">
        </div>
      </main>`;

    this.element.innerHTML = html;
  }
}

export default Page;
