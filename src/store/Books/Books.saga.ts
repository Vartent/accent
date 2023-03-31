import { call, ForkEffect, put, takeLatest, fork } from "redux-saga/effects";

import { Item } from "@/dto/VolumeDTO";
import { BooksData } from "@/entities";
import getBookById from "@/utils/httpGetBookById";
import getBooks from "@/utils/httpSearch";

import {
  bookReceived,
  moreBooksReceived,
  searchResultRecieved,
} from "./Books.actions";
import {
  SUBMIT_BOOK_REQUEST,
  SUBMIT_MORE_BOOKS,
  SUBMIT_SEARCH_REQUEST,
} from "./Books.constants";
import {
  ISubmitBookRequest,
  ISubmitMoreBooks,
  ISubmitSearchRequest,
} from "./Books.type";

function* workerUpdateSearchResult({ payload }: ISubmitSearchRequest) {
  try {
    const booksResult: BooksData = yield call(getBooks, payload);

    yield put(searchResultRecieved(booksResult));
  } catch (error) {
    console.error("Error while downloading: ", error);
  }
}

function* watchSearchRequest() {
  yield takeLatest(SUBMIT_SEARCH_REQUEST, workerUpdateSearchResult);
}

function* workerUploadMoreBooks({ payload }: ISubmitMoreBooks) {
  try {
    const booksResult: BooksData = yield call(getBooks, payload);

    yield put(moreBooksReceived(booksResult));
  } catch (error) {
    console.error("Error while uploading: ", error);
  }
}

function* watchSubmitMoreBooks() {
  yield takeLatest(SUBMIT_MORE_BOOKS, workerUploadMoreBooks);
}

function* workerUploadBook({ payload }: ISubmitBookRequest) {
  try {
    const book: Item = yield call(getBookById, payload);

    yield put(bookReceived(book));
  } catch (error) {
    console.error("Error while uploading: ", error);
  }
}

function* watchSubmitBookRequest() {
  yield takeLatest(SUBMIT_BOOK_REQUEST, workerUploadBook);
}

export const booksWatchers: ForkEffect[] = [
  fork(watchSearchRequest),
  fork(watchSubmitMoreBooks),
  fork(watchSubmitBookRequest),
];
