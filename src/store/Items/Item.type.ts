import { Item } from "@/entities";
import { Sorter } from "@/ui/Filter/index.type";
import { ItemsData, RequestData } from "@/utils/httpSearch";

import {
  UPDATE_SEARCH_RESULT,
  SUBMIT_SEARCH_REQUEST,
  UPDATE_FILTER_VALUE,
  UPDATE_SEARCH_QUERY,
  UPDATE_SORTER_VALUE,
  UPDATE_START_INDEX,
  SUBMIT_MORE_ITEMS,
  MORE_ITEMS_RECEIVED,
  SUBMIT_ITEM_REQUEST,
  ITEM_RECEIVED,
} from "./Item.constants";

export type ItemsState = {
  filter: number[];
  isLoading: boolean;
  isLoadingItem: boolean;
  isLoadingMoreItems: boolean;
  items: Item[] | null;
  query: string;
  selectedItem: Item | null;
  showResults: boolean;
  sorter: Sorter | null;
  startIndex: number;
  totalItems: number;
};

export interface ISubmitMoreItems {
  payload: RequestData;
  type: typeof SUBMIT_MORE_ITEMS;
}

export interface IMoreItemsReceived {
  payload: ItemsData;
  type: typeof MORE_ITEMS_RECEIVED;
}

export interface IUpdateSearchQuery {
  payload: string;
  type: typeof UPDATE_SEARCH_QUERY;
}

export interface IUpdateFilterValue {
  payload: number[];
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
  payload: ItemsData;
  type: typeof UPDATE_SEARCH_RESULT;
}

export interface IUpdateStartIndex {
  payload: number;
  type: typeof UPDATE_START_INDEX;
}

export interface ISubmitItemRequest {
  payload: string;
  type: typeof SUBMIT_ITEM_REQUEST;
}

export interface IItemReceived {
  payload: Item;
  type: typeof ITEM_RECEIVED;
}

export type ItemsActionTypes =
  | IUpdateFilterValue
  | IUpdateSearchQuery
  | IUpdateSorterValue
  | ISubmitSearchRequest
  | ISearchResultRecieved
  | IUpdateStartIndex
  | IMoreItemsReceived
  | ISubmitMoreItems
  | ISubmitItemRequest
  | IItemReceived;
