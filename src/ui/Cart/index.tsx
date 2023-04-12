import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

import { RootState, useAppDispatch } from "@/store";
import styles from "@/styles/Cart.module.css";

const Cart = () => {
  const { push } = useRouter();
  const handleClick = () => {
    push("/cart");
  };

  const items = useSelector((state: RootState) => state.cart.items);
  const itemsAmount = items.reduce((total, item) => total + item.amount, 0);

  return (
    <div onClick={handleClick}>
      <Badge className={styles["badge"]} count={itemsAmount}>
        <div className={styles["cart"]}>
          <ShoppingCartOutlined className={styles["cart-icon"]} />
        </div>
      </Badge>
    </div>
  );
};

export default Cart;
