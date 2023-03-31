import { RootState, useAppDispatch } from '@/store'
import { submitMoreBooks } from '@/store/Books/Books.actions'
import styles from '@/styles/Books.module.css'
import { BASE_URL, MAX_RESULTS } from '@/utils/constants'
import { RequestData } from '@/utils/httpSearch'
import { Button } from 'antd'
import { useSelector } from 'react-redux'
import BookCard from './Book'

const BooksGrid = () => {

    const booksRequestData = useSelector((state: RootState) => state.books);
    const booksData = booksRequestData.booksData;

    const dispatch = useAppDispatch()
    
    const requestData: RequestData = {
        baseUrl: BASE_URL,
        searchQuery: booksRequestData.query,
        filter: booksRequestData.filter,
        sorter: booksRequestData.sorter,
        startIndex: booksRequestData.startIndex + 30
    }

    const handleClick = () => {
        dispatch(submitMoreBooks(requestData))
    }
        // bug - api sends wrong total items value somethimes. Figure out why and fix
    return(
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "100px"}}>
            {booksData?.items ? <div className={styles['books-amount']}>Total books: {booksData?.totalItems}</div>: null}
            <div className={styles['books-grid-container']}>
            { booksData?.items ? booksData.items.map((book) => <BookCard book={book}/>) : null}
        </div>
        <Button 
            onClick={handleClick}
            className={styles['show-more-button']}
            style={{display: 
                booksData?.items == undefined || 
                    (booksData?.items.length == booksData?.totalItems) 
                        || (booksData.items.length < MAX_RESULTS)
                ? "none"
                : "block"}}
            >
                Show more
        </Button>
        </div>
        
    )
}

export default BooksGrid

