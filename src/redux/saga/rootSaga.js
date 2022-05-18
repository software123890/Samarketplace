import { all } from "@redux-saga/core/effects";
import { fetchProductList } from "./fetchProductList";

export function* rootSaga() {
  yield all([fetchProductList()]);
}
