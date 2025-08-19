import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";
import { thunk } from "redux-thunk"; 


import client from "./reducers/clientReducer";
import cart from "./reducers/cartReducer";
import product from "./reducers/productReducer";
import user from "./reducers/userReducer";

const rootReducer = combineReducers({
  client,
  cart,
  product,
  user,
});

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const middlewares = [thunk];

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
