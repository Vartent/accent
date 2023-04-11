import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_QUANTITY,
  INCREMENT_QUANTITY,
  DECREMENT_QUAMTITY,
  CLEAR_CART,
} from "./Cart.constants";
import { CartActionTypes, CartItem, CartState, ProductId } from "./Cart.type";

const initialState: CartState = {
  items: [],
  totalCost: 0,
};

export default function BookReducer(
  state = initialState,
  action: CartActionTypes
): CartState {
  switch (action.type) {
    case ADD_TO_CART: {
      const itemIndex = state.items.findIndex(
        (element) => element.productId == action.payload.productId
      );

      if (itemIndex !== 1) {
        const updatedItems = [...state.items];
        const updatedItem = updatedItems[itemIndex];

        updatedItem.amount = updatedItem.amount + 1;
        updatedItem.cost = updatedItem.price * updatedItem.amount;

        return {
          ...state,
          items: [...updatedItems],
        };
      }

      return {
        ...state,
        items: [...state.items, action.payload],
      };
    }

    case REMOVE_FROM_CART: {
      const itemIndex = state.items.findIndex(
        (element) => element.productId == action.payload
      );

      if (itemIndex !== -1) {
        const updatedItems = [...state.items];

        updatedItems.splice(itemIndex, 1);

        return {
          ...state,
          items: updatedItems,
        };
      }

      return state;
    }
    default:
      return state;
  }
}
