import { combineReducers } from "redux";

import CartReducer from "./Cart/Cart.reducer";
import ItemsReducer from "./Items/Item.reducer";

export const rootReducer = combineReducers({
  items: ItemsReducer,
  cart: CartReducer,
});
