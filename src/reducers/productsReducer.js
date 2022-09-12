export const getAllProductsReducer = (state = { products : []}, action) => {
  switch (action.type) {
    case "GET_PRODUCTS_REQUEST":
      return {
        loading:true,
        ...state,
      };
    case "GET_PRODUCTS_SUCCESS":
      return {
        loading: false,
        products: action.payload,
      };
    case "GET_PRODUCTS_FAILED":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
