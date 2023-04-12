import { Button } from "antd";
import { useRouter } from "next/router";

import { useAppDispatch } from "@/store";
import { addToCart } from "@/store/Cart/Cart.actions";
import styles from "@/styles/Books.module.css";

import { Props } from "./index.type";
import brands from "../../../data/brands.json";

const BookCard = ({ item }: Props) => {
  const { push } = useRouter();

  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(
      addToCart({
        amount: 1,
        price: item.regular_price.value,
        cost: item.regular_price.value,
        productId: item.id,
      })
    );
  };

  return (
    <div className={styles["book-container"]}>
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
      <Button onClick={handleClick}>Добавить в корзину</Button>
    </div>
  );
};

export default BookCard;
