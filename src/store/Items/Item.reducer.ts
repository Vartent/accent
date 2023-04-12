import { SorterEnum } from "@/ui/Filter/index.type";

import {
  UPDATE_SEARCH_RESULT,
  SUBMIT_SEARCH_REQUEST,
  UPDATE_FILTER_VALUE,
  UPDATE_SEARCH_QUERY,
  UPDATE_SORTER_VALUE,
  SUBMIT_MORE_ITEMS,
  MORE_ITEMS_RECEIVED,
  SUBMIT_ITEM_REQUEST,
  ITEM_RECEIVED,
  // NONE_FOUND
} from "./Item.constants";
import { ItemsActionTypes, ItemsState } from "./Item.type";

const initialState: ItemsState = {
  sorter: SorterEnum.relevance,
  filter: [],
  query: "",
  selectedItem: null,
  totalItems: 0,
  items: null,
  startIndex: 0,
  isLoading: false,
  isLoadingMoreItems: false,
  isLoadingItem: false,
  showResults: false, //before we start searching there's no need to show Items grid or amount of results. If total amount = 0 and showResults = true => nothing found
};

export default function ItemsReducer(
  state = initialState,
  action: ItemsActionTypes
): ItemsState {
  switch (action.type) {
    case UPDATE_SEARCH_QUERY:
      return {
        ...state,
        query: action.payload,
      };
    case UPDATE_FILTER_VALUE:
      return {
        ...state,
        filter: action.payload,
      };
    case UPDATE_SORTER_VALUE:
      return {
        ...state,
        sorter: action.payload,
      };
    case SUBMIT_SEARCH_REQUEST:
      return {
        ...state,
        isLoading: true,
        showResults: true,
      };
    case UPDATE_SEARCH_RESULT:
      return {
        ...state,
        isLoading: false,
        items: action.payload.items,
        totalItems: action.payload.totalAmount,
        startIndex: 0,
      };
    case SUBMIT_MORE_ITEMS:
      return {
        ...state,
        isLoadingMoreItems: true,
      };
    case MORE_ITEMS_RECEIVED:
      return {
        ...state,
        isLoadingMoreItems: false,
        items: [...(state.items ?? []), ...action.payload.items],
        startIndex: state.startIndex + action.payload.items.length,
      };
    case SUBMIT_ITEM_REQUEST:
      return {
        ...state,
        isLoadingItem: true,
      };
    case ITEM_RECEIVED:
      return {
        ...state,
        selectedItem: action.payload,
        isLoadingItem: false,
      };
    default:
      return state;
  }
}
