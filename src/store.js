import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import { getAllProductsReducer } from "./reducers/productsReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { cartReducer } from "./reducers/cartReducer";
import { registerUserReducer } from "./reducers/userReducers";
import { orderReducer } from "./reducers/orderReducer";
import { loginReducer } from "./reducers/loginReducer";

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const authUser = localStorage.getItem("authUser")
  ? localStorage.getItem("authUser")
  : [];

const orderItems = localStorage.getItem("orderItems")
  ? JSON.parse(localStorage.getItem("orderItems"))
  : [];

const initialState = {
  cartReducer: {
    cartItems: cartItems,
  },
  loginReducer: {
    authUser: authUser,
  },
  orderReducer: {
    orderItems: orderItems,
  },
};
const rootReducer = combineReducers({
  getAllProductsReducer: getAllProductsReducer,
  cartReducer: cartReducer,
  loginReducer:loginReducer,
  orderReducer: orderReducer,
  registerUserReducer: registerUserReducer,
});

const composeEnhancer = composeWithDevTools({});
const store = createStore(
  rootReducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
