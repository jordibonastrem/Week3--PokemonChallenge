import Component from "./Component.js";

class Page extends Component {
  numberOfPages;
  constructor(parentElement, numberOfPages) {
    super(parentElement, "main", "section");
    this.numberOfPages = numberOfPages;
    this.generateHtml();
    this.generatePagination();
  }

  generatePagination() {
    for (let i = 0; i < this.numberOfPages; i++) {
      const div = document.createElement("div");
      this.element.querySelector(".pagination").appendChild(div);
    }
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
        </div>
      </main>`;

    this.element.innerHTML = html;
  }
}

export default Page;
