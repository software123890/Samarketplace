import { takeLatest, call, put } from "@redux-saga/core/effects";
import { actionTypes } from "../../redux/actions/actionTypes";
import { axiosInstance } from "../../api/servicesApi";
import { requestSetProductList } from "../../redux/actions/actions";
import { API_URLS } from "../../api/ApiUrls";
export function requestFetchProductList() {
  return axiosInstance.get(API_URLS.GET_PRODUCT_LIST_URL);
}

export function* handlefetchProductList() {
  try {
    const response = yield call(requestFetchProductList);
    yield put(requestSetProductList(response.data));
  } catch (error) {
    console.log(error);
  }
}

export function* fetchProductList() {
  yield takeLatest(
    actionTypes.REQUEST_GET_PRODUCT_LIST,
    handlefetchProductList
  );
}
