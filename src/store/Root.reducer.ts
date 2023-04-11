import { combineReducers } from "redux";

import BooksReducer from "./Items/Books.reducer";

export const rootReducer = combineReducers({
  items: BooksReducer,
});
