import { all } from "@redux-saga/core/effects";
import { watchShopSaga } from "./sagas/shopSaga";
import { watchUserSaga } from "./sagas/userSaga";

export default function* startRootSaga() {
  yield all([
    watchShopSaga(),
    watchUserSaga()
  ])
}