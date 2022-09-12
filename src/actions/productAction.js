import {productsData} from "../Data/SampleData";
import axios from 'axios'

export const getAllProducts = () => async (dispatch) => {
  dispatch({ type: "GET_PRODUCTS_REQUEST" });
  
  try {
    const response = await productsData;
    // console.log(response);
    dispatch({ type: "GET_PRODUCTS_SUCCESS", payload: response });

    //  const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    //  console.log(response)
    // dispatch({ type: "GET_PRODUCTS_SUCCESS", payload: response.data  });

} catch (error) {
    console.log(error)
      dispatch({ type: "GET_PRODUCTS_FAILED", payload: "error" });
  }
};







