import AbstractView from '../framework/view/abstract-view.js';


const createHouseRenderTemplate =
  () => (
    `<ul class="render-house-list">
      <li><button style="width: 5%; height: 40px; background: url(https://thumb.cloud.mail.ru/weblink/thumb/xw1/X8wp/y4i4w1dR5) no-repeat" id="house-1"></button></li>
      <li><button style="width: 5%; height: 40px; background: url(https://thumb.cloud.mail.ru/weblink/thumb/xw1/xwGP/5VT3qxoBZ) no-repeat" id="house-2"></button></li>
    </ul>`

  );
/**
 * Класс представления который создаёт компонент выбора дома
 */
export default class HouseRenderView extends AbstractView {

  #handleHouseSelect = null;

  constructor({ onHouseSelect }) {
    super();
    this.#handleHouseSelect = onHouseSelect;

    this.element.querySelectorAll('button')[0]
      .addEventListener('click', this.#houseSelectHandler);
    this.element.querySelectorAll('button')[1]
      .addEventListener('click', this.#houseSelectHandler);

  }

  get template() {
    return createHouseRenderTemplate();
  }

  #houseSelectHandler = (evt) => {
    if (evt.target.tagName === 'BUTTON') {
      this.#handleHouseSelect(evt.target.id);
    }
  };
}
