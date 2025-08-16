import { combineReducers } from "redux";
import client from "./clientReducer";
import product from "./productReducer";
import shoppingCart from "./cartReducer"; 

const rootReducer = combineReducers({
  client,
  product,
  shoppingCart,
});

export default rootReducer;
