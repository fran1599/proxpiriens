import { TYPES } from "@/actions/ShoppingActions";
import { shoppingInitialState } from "./ShoppingInitialState";

export function shoppingReducer(state, action) {
  switch (action.type) {
    case TYPES.READ_STATE: {
      return {
        ...state,
        products: action.payload.products,
        cart: action.payload.cart
      }
    }

    case TYPES.ADD_TO_CART: {
        const newItemId = action.payload

        const newItem = state.products.find(
        (product) => product.id === newItemId
      );
      const itemInCart = state.cart.find((item) => item.id === newItem.id);

      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? {
                    ...item,
                    quantity: item.quantity + 1,
                  }
                : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...newItem, quantity: 1 }],
          };
    }
    case TYPES.REMOVE_ONE_FROM_CART: {
        const itemToDeleteId = action.payload
        const itemToDelete = state.cart.find(item => item.id === itemToDeleteId)
        
        return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === itemToDelete.id
                ? {
                    ...item,
                    quantity: item.quantity - 1,
                  }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter(item => item.id !== itemToDeleteId)
        }
    }
    case TYPES.REMOVE_ALL_FROM_CART: {
        const itemToDeleteAllId = action.payload
         
        return { 
            ...state,
            cart: state.cart.filter(item => item.id !== itemToDeleteAllId)
    }
}
    case TYPES.CLEAR_CART: {
        return shoppingInitialState
    }
    case TYPES.ADD_TO_FAVORITES: {
    }
    default:
      return state;
  }
}
