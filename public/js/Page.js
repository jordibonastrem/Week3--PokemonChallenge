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
        <h1 class="main__title">Pokemons</h1>
        <section class="pokemon-container">
          <ul class="pokemon-list">
          </ul>
        </section>
        <div class="pageselection">
        </div>
      </main>`;

    this.element.innerHTML = html;
  }
}

export default Page;