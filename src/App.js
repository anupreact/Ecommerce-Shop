import "./App.scss";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Cart from "./pages/Cart";
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
import Product from "./pages/Product";
import CheckoutPage from "./pages/CheckoutPage";
import MyOrders from "./pages/MyOrders";
import { allRoutes } from "./components/Routes";
import { useEffect, useState } from "react";
import NavTest from "./components/NavTest";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./pages/NotFound";
import UseEffectTest from "./pages/useEffectTest";
import ProductsArray from "./pages/Products";
// import "../node_modules/react-simple-navbar/src/lib/components/styles/index.css";

function App() {
  const [authUser, setAuthUser] = useState(localStorage.getItem({}));
  const routeComponents = allRoutes.map((d, index) => {
    return <Route key={index} exact path={d.path} element={<d.element />} />;
  });

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

      {/* Hello comments */}

      {/* <div className="wrapper"> */}
      {/* <div className="container"> */}
      {/* <Scrollbar className="scroll" rtl={false} style={{ width: "100vw", height: "100vh" }}> */}

        <Router>
          {/* <Header /> */}
          <Navbar />

         
         
          <Routes>
          
            <Route exact path="/" element={<Home />} />
            <Route exact path="/useEffect" element={<UseEffectTest />} />
            {/* <Route path="/orders" element={authUser ? <MyOrders /> : <Login />} /> */}
            <Route path="/orders" element={<MyOrders />} />
            <Route path="/products" element={<ProductsArray />} />
            <Route path="/cart" element={<Cart />} />
            {/* <Route path="/cart" element={authUser ? <Cart /> : <Login />} /> */}
            <Route path="/product/:id" element={<Product />} />
            {/* <Route path="/product/" element={<NotFound />} /> */}
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/checkout"
              element={authUser ? <CheckoutPage /> : <Login />}
            />
            <Route path="*" element={<NotFound />} />

            {/* <Route path="/checkout" element={<CheckoutPage />} /> */}

            {/* <Route path="/services" element={<Services />} /> */}
            {/* <Route path="/products" element={<Products />}>
                  <Route path="/products/product" element={<Product />} />
                </Route> */}

            {/* <Route path="/contact" element={<Contact />} /> */}
            {/* <Route path="/about" element={<About />} /> */}
            {/* {authUser ? (
                  <Route path="/login" element={<Home />} />
                ) : (
                  <Route path="/login" element={<Login />} />
                )} */}
            {/* <Route path="/test" element={<Test />} /> */}
            {/* <Route path="/context" element={<Context />} /> */}
            <Route path="/usecallback" element={<UseCallbackTest />} />
          </Routes>

          <Footer />
        </Router>
      {/* </Scrollbar> */}
      {/* <BackTop>
        <div style={style}>UP</div>
      </BackTop> */}
      {/* </div> */}
      {/* </div> */}

    </>
  );
}

export default App;
