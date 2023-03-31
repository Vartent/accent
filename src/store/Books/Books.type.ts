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
    BOOK_RECEIVED
} from "./Books.constants";
import { BooksData } from "@/entities";
import { Filter, Sorter } from "@/ui/Filter/index.type";
import { RequestData } from "@/utils/httpSearch";
import { Item } from "@/dto/VolumeDTO";

export type BooksState = {
    sorter: Sorter | null,
    filter: Filter | null,
    query: string;
    selectedBook: Item | null,
    booksData: BooksData | null,
    startIndex: number,
    isLoading: boolean,
    isLoadingBook: boolean,
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

export interface ISubmitBookRequest{
    type: typeof SUBMIT_BOOK_REQUEST,
    payload: string
}

export interface IBookReceived{
    type: typeof BOOK_RECEIVED,
    payload: Item
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
    | ISubmitBookRequest
    | IBookReceived
