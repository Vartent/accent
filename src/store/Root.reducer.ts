import { combineReducers } from "redux";

import CartReducer from "./Cart/Cart.reducer";
import BooksReducer from "./Items/Books.reducer";

export const rootReducer = combineReducers({
  items: BooksReducer,
  cart: CartReducer,
});
