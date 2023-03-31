import { useRouter } from "next/router";

import styles from "@/styles/Books.module.css";

import { Props } from "./index.type";
// import { Link } from 'react-router-dom'

const BookCard = ({ book }: Props) => {
  const { push } = useRouter();

  const handleClick = () => {
    push(`/${book.id}`);
  };

  return (
    <div onClick={handleClick} className={styles["book-container"]}>
      <p className={styles["book-category"]}>
        {book.volumeInfo.categories ? book.volumeInfo.categories[0] : null}
      </p>
      <p className={styles["book-title"]}>{book.volumeInfo.title}</p>
      <p className={styles["book-authors"]}>
        {book.volumeInfo.authors?.join(", ")}
      </p>
      <img
        className={styles["book-image"]}
        src={book.volumeInfo.imageLinks?.thumbnail}
      />
    </div>
  );
};

export default BookCard;
