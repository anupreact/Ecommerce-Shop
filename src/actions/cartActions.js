// ADDING A PRODUCT INTO THE CART

export const addToCart = (product, quantity) => (dispatch, getState) => {
  let cartItem = {
    title: product.title,
    id: product.id,
    image: product.image,
    description: product.description,
    quantity: Number(quantity),
    price: product.price,
    prices:product.price*quantity
  };
  if (cartItem.quantity > 10) {
    alert("cannot add more than 10 products");
  } else {
    if (cartItem.quantity < 1) {
      dispatch({ type: "DELETE_FROM_CART", payload: product });
    } else {
      dispatch({ type: "ADD_TO_CART", payload: cartItem });
    }

    const cartItems = getState().cartReducer.cartItems;
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }

  // dispatch({ type: "ADD_TO_CART", payload: cartItem });

};

// ADDING A PRODUCT INTO THE CART


// DELETING A PRODUCT FROM THE CART
export const deleteFromCart = (product) => (dispatch, getState) => {
  dispatch({ type: "DELETE_FROM_CART", payload: product });
  // DELETING A PRODUCT FROM THE CART



  const cartItems = getState().cartReducer.cartItems;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};





// DELETING ALL PRODUCTS FROM THE CART

export const clearCart = (product) => (dispatch, getState) => {
  dispatch({ type: "CLEAR_CART", payload: product });

  const cartItems = getState().cartReducer.cartItems;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

  // DELETING ALL PRODUCTS FROM THE CART