class Component {
  element;
  parentElement;
  innerHtml;

  constructor(parentElement, className, htmlTag = "div", innerHtml = "") {
    this.innerHtml = innerHtml;
    this.element = document.createElement(htmlTag);
    this.element.className = className;
    this.element.innerHTML = innerHtml;
    this.parentElement = parentElement;

    this.parentElement.append(this.element);
  }
}

export default Component;
