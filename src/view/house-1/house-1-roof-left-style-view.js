import AbstractView from '../../framework/view/abstract-view.js';


const createRoofLeftStyleTemplate = () => (
  `<div>
    <button class="close-btn roof-left-img"></button>
    <div class="editable visually-hidden">
      <button class="destroy-btn trash"></button>
      <style style="display:block; white-space: pre" contenteditable="">
        .roof-left {
          border-left: 25px solid transparent;
          border-right: 25px solid transparent;
          border-bottom: 50px solid rgb(96, 158, 173);
        }
      </style>
    </div>
  </div>`
);
/**
 * Класс представления который создаёт компонент редактирования крайнего левого сегмента крыши дом1
 */
export default class RoofLeftStyleView extends AbstractView {

  #handleHiddenRoofLeftStyleWindow = null;
  #handleDestroyRoofLeftStyleWindow = null;

  constructor({ onHiddenRoofLeftStyleWindow, onDestroyRoofLeftStyleWindow }) {
    super();
    this.#handleHiddenRoofLeftStyleWindow = onHiddenRoofLeftStyleWindow;
    this.#handleDestroyRoofLeftStyleWindow = onDestroyRoofLeftStyleWindow;

    this.element.querySelector('.close-btn')
      .addEventListener('click', this.#hiddenRoofLeftStyleWindowHandler);
    this.element.querySelector('.destroy-btn')
      .addEventListener('click', this.#destroyRoofLeftStyleWindowHandler);

  }

  get template() {
    return createRoofLeftStyleTemplate();
  }

  #hiddenRoofLeftStyleWindowHandler = (evt) => {
    evt.preventDefault();
    this.#handleHiddenRoofLeftStyleWindow();
    this.element.querySelector('.editable')
      .classList.toggle('visually-hidden');
  };

  #destroyRoofLeftStyleWindowHandler = (evt) => {
    evt.preventDefault();
    this.#handleDestroyRoofLeftStyleWindow();
  };
}
