import { Book, BooksData } from '@/entities'
import { RootState } from '@/store'
import styles from '@/styles/Books.module.css'
import { Image } from 'antd'
import { useSelector } from 'react-redux'
import { Props } from './index.type'

const BookCard = ({ book }: Props) => {
    
    return(
        <div className={styles['book-container']}>
            <p className={styles['book-category']}>
                {book.categories? book.categories[0] : null}
            </p>
            <p className={styles['book-title']}>
                {book.title}
            </p>
            <p className={styles['book-authors']}>
                {book.authors?.join(', ')}
            </p>
            <img className={styles['book-image']} src={book.imageLinks?.thumbnail}/>
        </div>
    )
}

export default BookCard