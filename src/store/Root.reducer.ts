import { combineReducers } from "redux";

import BooksReducer from "./Books/Books.reducer";

export const rootReducer = combineReducers({
  books: BooksReducer,
});
