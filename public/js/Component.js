class Component {
  element;

  parentElement;

  constructor(parentElement, className, htmlTag = "div") {
    this.element = document.createElement(htmlTag);
    this.element.className = className;
    this.parentElement = parentElement;

    this.parentElement.appendChild(this.element);
  }
}

export default Component;
