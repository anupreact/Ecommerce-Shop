import "./App.scss";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login";
import Test from "./pages/Test";
import "react-toastify/dist/ReactToastify.css";
import Signup from "./pages/Signup";
import Context from "./pages/ContextAPI/Context";
import UseCallbackTest from "./pages/UseCallbackTest";
import { Scrollbar } from "react-scrollbars-custom";
// import ScrollToTop from "./components/ScrollToTop";
import ScrollToTop from "react-scroll-to-top";
// import 'antd/dist/antd.css';
import "antd/dist/antd.css";
import { Button, Tooltip } from "antd";
import { BackTop } from "antd";
// import Product from "./pages/Product";
import Product from "./pages/SingleProduct/Product";
import CheckoutPage from "./pages/Checkout/CheckoutPage";
import MyOrders from "./pages/Orders/MyOrders";
import { allRoutes } from "./components/Routes";
import { useEffect, useState } from "react";
import NotFound from "./pages/NotFound";
import UseEffectTest from "./pages/useEffectTest";
import ProductsArray from "./pages/Products";
import Navbar from "./components/Navbar/Navbar";
import ScrollTop from "./components/ScrollTop";

import Footer from "./components/Footer/Footer"

function App() {
  const [authUser, setAuthUser] = useState(localStorage.getItem({}));
  // const routeComponents = allRoutes.map((d, index) => {
  //   return <Route key={index} exact path={d.path} element={<d.element />} />;
  // });

  useEffect(() => {
    setAuthUser(localStorage.getItem("authUser"));
  }, []);

  const style = {
    height: 40,
    width: 40,
    lineHeight: "40px",
    borderRadius: 4,
    backgroundColor: "#1088e9",
    color: "#fff",
    textAlign: "center",
    fontSize: 14,
    zIndex: "100",
  };

  return (
    <>
      <ScrollToTop smooth />

      <Router>
        <Navbar />
        <ScrollTop />

        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route exact path="/useEffect" element={<UseEffectTest />} /> */}
          <Route path="/orders" element={<MyOrders />} />
          <Route path="/products" element={<ProductsArray />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={authUser ? <CheckoutPage /> : <Login />} />
          <Route path="*" element={<NotFound />} />
          {/* <Route path="/usecallback" element={<UseCallbackTest />} /> */}
        </Routes>


        <Footer/>

      </Router>
    </>
  );
}

export default App;
