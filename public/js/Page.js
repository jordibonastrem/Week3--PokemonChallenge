import Component from "./Component.js";

class Page extends Component {
  constructor(parentElement) {
    super(parentElement, "main", "section");
    this.generateHtml();
  }

  generateHtml() {
    const html = `     
    <header class="header">
    <h1 class="main__title">Pokemons</h1>
      </header>
      <main class="main">
        <section class="cards">
          <ul class="cards__list">
          </ul>
        </section>
        <div class="pagination">
        <button class="pagination__previous">&lt;</button>
        <button class="pagination__next">&gt;</button>
        </div>
      </main>`;

    this.element.innerHTML = html;
  }
}

export default Page;
