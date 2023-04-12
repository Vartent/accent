import { Button } from "antd";

import { useAppDispatch } from "@/store";
import { addToCart } from "@/store/Cart/Cart.actions";
import styles from "@/styles/Items.module.css";

import { Props } from "./index.type";
import brands from "../../../data/brands.json";

const ItemCard = ({ item }: Props) => {
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
    <div className={styles["Item-container"]}>
      <p className={styles["Item-category"]}>
        {item?.brand
          ? brands.find((brand) => brand.id == item.brand)?.title
          : null}
      </p>
      <p className={styles["Item-title"]}>{item?.title}</p>
      <p className={styles["Item-authors"]}>
        <span>{item?.regular_price.value}</span>{" "}
        <span>{item?.regular_price.currency}</span>
      </p>
      <img className={styles["Item-image"]} src={item?.image} />
      <Button onClick={handleClick}>Добавить в корзину</Button>
    </div>
  );
};

export default ItemCard;
