import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_QUANTITY,
  INCREMENT_QUANTITY,
  DECREMENT_QUAMTITY,
  CLEAR_CART,
} from "./Cart.constants";
import { CartActionTypes, CartState } from "./Cart.type";

const initialState: CartState = {
  items: [],
  totalCost: 0,
};

export default function CartReducer(
  state = initialState,
  action: CartActionTypes
): CartState {
  switch (action.type) {
    case ADD_TO_CART: {
      const itemIndex = state.items.findIndex(
        (element) => element.productId == action.payload.productId
      );

      if (itemIndex !== -1) {
        const updatedItems = [...state.items];
        const updatedItem = updatedItems[itemIndex];

        updatedItem.amount = updatedItem.amount + 1;
        updatedItem.cost = updatedItem.price * updatedItem.amount;

        return {
          ...state,
          items: [...updatedItems],
          totalCost: updatedItems.reduce((total, item) => total + item.cost, 0),
        };
      }

      return {
        ...state,
        items: [...state.items, action.payload],
        totalCost:
          state.items.reduce((total, item) => total + item.cost, 0) +
          action.payload.cost,
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
          totalCost: updatedItems.reduce((total, item) => total + item.cost, 0),
        };
      }

      return state;
    }
    case UPDATE_QUANTITY: {
      const newArray = [...state.items];

      const newItem = newArray.find(
        (item) => item.productId == action.payload.id
      );

      if (newItem) {
        newItem.amount = action.payload.quantity;
        newItem.cost = newItem.amount * newItem.price;

        return {
          ...state,
          items: [...newArray],
          totalCost: newArray.reduce((total, item) => total + item.cost, 0),
        };
      }

      return state;
    }
    case INCREMENT_QUANTITY: {
      const newArray = [...state.items];

      const newItem = newArray.find((item) => item.productId == action.payload);

      if (newItem) {
        newItem.amount = newItem.amount + 1;

        return {
          ...state,
          items: [...newArray],
        };
      }

      return state;
    }
    case DECREMENT_QUAMTITY: {
      const newArray = [...state.items];

      const newItem = newArray.find((item) => item.productId == action.payload);

      if (newItem) {
        newItem.amount = newItem.amount - 1;

        return {
          ...state,
          items: [...newArray],
        };
      }

      return state;
    }
    case CLEAR_CART:
      return initialState;
    default:
      return state;
  }
}
