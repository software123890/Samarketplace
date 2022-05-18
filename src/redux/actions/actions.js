import { actionTypes } from "./actionTypes";

export const requestGetProductList = () => {
  return {
    type: actionTypes.REQUEST_GET_PRODUCT_LIST,
  };
};

export const requestSetProductList = (data) => {
  return {
    type: actionTypes.REQUEST_SET_PRODUCT_LIST,
    payload: data,
  };
};
