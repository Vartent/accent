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
import { ItemsActionTypes } from "./Item.type";

export function submitItemRequest(payload: string): ItemsActionTypes {
  return {
    type: SUBMIT_ITEM_REQUEST,
    payload,
  };
}

export function ItemReceived(payload: Item): ItemsActionTypes {
  return {
    type: ITEM_RECEIVED,
    payload,
  };
}

export function submitMoreItems(payload: RequestData): ItemsActionTypes {
  return {
    type: SUBMIT_MORE_ITEMS,
    payload,
  };
}

export function moreItemsReceived(payload: ItemsData): ItemsActionTypes {
  return {
    type: MORE_ITEMS_RECEIVED,
    payload,
  };
}

export function submitSearchRequest(payload: RequestData): ItemsActionTypes {
  return {
    type: SUBMIT_SEARCH_REQUEST,
    payload,
  };
}

export function searchResultRecieved(data: ItemsData): ItemsActionTypes {
  return {
    type: UPDATE_SEARCH_RESULT,
    payload: data,
  };
}

export function updateStartIndex(payload: number): ItemsActionTypes {
  return {
    type: UPDATE_START_INDEX,
    payload,
  };
}

export function updateSearchQuery(payload: string): ItemsActionTypes {
  return {
    type: UPDATE_SEARCH_QUERY,
    payload,
  };
}

export function updateFilterValue(payload: number[]): ItemsActionTypes {
  return {
    type: UPDATE_FILTER_VALUE,
    payload,
  };
}

export function updateSorterValue(payload: Sorter): ItemsActionTypes {
  return {
    type: UPDATE_SORTER_VALUE,
    payload,
  };
}
