import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import productReducer from './products/index'

const productsConfig = {
  key: "products",
  storage,
};

const reducer = combineReducers({
  products: persistReducer(productsConfig, productReducer),
});

export default reducer;
