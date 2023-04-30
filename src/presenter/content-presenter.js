import { render } from '../framework/render.js';
import { UpdateType } from '../const.js';
import HouseOneView from '../view/house-1-view.js';
import HouseTwoView from '../view/house-2-view.js';
import HouseRenderView from '../view/house-render-view.js';

export default class ContentPresenter {
  /**@type {Object} данные с сервера */
  #productsModel = null;
  /** @type {Array} копия данных с сервера */
  #contentProducts = [];
  /** @type {HTMLElement} элемент разметки куда рендерим дома class="quartal" */
  #quartalContainer = null;
  /** @type {HTMLElement} компонент представления дом-1 */
  #houseOneComponent = null;
  /** @type {HTMLElement} компонент представления дом-2 (XD) */
  #houseTwoComponent = null;
  /** @type {HTMLElement} компонент представления выбора дома */
  #houseRenderComponent = null;
  /** @type {HTMLElement} элемент разметки куда рендерим элемент выбора дома class="chose-form" */
  #choseHouseForm = null;

  constructor({
    productsModel,
    choseHouseForm,
    quartalContainer
  }) {
    this.#productsModel = productsModel;
    this.#productsModel.addObserver(this.#handleModelEvent);
    this.#choseHouseForm = choseHouseForm;
    this.#quartalContainer = quartalContainer;
  }

  #handleModelEvent = (updateType) => {
    if (updateType === UpdateType.INIT) {

      this.#contentProducts = [...this.#productsModel.products];
    }

    this.#houseOneComponent = new HouseOneView();
    this.#houseTwoComponent = new HouseTwoView({
      onClickUp: () => {

      },
      onClickDown: () => {

      },
      onClickLeft: () => {

      },
      onClickRight: () => {

      }
    });

    this.#houseRenderComponent = new HouseRenderView({
      onHouseSelect: (id) => {
        if (id === 'house-1') {
          render(this.#houseOneComponent, this.#quartalContainer);
        } else if (id === 'house-2') {
          render(this.#houseTwoComponent, this.#quartalContainer);
        }
      }
    });
    render(this.#houseRenderComponent, this.#choseHouseForm);


    console.log(this.#contentProducts);

  };
}


