import { call, ForkEffect, put, takeLatest, fork } from "redux-saga/effects";

import getItems, { ItemsData } from "@/utils/httpSearch";

import { moreItemsReceived, searchResultRecieved } from "./Item.actions";
import { SUBMIT_MORE_ITEMS, SUBMIT_SEARCH_REQUEST } from "./Item.constants";
import { ISubmitMoreItems, ISubmitSearchRequest } from "./Item.type";

function* workerUpdateSearchResult({ payload }: ISubmitSearchRequest) {
  try {
    const ItemsResult: ItemsData = yield call(getItems, payload);

    yield put(searchResultRecieved(ItemsResult));
  } catch (error) {
    console.error("Error while downloading: ", error);
  }
}

function* watchSearchRequest() {
  yield takeLatest(SUBMIT_SEARCH_REQUEST, workerUpdateSearchResult);
}

function* workerUploadMoreItems({ payload }: ISubmitMoreItems) {
  try {
    const ItemsResult: ItemsData = yield call(getItems, payload);

    yield put(moreItemsReceived(ItemsResult));
  } catch (error) {
    console.error("Error while uploading: ", error);
  }
}

function* watchSubmitMoreItems() {
  yield takeLatest(SUBMIT_MORE_ITEMS, workerUploadMoreItems);
}

export const ItemsWatchers: ForkEffect[] = [
  fork(watchSearchRequest),
  fork(watchSubmitMoreItems),
];
