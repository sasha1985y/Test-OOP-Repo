import ProductsApiService from './products-api-service.js';
import ProductsModel from './model/products-model.js';
import ContentPresenter from './presenter/content-presenter.js';

const AUTHORIZATION = 'Basic sasha2023boquet';
const END_POINT = 'https://api.npoint.io';

const quartal = document.querySelector('.quartal');
const choseForm = document.querySelector('.chose-form');

const productsModel = new ProductsModel({
  productsApiService: new ProductsApiService(END_POINT, AUTHORIZATION)
});

new ContentPresenter({
  productsModel: productsModel,
  choseHouseForm: choseForm,
  quartalContainer: quartal,
});

productsModel.init();
