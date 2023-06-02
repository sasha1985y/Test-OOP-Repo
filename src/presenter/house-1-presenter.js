import { render, remove } from '../framework/render.js';
import HouseOneView from '../view/house-1/house-1-view.js';
import RoofLeftStyleView from '../view/house-1/house-1-roof-left-style-view.js';
import RoofMiddleStyleView from '../view/house-1/house-1-roof-middle-style-view.js';
import RoofRightStyleView from '../view/house-1/house-1-roof-right-style-view.js';
import WallLeftStyleView from '../view/house-1/house-1-wall-left-style-view.js';
import WallRightStyleView from '../view/house-1/house-1-wall-right-style-view.js';

export default class HouseOnePresenter {
  /** @type {HTMLElement} элемент разметки куда рендерим дома class="quartal" */
  #quartalContainer = null;
  /** @type {HTMLElement} компонент представления дом-1 */
  #houseOneComponent = null;
  /** @type {HTMLElement} компонент редактирования крайнего лево//го сегмента крыши дом1 */
  #roofLeftStyleComponent = null;
  /** @type {HTMLElement} компонент редактирования среднего сегмента крыши дом1 */
  #roofMiddleStyleComponent = null;
  /** @type {HTMLElement} компонент редактирования крайнего правого сегмента крыши дом1 */
  #roofRightStyleComponent = null;
  /** @type {HTMLElement} компонент редактирования крайнего левого сегмента стены дом1 */
  #wallLeftStyleComponent = null;
  /** @type {HTMLElement} компонент редактирования крайнего правого сегмента стены дом1 */
  #wallRightStyleComponent = null;
  /** @type {Object} объект с настройками режима редактирования дом1 */
  #houseOneSettings = {
    'roofLeft': false,
    'roofMiddle': false,
    'roofRight': false,
    'wallLeft': false,
    'wallRight': false
  };

  constructor({
    quartalContainer
  }) {
    this.#quartalContainer = quartalContainer;
  }

  init() {
    this.#houseOneComponent = new HouseOneView({
      onChoseHouseOneSegment: (segment) => {
        if (segment === 'roof-left' && this.#houseOneSettings.roofLeft === false) {
          this.#roofLeftStyleComponent = new RoofLeftStyleView({
            onHiddenRoofLeftStyleWindow: () => { },
            onDestroyRoofLeftStyleWindow: () => {
              remove(this.#roofLeftStyleComponent);
              this.#houseOneSettings.roofLeft = false;
            }
          });
          render(this.#roofLeftStyleComponent, this.#quartalContainer);
          this.#houseOneSettings.roofLeft = true;
        } else if (segment === 'roof-middle' && this.#houseOneSettings.roofMiddle === false) {
          this.#roofMiddleStyleComponent = new RoofMiddleStyleView({
            onHiddenRoofMiddleStyleWindow: () => { },
            onDestroyRoofMiddleStyleWindow: () => {
              remove(this.#roofMiddleStyleComponent);
              this.#houseOneSettings.roofMiddle = false;
            }
          });
          render(this.#roofMiddleStyleComponent, this.#quartalContainer);
          this.#houseOneSettings.roofMiddle = true;
        } else if (segment === 'roof-right' && this.#houseOneSettings.roofRight === false) {
          this.#roofRightStyleComponent = new RoofRightStyleView({
            onHiddenRoofRightStyleWindow: () => { },
            onDestroyRoofRightStyleWindow: () => {
              remove(this.#roofRightStyleComponent);
              this.#houseOneSettings.roofRight = false;
            }
          });
          render(this.#roofRightStyleComponent, this.#quartalContainer);
          this.#houseOneSettings.roofRight = true;
        } else if (segment === 'wall-left' && this.#houseOneSettings.wallLeft === false) {
          this.#wallLeftStyleComponent = new WallLeftStyleView({
            onHiddenWallLeftStyleWindow: () => { },
            onDestroyWallLeftStyleWindow: () => {
              remove(this.#wallLeftStyleComponent);
              this.#houseOneSettings.wallLeft = false;
            }
          });
          render(this.#wallLeftStyleComponent, this.#quartalContainer);
          this.#houseOneSettings.wallLeft = true;
        } else if (segment === 'wall-right' && this.#houseOneSettings.wallRight === false) {
          this.#wallRightStyleComponent = new WallRightStyleView({
            onHiddenWallRightStyleWindow: () => { },
            onDestroyWallRightStyleWindow: () => {
              remove(this.#wallRightStyleComponent);
              this.#houseOneSettings.wallRight = false;
            }
          });
          render(this.#wallRightStyleComponent, this.#quartalContainer);
          this.#houseOneSettings.wallRight = true;
        }
      }
    });
    return this.#houseOneComponent;
  }

}
