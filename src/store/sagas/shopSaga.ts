import { AxiosResponse } from 'axios';
import { takeLatest, call, put, select } from 'redux-saga/effects'
import ShopAPI, { GetProductOptions, ProductFiltersApiResponse } from '../../api/shopAPI'
import ShopAction, { ShopProductsFetchAction } from '../actions/shopAction'
import { ShopProducts } from '../reducers/shopReducer';
import { User } from '../reducers/userReducer';
import { StoreStateType } from '../rootReducer';

function* workerFetchShopProductsSaga(action: ShopProductsFetchAction) {
  const shopAPI = new ShopAPI();
  const shopAction = new ShopAction();

  try {
    const response: AxiosResponse = yield call(shopAPI.getProducts, action.options);
    const shopProducts = response.data as ShopProducts
    
    yield put(shopAction.setShopProducts(shopProducts));
  } catch (err) {
    console.log(err)
  }
}

function* workerFetcBestSellerSaga() {
  const shopAPI = new ShopAPI();
  const shopAction = new ShopAction();

  try {
    const response: AxiosResponse = yield call(shopAPI.getProducts, { category: ['best seller'] });
    const { products } = response.data as ShopProducts
    
    yield put(shopAction.setBestSeller(products));
  } catch (err) {
    console.log(err)
  }
}

function* workerFetchShopProductsAndFiltersSaga() {
  const shopAPI = new ShopAPI();
  const shopAction = new ShopAction();

  try {
    const productsResponse: AxiosResponse = yield call(shopAPI.getProducts, {});
    const filtersResponse: AxiosResponse = yield call(shopAPI.getProductFilters);
    
    const shopProducts = productsResponse.data as ShopProducts
    const { productFilters } = filtersResponse.data as ProductFiltersApiResponse

    
    yield put(shopAction.setShopProductsAndFilters(shopProducts, productFilters));
  } catch (err) {
    console.log(err)
  }
}

export function* watchShopSaga() {
  yield takeLatest(ShopAction.FETCH_SHOP_PRODUCTS, workerFetchShopProductsSaga);
  yield takeLatest(ShopAction.FETCH_BEST_SELLER, workerFetcBestSellerSaga);
  yield takeLatest(ShopAction.FETCH_SHOP_PRODUCTS_AND_FILTERS, workerFetchShopProductsAndFiltersSaga);
}
