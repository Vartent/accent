import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_QUANTITY,
  INCREMENT_QUANTITY,
  DECREMENT_QUAMTITY,
  CLEAR_CART,
} from "./Cart.constants";

export type CartItem = {
  amount: number;
  cost: number;
  price: number;
  productId: number;
};

export type CartState = {
  items: CartItem[];
  totalCost: number;
};

export type ProductId = number;

export interface IAddToCart {
  payload: CartItem;
  type: typeof ADD_TO_CART;
}

export interface IRemoveFromCart {
  payload: number;
  type: typeof REMOVE_FROM_CART;
}

export interface IUpdateQuantity {
  payload: {
    id: ProductId;
    quantity: number;
  };
  type: typeof UPDATE_QUANTITY;
}
export interface IIncrementQuantity {
  payload: ProductId;
  type: typeof INCREMENT_QUANTITY;
}

export interface IDecrementQuantity {
  payload: ProductId;
  type: typeof DECREMENT_QUAMTITY;
}

export interface IClearCart {
  type: typeof CLEAR_CART;
}

export type CartActionTypes =
  | IAddToCart
  | IClearCart
  | IDecrementQuantity
  | IIncrementQuantity
  | IRemoveFromCart
  | IUpdateQuantity;
