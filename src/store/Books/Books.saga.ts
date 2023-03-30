import { BooksData } from '@/entities'
import getBooks, { RequestData } from '@/utils/http'
import { call, ForkEffect, put, takeLatest, fork } from 'redux-saga/effects'
import { moreBooksReceived, searchResultRecieved } from './Books.actions'

import { SUBMIT_MORE_BOOKS, SUBMIT_SEARCH_REQUEST } from './Books.constants'
import { ISubmitMoreBooks, ISubmitSearchRequest } from './Books.type'


function* workerUpdateSearchResult({ payload }: ISubmitSearchRequest){
    try{
        const booksResult: BooksData = yield call(getBooks, payload);
        yield put(searchResultRecieved(booksResult));
    }catch(error){
        console.error("Error while downloading: ", error)
    }
}

function* watchSearchRequest(){
    yield takeLatest(SUBMIT_SEARCH_REQUEST, workerUpdateSearchResult)
}

function* workerUploadMoreBooks({ payload }: ISubmitMoreBooks){
    try{
        const booksResult: BooksData = yield call(getBooks, payload);
        yield put(moreBooksReceived(booksResult))
    }catch(error){
        console.error("Error while uploading: ", error)
    }
}

function* watchSubmitMoreBooks(){
    yield takeLatest(SUBMIT_MORE_BOOKS, workerUploadMoreBooks)
}

export const booksWatchers: ForkEffect[] = [
    fork(watchSearchRequest),
    fork(watchSubmitMoreBooks)
  ];