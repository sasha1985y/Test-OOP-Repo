import AbstractView from '../../framework/view/abstract-view.js';

const createHouseOneTemplate =
() => (
  `<section id="house-container" class="house-container">
    <section id="full-roof" class="full-roof">
      <div id="roof-left" class="roof-left"></div>
      <div id="roof-middle" class="roof-middle"></div>
      <div id="roof-right" class="roof-right"></div>
    </section>
    <section id="full-walls" class="full-walls">
      <div id="wall-left" class="wall-left">
        <button class="btn-propertyes"></button>
      </div>
      <div id="wall-right" class="wall-right"></div>
    </section>
  </section>`
);
/**
 * Класс представления который создаёт компонент дом-1
 */
export default class HouseOneView extends AbstractView {

  #handleChoseHouseOneSegment = null;

  constructor({ onChoseHouseOneSegment }) {
    super();
    this.#handleChoseHouseOneSegment = onChoseHouseOneSegment;

    this.element.querySelectorAll('div')[0]
      .addEventListener('click', this.#choseHouseOneSegmentHandler);
    this.element.querySelectorAll('div')[1]
      .addEventListener('click', this.#choseHouseOneSegmentHandler);
    this.element.querySelectorAll('div')[2]
      .addEventListener('click', this.#choseHouseOneSegmentHandler);
    this.element.querySelectorAll('div')[3]
      .addEventListener('click', this.#choseHouseOneSegmentHandler);
    this.element.querySelectorAll('div')[4]
      .addEventListener('click', this.#choseHouseOneSegmentHandler);

  }

  get template() {
    return createHouseOneTemplate();
  }

  #choseHouseOneSegmentHandler = (evt) => {
    if (evt.target.tagName === 'DIV') {
      //evt.preventDefault();
      this.#handleChoseHouseOneSegment(evt.target.id);
    }
  };
}
