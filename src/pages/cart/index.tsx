import React, { useState } from "react";

import { List, InputNumber, Form, Input, Button, Row, Col, Modal } from "antd";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";

import { Item } from "@/entities";
import { RootState, useAppDispatch } from "@/store";
import {
  clearCart,
  removeFromCart,
  updateQuantity,
} from "@/store/Cart/Cart.actions";
import { CartItem } from "@/store/Cart/Cart.type";
import styles from "@/styles/Cart.module.css";

import products from "../../data/products.json";

const CartPage = () => {
  const dispatch = useAppDispatch();
  const cartState = useSelector((state: RootState) => state.cart);
  const cartItems = cartState.items;
  const [form] = Form.useForm();
  const [submitting, setSubmitting] = useState(false);
  const isSmallScreen = useMediaQuery({ maxWidth: 500 });
  const { push } = useRouter();

  interface FormData {
    firstName: string;
    phone: string;
  }

  const handleQuantityChange = (productId: number, newQuantity: number) => {
    dispatch(updateQuantity({ id: productId, quantity: newQuantity }));
  };

  const handleRemoveItemClick = (productId: number) => {
    dispatch(removeFromCart(productId));
  };

  const handleFormSubmit = (values: FormData) => {
    setSubmitting(true);

    const formData = new FormData();

    formData.append("data", JSON.stringify(values));

    fetch("https://app.aaccent.su/js/confirm.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          console.log(response);
          setSubmitting(false);
          Modal.success({
            title: "Успешно!",
            content: "Ваш заказ оформлен",
            afterClose() {
              push("/");
              dispatch(clearCart());
            },
          });
        } else {
          throw new Error("Request failed");
        }
      })
      .catch((error) => {
        console.error(error);
        setSubmitting(false);
        Modal.error({
          title: "Ошибка",
          content: "Не удалось отправить заказ",
        });
      });
  };

  const findProductById = (productList: Item[], productId: number) => {
    const product = productList.find((p) => p.id === productId);

    return product;
  };

  const renderItem = (item: CartItem) => {
    return (
      <List.Item
        className={styles["cart-iten-actions"]}
        actions={[
          <span style={{ display: "inline-flex" }}>
            <InputNumber
              min={1}
              max={10}
              defaultValue={item.amount}
              onChange={(value) =>
                handleQuantityChange(item.productId, value as number)
              }
            />
          </span>,
          <span>
            <Button
              type="default"
              onClick={() => handleRemoveItemClick(item.productId)}
            >
              Remove
            </Button>
          </span>,
        ]}
      >
        <List.Item.Meta
          title={findProductById(products, item.productId)?.title}
          description={`${item.cost.toFixed(2)} ${
            findProductById(products, item.productId)?.regular_price.currency
          }`}
        />
        <div>Quantity:</div>
      </List.Item>
    );
  };

  return (
    <>
      <Row justify={"center"} gutter={12} style={{ paddingTop: "5vh" }}>
        <Col xs={20} sm={16} md={14} span={12}>
          <h1>Cart Page</h1>
          <List
            itemLayout={isSmallScreen ? "vertical" : "horizontal"}
            dataSource={cartItems}
            renderItem={renderItem}
          />
          <div
            style={{
              margin: "1rem 0 2rem 0",
              fontSize: "15pt",
              fontWeight: "bold",
            }}
          >
            Your total: {`${cartState.totalCost.toFixed(2)} USD`}
          </div>
          <Form layout={"vertical"} form={form} onFinish={handleFormSubmit}>
            <Form.Item
              name="firstName"
              label="Имя"
              rules={[{ required: true, message: "Введите имя, пожалуйста" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="phone"
              label="Телефон"
              rules={[
                { required: true, message: "Введите телефон, пожалуйста" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" loading={submitting}>
                Оформить
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default CartPage;
