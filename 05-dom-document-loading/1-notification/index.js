export default class NotificationMessage {
  static currentElement;

  constructor(message = "", {duration = 0, type = "success"} = {}) {
    this.message = message;
    this.duration = duration;
    this.type = type;
    this.durationInSeconds = this.duration / 1000;
    this.render();
  }

  render() {
    const element = document.createElement("div");
    element.innerHTML = this.template;
    this.element = element.firstElementChild;
  }

  show(rootElement = document.body) {
    if (NotificationMessage.currentElement) {
      NotificationMessage.currentElement.remove();
    }

    rootElement.append(this.element);
    this.timerEvent = setTimeout(() => {
      this.remove();
    }, this.duration);
    NotificationMessage.currentElement = this;
  }

  get template() {
    return `
      <div class="notification ${this.type}" style="--value:${this.durationInSeconds}s">
        <div class="timer"></div>
        <div class="inner-wrapper">
          <div class="notification-header">${this.type}</div>
          <div class="notification-body">
            ${this.message}
          </div>
        </div>
      </div>
    `;
  }

  destroy() {
    this.remove();
    this.element = null;
  }

  remove() {
    if (this.element) {
      this.element.remove();
    }
    clearTimeout(this.timerEvent);
  }
}
