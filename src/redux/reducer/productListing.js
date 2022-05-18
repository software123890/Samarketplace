import { actionTypes } from "../actions/actionTypes";

const initialState = {
  loading: true,
  ProductList: [],
  error: null,
};

export const setProductList = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.REQUEST_GET_PRODUCT_LIST:
      return { ...state, isCalling: true, error: null };
    case actionTypes.REQUEST_SET_PRODUCT_LIST:
      return { isCalling: false, ProductList: payload, error: null };

    default:
      return state;
  }
};
