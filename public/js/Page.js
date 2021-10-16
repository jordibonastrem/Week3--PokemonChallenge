import Component from "./Component";

class Page extends Component {
  constructor(parentElement, series) {
    super(parentElement, "container");
    this.series = series;
    console.log(series);
  }

  generateHtml() {
    const html = `     <header class="header">
        <nav class="header__nav"></nav>
      </header>
      <main class="main">
        <h1 class="main__title">Browse Pokémon</h1>
        <section class="pokemon-container">
          <ul class="pokemon-list">
          </ul>
        </section>
        <div class="pagination">
          
        </div>
      </main>`;

    this.element.innerHTML = html;
  }
}
