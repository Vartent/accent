import type { BookData } from "./index.type"
import styles from '@/styles/Books.module.css'

const Book = (bookData: BookData) => {

    return(
        <div className={styles['book-container']}>
            I am book
        </div>
    )
}

export default Book