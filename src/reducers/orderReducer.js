export const orderReducer = (state = { orderItems: [] }, action) => {
  switch (action.type) {
    case "ADD_ORDERS":
      return {
        ...state,
        orderItems: [...state.orderItems , action.payload]
      };    

    case "CLEAR_ORDERS":
      return {
        ...state,
        orderItems: [],
      };
    default:
      return state;
  }
};
