import AbstractView from '../../framework/view/abstract-view.js';


const createWallLeftStyleTemplate = () => (
  `<div>
    <button class="close-btn wall-left-img"></button>
    <div class="editable visually-hidden">
      <button class="destroy-btn trash"></button>
      <style style="display:block; white-space: pre" contenteditable="">
        .wall-left {
            margin-left: 2px;
            width: 45px;
            height: 45px;
            background: rgb(96, 158, 173);
        }
      </style>
    </div>
  </div>`
);
/**
 * Класс представления который создаёт компонент редактирования левого сегмента стены дом1
 */
export default class WallLeftStyleView extends AbstractView {

  #handleHiddenWallLeftStyleWindow = null;
  #handleDestroyWallLeftStyleWindow = null;

  constructor({ onHiddenWallLeftStyleWindow, onDestroyWallLeftStyleWindow }) {
    super();
    this.#handleHiddenWallLeftStyleWindow = onHiddenWallLeftStyleWindow;
    this.#handleDestroyWallLeftStyleWindow = onDestroyWallLeftStyleWindow;

    this.element.querySelector('.close-btn')
      .addEventListener('click', this.#hiddenWallLeftStyleWindowHandler);
    this.element.querySelector('.destroy-btn')
      .addEventListener('click', this.#destroyWallLeftStyleWindowHandler);

  }

  get template() {
    return createWallLeftStyleTemplate();
  }

  #hiddenWallLeftStyleWindowHandler = (evt) => {
    evt.preventDefault();
    this.#handleHiddenWallLeftStyleWindow();
    this.element.querySelector('.editable')
      .classList.toggle('visually-hidden');
  };

  #destroyWallLeftStyleWindowHandler = (evt) => {
    evt.preventDefault();
    this.#handleDestroyWallLeftStyleWindow();
  };
}
