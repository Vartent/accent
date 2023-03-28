import styles from '@/styles/Books.module.css'
import Book from './Book'

const BooksGrid = () => {

    return(
        <div>
            <div className={styles['books-grid-container']}>
            <Book/>
            <Book/>
            <Book/>
            <Book/>
        </div>
        <div>Show more</div>
        </div>
        
    )
}

export default BooksGrid