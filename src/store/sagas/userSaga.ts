import { AxiosResponse } from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects'
import ShopAPI from '../../api/shopAPI'
import { convertFiltersToCategories } from '../../utils/helpers';
import ShopAction from '../actions/shopAction';
import UserAction, { UserFiltersUpdateAction } from '../actions/userAction';
import { ShopProducts } from '../reducers/shopReducer';


function* workerUpdateUserFiltersSaga(action: UserFiltersUpdateAction) {
  const shopAPI = new ShopAPI();
  const shopAction = new ShopAction();

  try {
    const productsResponse: AxiosResponse = yield call(shopAPI.getProducts, {category: convertFiltersToCategories(action.filters)} );
    const shopProducts = productsResponse.data as ShopProducts

    yield put(shopAction.setShopProducts(shopProducts));
  } catch (err) {
    console.log(err)
  }
}


export function* watchUserSaga() {
  yield takeLatest(UserAction.UPDATE_USER_FILTERS, workerUpdateUserFiltersSaga);
}
