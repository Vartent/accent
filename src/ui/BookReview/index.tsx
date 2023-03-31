import styles from "@/styles/BookReview.module.css";

import { Props } from "./indes.type";

const BookReview = ({ book }: Props) => {
  return (
    <div className={styles["book-review-container"]}>
      <div className={styles["book-image"]}>
        <img src={book.volumeInfo.imageLinks?.thumbnail} />
      </div>
      <div className={styles["book-review-description"]}>
        <h5>{book.volumeInfo.categories?.join("/")}</h5>
        <h4>{book.volumeInfo.title}</h4>
        <h5>{book.volumeInfo.authors?.join(", ")}</h5>
        <p>{book.volumeInfo.description}</p>
      </div>
    </div>
  );
};

export default BookReview;
