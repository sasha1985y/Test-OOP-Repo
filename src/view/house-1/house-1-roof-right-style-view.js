import AbstractView from '../../framework/view/abstract-view.js';


const createRoofRightStyleTemplate = () => (
  `<div>
    <button class="close-btn roof-right-img"></button>
    <div class="editable visually-hidden">
      <button class="destroy-btn trash"></button>
      <style style="display:block; white-space: pre" contenteditable="">
        .roof-right {
          margin-left: -26px;
          border-left: 25px solid transparent;
          border-right: 25px solid transparent;
          border-bottom: 50px solid rgb(171, 185, 144);
        }
      </style>
    </div>
  </div>`
);
/**
 * Класс представления который создаёт компонент редактирования крайнего правого сегмента крыши дом1
 */
export default class RoofRightStyleView extends AbstractView {

  #handleHiddenRoofRightStyleWindow = null;
  #handleDestroyRoofRightStyleWindow = null;

  constructor({ onHiddenRoofRightStyleWindow, onDestroyRoofRightStyleWindow }) {
    super();
    this.#handleHiddenRoofRightStyleWindow = onHiddenRoofRightStyleWindow;
    this.#handleDestroyRoofRightStyleWindow = onDestroyRoofRightStyleWindow;

    this.element.querySelector('.close-btn')
      .addEventListener('click', this.#hiddenRoofRightStyleWindowHandler);
    this.element.querySelector('.destroy-btn')
      .addEventListener('click', this.#destroyRoofRightStyleWindowHandler);

  }

  get template() {
    return createRoofRightStyleTemplate();
  }

  #hiddenRoofRightStyleWindowHandler = (evt) => {
    evt.preventDefault();
    this.#handleHiddenRoofRightStyleWindow();
    this.element.querySelector('.editable')
      .classList.toggle('visually-hidden');
  };

  #destroyRoofRightStyleWindowHandler = (evt) => {
    evt.preventDefault();
    this.#handleDestroyRoofRightStyleWindow();
  };
}
