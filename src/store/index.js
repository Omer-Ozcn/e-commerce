import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";
import { thunk } from "redux-thunk";
import { createLogger } from "redux-logger";

import client from "./reducers/clientReducer";
import cart from "./reducers/cartReducer";
import product from "./reducers/productReducer";
import user from "./reducers/userReducer";
export { fetchCategoriesIfNeeded } from "./thunks/categoryThunks";
export { fetchProducts } from "./thunks/productThunks";

const logger = createLogger({ collapsed: true });

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const middlewares = [thunk];
if (import.meta.env.DEV) middlewares.push(logger);

const store = createStore(
  combineReducers({ client, cart, product, user }),
  composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
