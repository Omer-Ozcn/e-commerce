import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
  compose,
} from "redux";
import { thunk } from "redux-thunk"; // Thunk v3+ için doğru

import client from "./reducers/clientReducer";
import product from "./reducers/productReducer";
import cart from "./reducers/cartReducer";
import user from "./reducers/userReducer";
import address from "./reducers/addressReducer";
import card from "./reducers/cardReducer";
import order from "./reducers/orderReducer";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const rootReducer = combineReducers({
  client,
  product,
  cart,
  user,
  address,
  card,
  order,
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
export default store;
