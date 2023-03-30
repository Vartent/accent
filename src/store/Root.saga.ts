import { all } from "@redux-saga/core/effects";

import { booksWatchers } from "./Books/Books.saga";

export function* rootSagas() {
    const watchers = [
        ...booksWatchers
    ];
  
    yield all(watchers);
  }
  