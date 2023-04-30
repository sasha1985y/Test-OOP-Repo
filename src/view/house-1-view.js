import AbstractView from '../framework/view/abstract-view.js';

const createHouseOneTemplate =
() => (
  `<div class="house">
        <div class="full-roof">
            <div class="roof-wall"></div>
            <div class="roof1"></div>
            <div class="roof2"></div>
        </div>
        <div class="full-walls">
            <div class="front-wall">
                <button class="btn-propertyes"></button>
            </div>
            <div class="side-wall"></div>
        </div>
    </div>`
);
/**
 * Класс представления который создаёт компонент дом-1
 */
export default class HouseOneView extends AbstractView {

  get template() {
    return createHouseOneTemplate();
  }
}
