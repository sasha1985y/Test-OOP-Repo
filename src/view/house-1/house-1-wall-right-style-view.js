import AbstractView from '../../framework/view/abstract-view.js';


const createWallRightStyleTemplate = () => (
  `<div>
    <button class="close-btn wall-right-img"></button>
    <div class="editable visually-hidden">
      <button class="destroy-btn trash"></button>
      <style style="display:block; white-space: pre" contenteditable="">
        .wall-right {
            width: 50px;
            height: 45px;
            background: rgb(170, 201, 113);
        }
      </style>
    </div>
  </div>`
);
/**
 * Класс представления который создаёт компонент редактирования правого сегмента стены дом1
 */
export default class WallRightStyleView extends AbstractView {

  #handleHiddenWallRightStyleWindow = null;
  #handleDestroyWallRightStyleWindow = null;

  constructor({ onHiddenWallRightStyleWindow, onDestroyWallRightStyleWindow }) {
    super();
    this.#handleHiddenWallRightStyleWindow = onHiddenWallRightStyleWindow;
    this.#handleDestroyWallRightStyleWindow = onDestroyWallRightStyleWindow;

    this.element.querySelector('.close-btn')
      .addEventListener('click', this.#hiddenWallRightStyleWindowHandler);
    this.element.querySelector('.destroy-btn')
      .addEventListener('click', this.#destroyWallRightStyleWindowHandler);

  }

  get template() {
    return createWallRightStyleTemplate();
  }

  #hiddenWallRightStyleWindowHandler = (evt) => {
    evt.preventDefault();
    this.#handleHiddenWallRightStyleWindow();
    this.element.querySelector('.editable')
      .classList.toggle('visually-hidden');
  };

  #destroyWallRightStyleWindowHandler = (evt) => {
    evt.preventDefault();
    this.#handleDestroyWallRightStyleWindow();
  };
}
