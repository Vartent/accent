import { Item } from "@/entities";
import { Filter, Sorter } from "@/ui/Filter/index.type";
import { ItemsData, RequestData } from "@/utils/httpSearch";

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
import { BooksActionTypes } from "./Books.type";

export function submitBookRequest(payload: string): BooksActionTypes {
  return {
    type: SUBMIT_BOOK_REQUEST,
    payload,
  };
}

export function bookReceived(payload: Item): BooksActionTypes {
  return {
    type: BOOK_RECEIVED,
    payload,
  };
}

export function submitMoreBooks(payload: RequestData): BooksActionTypes {
  return {
    type: SUBMIT_MORE_BOOKS,
    payload,
  };
}

export function moreBooksReceived(payload: ItemsData): BooksActionTypes {
  return {
    type: MORE_BOOKS_RECEIVED,
    payload,
  };
}

export function submitSearchRequest(payload: RequestData): BooksActionTypes {
  return {
    type: SUBMIT_SEARCH_REQUEST,
    payload,
  };
}

export function searchResultRecieved(data: ItemsData): BooksActionTypes {
  return {
    type: UPDATE_SEARCH_RESULT,
    payload: data,
  };
}

export function updateStartIndex(payload: number): BooksActionTypes {
  return {
    type: UPDATE_START_INDEX,
    payload,
  };
}

export function updateSearchQuery(payload: string): BooksActionTypes {
  return {
    type: UPDATE_SEARCH_QUERY,
    payload,
  };
}

export function updateFilterValue(payload: number[]): BooksActionTypes {
  return {
    type: UPDATE_FILTER_VALUE,
    payload,
  };
}

export function updateSorterValue(payload: Sorter): BooksActionTypes {
  return {
    type: UPDATE_SORTER_VALUE,
    payload,
  };
}
