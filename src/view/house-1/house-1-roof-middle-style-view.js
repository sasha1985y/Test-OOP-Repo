import AbstractView from '../../framework/view/abstract-view.js';


const createRoofMiddleStyleTemplate = () => (
  `<div>
    <button class="close-btn roof-middle-img"></button>
    <div class="editable visually-hidden">
      <button class="destroy-btn trash"></button>
      <style style="display:block; white-space: pre" contenteditable="">
        .roof-middle {
          margin-left: -25px;
          border-left: 25px solid transparent;
          border-right: 25px solid transparent;
          border-top: 50px solid rgb(171, 185, 144);
        }
      </style>
    </div>
  </div>`
);
/**
 * Класс представления который создаёт компонент редактирования среднего сегмента крыши дом1
 */
export default class RoofMiddleStyleView extends AbstractView {

  #handleHiddenRoofMiddleStyleWindow = null;
  #handleDestroyRoofMiddleStyleWindow = null;

  constructor({ onHiddenRoofMiddleStyleWindow, onDestroyRoofMiddleStyleWindow }) {
    super();
    this.#handleHiddenRoofMiddleStyleWindow = onHiddenRoofMiddleStyleWindow;
    this.#handleDestroyRoofMiddleStyleWindow = onDestroyRoofMiddleStyleWindow;

    this.element.querySelector('.close-btn')
      .addEventListener('click', this.#hiddenRoofMiddleStyleWindowHandler);
    this.element.querySelector('.destroy-btn')
      .addEventListener('click', this.#destroyRoofMiddleStyleWindowHandler);

  }

  get template() {
    return createRoofMiddleStyleTemplate();
  }

  #hiddenRoofMiddleStyleWindowHandler = (evt) => {
    evt.preventDefault();
    this.#handleHiddenRoofMiddleStyleWindow();
    this.element.querySelector('.editable')
      .classList.toggle('visually-hidden');
  };

  #destroyRoofMiddleStyleWindowHandler = (evt) => {
    evt.preventDefault();
    this.#handleDestroyRoofMiddleStyleWindow();
  };
}
