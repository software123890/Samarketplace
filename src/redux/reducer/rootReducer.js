import { combineReducers } from "redux";
import { setProductList } from "./productListing";

const rootReducer = combineReducers({
  productList: setProductList,
});

export default rootReducer;
