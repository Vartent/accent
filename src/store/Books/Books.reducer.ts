import { FilterEnum, SorterEnum } from "@/ui/Filter/index.type";
import { 
    UPDATE_SEARCH_RESULT,
    SUBMIT_SEARCH_REQUEST,
    UPDATE_FILTER_VALUE, 
    UPDATE_SEARCH_QUERY, 
    UPDATE_SORTER_VALUE,
    SUBMIT_MORE_BOOKS,
    MORE_BOOKS_RECEIVED,
    SUBMIT_BOOK_REQUEST,
    BOOK_RECEIVED,
    // NONE_FOUND
} from "./Books.constants";

import { BooksActionTypes, BooksState } from "./Books.type";

const initialState: BooksState = {
    sorter: SorterEnum.relevance,
    filter: FilterEnum.all,
    query: "",
    selectedBook: null,
    booksData: null,
    startIndex: 0,
    isLoading: false,
    isLoadingMoreBooks: false,
    isLoadingBook: false,
    showResults: false, //before we start searching there's no need to show books grid or amount of results. If total amount = 0 and showResults = true => nothing found
}

export default function BooksReducer (
    state = initialState,
    action: BooksActionTypes
): BooksState {
    switch(action.type){
        case UPDATE_SEARCH_QUERY:
            return{
                ...state,
                query: action.payload,
            }
        case UPDATE_FILTER_VALUE:
            return {
                ...state,
                filter: action.payload
            }
        case UPDATE_SORTER_VALUE:
            return {
                ...state,
                sorter: action.payload
            }
        case SUBMIT_SEARCH_REQUEST:
            return {
                ...state,
                isLoading: true,
                showResults: true
            }
        case UPDATE_SEARCH_RESULT:
            return{
                ...state,
                isLoading: false,
                booksData: action.payload,
            }
        case SUBMIT_MORE_BOOKS:
            return{
                ...state,
                isLoadingMoreBooks: true
            }
        case MORE_BOOKS_RECEIVED:
            return{
                ...state,
                isLoadingMoreBooks: false,
                booksData: {
                    ...state.booksData,
                    items: [...(state.booksData?.items ?? []), ...action.payload.items],
                    totalItems: state.booksData?.totalItems ?? 0, // add this line to set totalItems
                },
                startIndex: state.startIndex + action.payload.items.length
                
            }
        case SUBMIT_BOOK_REQUEST:
            return{
                ...state,
                isLoadingBook: true
            }
        case BOOK_RECEIVED:
            return{
                ...state,
                selectedBook: action.payload,
                isLoadingBook: false
            }
        default:
            return state
    }
}