import Admin from "../pages/Admin";
import Cart from "../pages/Cart";
import CheckoutPage from "../pages/CheckoutPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MyOrders from "../pages/MyOrders";
import Product from "../pages/Product";
import Products from "../pages/Products";
import Signup from "../pages/Signup";

const authUser = localStorage.getItem("authUser");


export const allRoutes = [
  {
    // exact: true,
    path: "/",
    element: Home,
  },
  {
    path: "/products",
    // element: authUser ?  Products : Login,
    element: Products,
  },
  {
    path: "/product/:id",
    element: Product,
  },
  {
    path: "/orders",
    element: authUser ? MyOrders : Login ,
    // element: Cart,
  },
  {
    path: "/cart",
    element: Cart,
    // element: authUser ? Cart : Login ,

  },
  {
    path: "/login",
    element:   Login ,
  },
  {
    path: "/signup",
    element: Signup,
  },
  {
    path: "/checkout",
    element: authUser ? CheckoutPage : Login ,
  }, 

  // PROTECTED ROUTE FOR ADMIN PAGE - PROPERLY WORKING
  //  {
  //   path: "/admin",
  //   element:authUser ? Admin : Home,
  // },
  
];
