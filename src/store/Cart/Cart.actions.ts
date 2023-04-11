import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_QUANTITY,
  INCREMENT_QUANTITY,
  DECREMENT_QUAMTITY,
  CLEAR_CART,
} from "./Cart.constants";
import { CartActionTypes, CartItem, ProductId } from "./Cart.type";

export function addToCart(payload: CartItem): CartActionTypes {
  return {
    payload,
    type: ADD_TO_CART,
  };
}

export function removeFromCart(payload: ProductId): CartActionTypes {
  return {
    payload,
    type: REMOVE_FROM_CART,
  };
}

export function updateQuantity(payload: {
  id: ProductId;
  quantity: number;
}): CartActionTypes {
  return {
    payload,
    type: UPDATE_QUANTITY,
  };
}

export function incrementQuantity(payload: ProductId): CartActionTypes {
  return {
    payload,
    type: INCREMENT_QUANTITY,
  };
}

export function decrementQuantity(payload: ProductId): CartActionTypes {
  return {
    payload,
    type: DECREMENT_QUAMTITY,
  };
}

export function clearCart(): CartActionTypes {
  return {
    type: CLEAR_CART,
  };
}
