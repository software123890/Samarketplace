import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "../redux/saga/rootSaga";
import rootReducer from "../redux/reducer/rootReducer";

let composeEnhancers = compose;
if (typeof window !== "undefined") {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}
const saga = createSagaMiddleware();
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(saga)));
saga.run(rootSaga);
export default store;
