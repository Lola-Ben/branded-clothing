
import cartActionTypes from "./cart.types";
import addItemToCart from "./cart.utils";

const INITIAL_STATE = {
    hidden: true,
    cartItems: [],
}


const cartReducer = (state = INITIAL_STATE, action) => {
    
    switch (action.type) {
        case cartActionTypes.TOGGLE_CART_HIDDEN:
          return {
            ...state,
            hidden: !state.hidden,
          };            
          case cartActionTypes.ADD_ITEM:
            const {cartItems} = state;
            const {payload} = action;
              return {
                ...state,
              cartItems:  addItemToCart(cartItems, payload),
            };
        default:
            return state;
    }
}

export default cartReducer;