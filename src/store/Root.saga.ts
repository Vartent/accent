import { all } from "@redux-saga/core/effects";

import { booksWatchers } from "./Items/Books.saga";

export function* rootSagas() {
  const watchers = [...booksWatchers];

  yield all(watchers);
}
