import { Button } from "antd";
import { useRouter } from "next/router";

import styles from "@/styles/Books.module.css";

import { Props } from "./index.type";
import brands from "../../../data/brands.json";

const BookCard = ({ item }: Props) => {
  const { push } = useRouter();

  const handleClick = () => {
    push(`/${item.id}`);
  };

  return (
    <div onClick={handleClick} className={styles["book-container"]}>
      <p className={styles["book-category"]}>
        {item?.brand
          ? brands.find((brand) => brand.id == item.brand)?.title
          : null}
      </p>
      <p className={styles["book-title"]}>{item?.title}</p>
      <p className={styles["book-authors"]}>
        <span>{item?.regular_price.value}</span>{" "}
        <span>{item?.regular_price.currency}</span>
      </p>
      <img className={styles["book-image"]} src={item?.image} />
      <Button>Добавить в корзину</Button>
    </div>
  );
};

export default BookCard;
