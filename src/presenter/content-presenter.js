import { render } from '../framework/render.js';
import { UpdateType } from '../const.js';
import HouseTwoView from '../view/house-2-view.js';
//import HouseOneView from '../view/house-1-view.js';
import HouseRenderView from '../view/house-render-view.js';
//import RoofLeftStyleView from '../view/house-1-roof-left-style-view.js';
//import RoofMiddleStyleView from '../view/house-1-roof-middle-style-view.js';
//import RoofRightStyleView from '../view/house-1-roof-right-style-view.js';
//import WallLeftStyleView from '../view/house-1-wall-left-style-view.js';
//import WallRightStyleView from '../view/house-1-wall-right-style-view.js';
import HouseOnePresenter from './house-1-presenter.js';

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
  //** @type {HTMLElement} компонент редактирования крайнего левого сегмента крыши дом1 */
  //#roofLeftStyleComponent = null;
  //** @type {HTMLElement} компонент редактирования среднего сегмента крыши дом1 */
  //#roofMiddleStyleComponent = null;
  //** @type {HTMLElement} компонент редактирования крайнего правого сегмента крыши дом1 */
  //#roofRightStyleComponent = null;
  //** @type {HTMLElement} компонент редактирования крайнего левого сегмента стены дом1 */
  //#wallLeftStyleComponent = null;
  //** @type {HTMLElement} компонент редактирования крайнего правого сегмента стены дом1 */
  //#wallRightStyleComponent = null;

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

    //const houseOneComponent = new HouseOnePresenter({quartalContainer: this.#quartalContainer});

    /*this.#houseOneComponent = new HouseOneView({
      onChoseHouseOneSegment: (segment) => {
        if (segment === 'roof-left' && this.#houseOneSettings.roofLeft === false) {
          this.#roofLeftStyleComponent = new RoofLeftStyleView({
            onHiddenRoofLeftStyleWindow: () => {},
            onDestroyRoofLeftStyleWindow: () => {
              remove(this.#roofLeftStyleComponent);
              this.#houseOneSettings.roofLeft = false;
            }
          });
          render(this.#roofLeftStyleComponent, this.#quartalContainer);
          this.#houseOneSettings.roofLeft = true;
        } else if (segment === 'roof-middle' && this.#houseOneSettings.roofMiddle === false) {
          this.#roofMiddleStyleComponent = new RoofMiddleStyleView({
            onHiddenRoofMiddleStyleWindow: () => {},
            onDestroyRoofMiddleStyleWindow: () => {
              remove(this.#roofMiddleStyleComponent);
              this.#houseOneSettings.roofMiddle = false;
            }
          });
          render(this.#roofMiddleStyleComponent, this.#quartalContainer);
          this.#houseOneSettings.roofMiddle = true;
        } else if (segment === 'roof-right' && this.#houseOneSettings.roofRight === false) {
          this.#roofRightStyleComponent = new RoofRightStyleView({
            onHiddenRoofRightStyleWindow: () => {},
            onDestroyRoofRightStyleWindow: () => {
              remove(this.#roofRightStyleComponent);
              this.#houseOneSettings.roofRight = false;
            }
          });
          render(this.#roofRightStyleComponent, this.#quartalContainer);
          this.#houseOneSettings.roofRight = true;
        } else if (segment === 'wall-left' && this.#houseOneSettings.wallLeft === false) {
          this.#wallLeftStyleComponent = new WallLeftStyleView({
            onHiddenWallLeftStyleWindow: () => {},
            onDestroyWallLeftStyleWindow: () => {
              remove(this.#wallLeftStyleComponent);
              this.#houseOneSettings.wallLeft = false;
            }
          });
          render(this.#wallLeftStyleComponent, this.#quartalContainer);
          this.#houseOneSettings.wallLeft = true;
        } else if (segment === 'wall-right' && this.#houseOneSettings.wallRight === false) {
          this.#wallRightStyleComponent = new WallRightStyleView({
            onHiddenWallRightStyleWindow: () => {},
            onDestroyWallRightStyleWindow: () => {
              remove(this.#wallRightStyleComponent);
              this.#houseOneSettings.wallRight = false;
            }
          });
          render(this.#wallRightStyleComponent, this.#quartalContainer);
          this.#houseOneSettings.wallRight = true;
        }
      }
    });*/

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
          const houseOneComponent = new HouseOnePresenter({quartalContainer: this.#quartalContainer});
          this.#houseOneComponent = houseOneComponent.init();
          render(this.#houseOneComponent, this.#quartalContainer);
          const houseContainer = document.querySelector('.house-container');
          this.#houseDrawing(houseContainer);
        } else if (id === 'house-2') {
          render(this.#houseTwoComponent, this.#quartalContainer);
          const house2Container = document.querySelector('.house2-container');
          this.#houseDrawing(house2Container);
        }
      }

    });
    render(this.#houseRenderComponent, this.#choseHouseForm);

    console.log(this.#contentProducts);

  };

  #houseDrawing(container) {
    let dragging = false;
    let startX = 0;
    let startY = 0;

    container.addEventListener('mousedown', (e) => {
      dragging = true;

      const style = window.getComputedStyle(container);

      const translateX = parseInt(style.getPropertyValue('--x'), 10);
      const translateY = parseInt(style.getPropertyValue('--y'), 10);

      startX = e.pageX - translateX;
      startY = e.pageY - translateY;
    });

    container.addEventListener('mouseup', (e) => {
      e.preventDefault();
      dragging = false;
    });

    document.body.addEventListener('mousemove', (e) => {
      if (!dragging) {
        return;
      }

      container.style.setProperty('--x', `${e.pageX - startX}px`);
      container.style.setProperty('--y', `${e.pageY - startY}px`);
    });
  }
}


