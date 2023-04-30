import AbstractView from '../framework/view/abstract-view.js';

const createHouseTwoTemplate =
() => (
  `<div class="house2-container">
    <div>
      <button class="arrow-up"></button>
      <button class="arrow-down"></button>
      <button class="arrow-left"></button>
      <button class="arrow-right"></button>
    </div>
    <div class="house2"></div>
  </div>`
);

/**
 * Класс представления который создаёт компонент дом-2
 */
export default class HouseTwoView extends AbstractView {

  #handleClickUp = null;
  #handleClickDown = null;
  #handleClickLeft = null;
  #handleClickRight = null;

  constructor({
    onClickUp,
    onClickDown,
    onClickLeft,
    onClickRight }) {

    super();
    this.#handleClickUp = onClickUp;
    this.#handleClickDown = onClickDown;
    this.#handleClickLeft = onClickLeft;
    this.#handleClickRight = onClickRight;

    this.element.querySelector('.arrow-up')
      .addEventListener('click', this.#clickUpHandler);
    this.element.querySelector('.arrow-down')
      .addEventListener('click', this.#clickDownHandler);
    this.element.querySelector('.arrow-left')
      .addEventListener('click', this.#clickLeftHandler);
    this.element.querySelector('.arrow-right')
      .addEventListener('click', this.#clickRightHandler);

  }

  get template() {
    return createHouseTwoTemplate();
  }

  #clickUpHandler = () => {
    this.#handleClickUp();
    this.element.style = 'transform: translateY(-50px)';
  };

  #clickDownHandler = () => {
    this.#handleClickDown();
    this.element.style = 'transform: translateY(50px)';
  };

  #clickLeftHandler = () => {
    this.#handleClickLeft();
    this.element.style = 'transform: translateX(-50px)';
  };

  #clickRightHandler = () => {
    this.#handleClickRight();
    this.element.style = 'transform: translateX(50px)';
  };
}
