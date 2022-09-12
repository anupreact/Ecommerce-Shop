export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const alreadyExist = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (alreadyExist) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === action.payload.id ? action.payload : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      }

    case "DELETE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    case "CLEAR_CART":
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }

  // return{
  //     ...state,
  //     cartItems:[...state.cartItems,action.payload]
  // }
  // default : return state
};
