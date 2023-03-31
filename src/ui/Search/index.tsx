import { Button, Input } from "antd"
import styles from '@/styles/Search.module.css'
import getBooks, { RequestData } from "@/utils/httpSearch"
import { ChangeEvent, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState, useAppDispatch } from "@/store"
import { submitSearchRequest, updateSearchQuery } from "@/store/Books/Books.actions"
import { BASE_URL } from "@/utils/constants"
import { useRouter } from "next/router"

const SearchBar = () => {

    const booksRequestData = useSelector((state: RootState) => state.books)
    
    const dispatch = useAppDispatch()
    const {push} = useRouter()

    const requestData: RequestData = {
        baseUrl: BASE_URL,
        searchQuery: booksRequestData.query,
        filter: booksRequestData.filter,
        sorter: booksRequestData.sorter,
        startIndex: booksRequestData.startIndex
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(updateSearchQuery(event.target.value))
    }

    const handleSearch = () => {
        dispatch(submitSearchRequest(requestData))
        push('/')
    }

    return(
        <div className={styles["search-container"]}>
            <h3>Looking for books?</h3>
            <Input.Search 
                value={booksRequestData.query}
                onChange={handleChange} 
                onSearch={handleSearch} 
                className={styles['search-bar']} 
                placeholder='Type in and get it'/>
        </div>
    )
}

export default SearchBar