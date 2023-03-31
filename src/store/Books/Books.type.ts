import { Item } from "@/dto/VolumeDTO";
import { BooksData } from "@/entities";
import { Filter, Sorter } from "@/ui/Filter/index.type";
import { RequestData } from "@/utils/httpSearch";

import {
  UPDATE_SEARCH_RESULT,
  SUBMIT_SEARCH_REQUEST,
  UPDATE_FILTER_VALUE,
  UPDATE_SEARCH_QUERY,
  UPDATE_SORTER_VALUE,
  UPDATE_START_INDEX,
  SUBMIT_MORE_BOOKS,
  MORE_BOOKS_RECEIVED,
  SUBMIT_BOOK_REQUEST,
  BOOK_RECEIVED,
} from "./Books.constants";

export type BooksState = {
  booksData: BooksData | null;
  filter: Filter | null;
  isLoading: boolean;
  isLoadingBook: boolean;
  isLoadingMoreBooks: boolean;
  query: string;
  selectedBook: Item | null;
  showResults: boolean;
  sorter: Sorter | null;
  startIndex: number;
};

export interface ISubmitMoreBooks {
  payload: RequestData;
  type: typeof SUBMIT_MORE_BOOKS;
}

export interface IMoreBoksReceived {
  payload: BooksData;
  type: typeof MORE_BOOKS_RECEIVED;
}

export interface IUpdateSearchQuery {
  payload: string;
  type: typeof UPDATE_SEARCH_QUERY;
}

export interface IUpdateFilterValue {
  payload: Filter;
  type: typeof UPDATE_FILTER_VALUE;
}

export interface IUpdateSorterValue {
  payload: Sorter;
  type: typeof UPDATE_SORTER_VALUE;
}

export interface ISubmitSearchRequest {
  payload: RequestData;
  type: typeof SUBMIT_SEARCH_REQUEST;
}

export interface ISearchResultRecieved {
  payload: BooksData;
  type: typeof UPDATE_SEARCH_RESULT;
}

export interface IUpdateStartIndex {
  payload: number;
  type: typeof UPDATE_START_INDEX;
}

export interface ISubmitBookRequest {
  payload: string;
  type: typeof SUBMIT_BOOK_REQUEST;
}

export interface IBookReceived {
  payload: Item;
  type: typeof BOOK_RECEIVED;
}

export type BooksActionTypes =
  | IUpdateFilterValue
  | IUpdateSearchQuery
  | IUpdateSorterValue
  | ISubmitSearchRequest
  | ISearchResultRecieved
  | IUpdateStartIndex
  | IMoreBoksReceived
  | ISubmitMoreBooks
  | ISubmitBookRequest
  | IBookReceived;
