export const addOrders = (item,addressData) => (dispatch, getState) => {
  console.log(item);
  
  console.log(item[0])
  let orderItem = {
    item,
    addressData
  };
  
  
  dispatch({ type: "ADD_ORDERS", payload: orderItem });
  const orderItems = getState().orderReducer.orderItems;
  localStorage.setItem("orderItems",JSON.stringify(orderItems));
};

export const clearOrders = (item) => (dispatch, getState) => {
  dispatch({ type: "CLEAR_ORDERS", payload: item });

  const orderItems = getState().orderReducer.orderItems;
  localStorage.setItem("orderItems", JSON.stringify(orderItems));
};
