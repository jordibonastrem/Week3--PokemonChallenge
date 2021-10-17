import Component from "./Component";

class PaginationComponent extends Component {
  constructor(parentElement, className) {
    super(parentElement, className, "button");
  }

  generateHtml() {
    document.querySelector(".pagination").appendChild(this.element);
  }
}

export default PaginationComponent;
