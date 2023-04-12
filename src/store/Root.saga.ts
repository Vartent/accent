import { all } from "@redux-saga/core/effects";

import { ItemsWatchers } from "./Items/Item.saga";

export function* rootSagas() {
  const watchers = [...ItemsWatchers];

  yield all(watchers);
}
