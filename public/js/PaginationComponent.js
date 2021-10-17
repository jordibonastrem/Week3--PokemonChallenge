import Component from "./Component.js";

class PaginationComponent extends Component {
  actionOnClick;
  constructor(parentElement, className, innerHtml, actionOnClick) {
    super(parentElement, className, "button", innerHtml);
    this.actionOnClick = actionOnClick;
    this.setupEvents();
  }

  setupEvents() {
    this.element.addEventListener("click", this.actionOnClick);
  }
}

export default PaginationComponent;
