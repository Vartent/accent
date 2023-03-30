import { 
    UPDATE_SEARCH_RESULT,
    SUBMIT_SEARCH_REQUEST,
    UPDATE_FILTER_VALUE, 
    UPDATE_SEARCH_QUERY, 
    UPDATE_SORTER_VALUE,
    UPDATE_START_INDEX,
    NONE_FOUND,
    SUBMIT_MORE_BOOKS,
    MORE_BOOKS_RECEIVED
} from "./Books.constants";
import { BooksData } from "@/entities";
import { Filter, Sorter } from "@/ui/Filter/index.type";
import { RequestData } from "@/utils/http";

export type BooksState = {
    sorter: Sorter | null,
    filter: Filter | null,
    query: string;
    booksData: BooksData | null,
    startIndex: number,
    isLoading: boolean,
    showResults: boolean,
    isLoadingMoreBooks: boolean,
}

export interface ISubmitMoreBooks{
    payload: RequestData;
    type: typeof SUBMIT_MORE_BOOKS;
}

export interface IMoreBoksReceived{
    payload: BooksData;
    type: typeof MORE_BOOKS_RECEIVED;
}

export interface IUpdateSearchQuery {
    payload: string;
    type: typeof UPDATE_SEARCH_QUERY;
}

export interface IUpdateFilterValue{
    payload: Filter;
    type: typeof UPDATE_FILTER_VALUE;
}

export interface IUpdateSorterValue {
    payload: Sorter;
    type: typeof UPDATE_SORTER_VALUE;
}

export interface ISubmitSearchRequest {
    type: typeof SUBMIT_SEARCH_REQUEST,
    payload: RequestData
}

export interface ISearchResultRecieved {
    type: typeof UPDATE_SEARCH_RESULT,
    payload: BooksData
}

export interface IUpdateStartIndex {
    type: typeof UPDATE_START_INDEX,
    payload: number
}

export type BooksActionTypes = 
    IUpdateFilterValue 
    | IUpdateSearchQuery 
    | IUpdateSorterValue 
    | ISubmitSearchRequest
    | ISearchResultRecieved
    | IUpdateStartIndex
    | IMoreBoksReceived
    | ISubmitMoreBooks
