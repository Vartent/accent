import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge } from "antd";

import styles from "@/styles/Cart.module.css";

const Cart = () => {
  return (
    <Badge className={styles["badge"]} count={3}>
      <div className={styles["cart"]}>
        <ShoppingCartOutlined className={styles["cart-icon"]} />
      </div>
    </Badge>
  );
};

export default Cart;
