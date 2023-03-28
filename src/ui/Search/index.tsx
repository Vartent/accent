import { Input } from "antd"
import styles from '@/styles/Search.module.css'

const SearchBar = () => {

    return(
        <div className={styles["search-container"]}>
            <h3>Looking for books?</h3>
            <Input className={styles['search-bar']} placeholder='Type in and get it'/>
        </div>
    )
}

export default SearchBar