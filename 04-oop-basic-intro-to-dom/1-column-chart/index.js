export default class ColumnChart {
  chartHeight = 50;
  subElements = {};

  constructor({
    data = [],
    label = "",
    value = 0,
    link = "",
    formatHeading = (data) => data,
  } = {}) {
    this.label = label;
    this.link = link;
    this.value = formatHeading(value);
    this.data = data;

    this.render();
  }

  getLink() {
    return this.link
      ? `<a class="column-chart__link" href="${this.link}">View all</a>`
      : "";
  }

  getStyle() {
    return `--chart-height: ${this.chartHeight}`;
  }

  get template() {
    return `
      <div class = "column-chart column-chart_loading" style="${this.getStyle()}">
        <div class ="column-chart__title">
          Total ${this.label}
          ${this.getLink()}
        </div>
        <div class="column-chart__container">
          <div data-element="header" class= "column-chart__header">
              ${this.value}
          </div>
          <div data-element="body" class="column-chart__chart">
              ${this.getColumnBody()}
          </div>
        </div>
      </div>
    `;
  }

  render() {
    const element = document.createElement("div");
    element.innerHTML = this.template;
    this.element = element.firstElementChild;
    if (this.data.length) {
      this.element.classList.remove("column-chart_loading");
    }
    this.subElements = this.getSubElements();
  }

  update(data) {
    this.data = data;
    this.subElements.body.innerHTML = this.getColumnBody();
  }

  getColumnBody() {
    const maxValue = Math.max(...this.data);
    const scale = this.chartHeight / maxValue;

    return this.data.map(item => {
      const percent = ((item / maxValue) * 100).toFixed(0);
      return `<div style="--value: ${Math.floor(
        item * scale
      )}" data-tooltip="${percent}%"></div>`;
    }).join("");
  }

  getSubElements() {
    const result = {};
    const elements = this.element.querySelectorAll("[data-element]");
    for (const subElement of elements) {
      const name = subElement.dataset.element;
      result[name] = subElement;
    }
    return result;
  }

  destroy() {
    this.remove();
    this.element = null;
    this.subElements = {};
  }

  remove() {
    if (this.element) {
      this.element.remove();
    }
  }
}
