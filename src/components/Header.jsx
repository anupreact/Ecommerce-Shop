import React, { useEffect, useState } from "react";
import { Link, Navigate, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { MyContext } from "../pages/ContextAPI/Context";
import { logout } from "../actions/loginActions";
import { useDeleteMessage } from "./Testing/Hooks/useDeleteMessage";
import { useToastMessage } from "./Testing/Hooks/useToastMessage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import "../node_modules/react-simple-navbar/src/lib/components/styles/index.css";


const Header = () => {
  const openDeleteMessage = useDeleteMessage();
  const notifyMessage = useToastMessage();

  const dispatch = useDispatch();
  // const toastMessage = useToastMessage();
  const cartState = useSelector((state) => state.cartReducer);

  const loginState = useSelector((state) => state.loginReducer);
  const { authUser } = loginState;
  const [loginRedirect, setLoginRedirect] = useState(false);

  // const [authUser , setAuthUser] = useState("")

  const { cartItems } = cartState;

  const getUser = localStorage.getItem("authUser");

  // useEffect(() => {
  //  setAuthUser(localStorage.getItem("authUser"))
  // }, [authUser])
  const handleLogout = () => {
    setLoginRedirect(true);
    notifyMessage("Logged out successfuly ");
    setTimeout(() => {
      dispatch(logout());
      setLoginRedirect(false);
    }, 1000);
  };

  return (
    // <!-- HEADER SECTION -->

    <>
      <ToastContainer position="top-left" />
      {!getUser && (loginRedirect ? <Navigate to="/" /> : "")}
      {/* {loginRedirect ? <Navigate to="/" /> : ""} */}

       {/* HEADER */}

      <header>
       
        <div className="  nav-links">
          <NavLink
            to="/"
            // className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            <span>Home</span>
          </NavLink>
          <NavLink to="/products">
            <span>Products</span>
          </NavLink>
          <NavLink to="/orders">
            <span>My Orders</span>
          </NavLink>

          {/* <NavLink to="/services">
          <span>Services</span>
        </NavLink>
        <NavLink to="/contact">
          <span>Contact</span>
        </NavLink>
        <NavLink to="/about">
          <span>About</span>
        </NavLink>
        <NavLink to="/checkout">
          <span>Checkout</span>
        </NavLink>
        <NavLink to="/test">
          <span>Test</span>
        </NavLink>
        <NavLink to="/context">
          <span>Context</span>
        </NavLink>
        <NavLink to="/usecallback">
          <span>UseCallback()</span>
        </NavLink> */}
        </div>
        <div className="right-nav">
          {getUser ? (
            <>
              <NavLink to="/cart">
                {" "}
                <i className="fa fa-shopping-bag" aria-hidden="true">
                  {" "}
                  <b>{cartItems.length}</b>
                </i>
              </NavLink>
              {/* {JSON.parse(authUser)} */}

              {/* {authUser&&authUser.Name} */}
              <span style={{textTransform:"uppercase" , fontWeight:"bold" , background:"#90f6d7" , padding:".4rem .7rem" , display:"flex" , justifyContent:"center",alignItems:"center", borderRadius:"48%"}}>{JSON.parse(getUser).slice(0, 1)}</span>
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <div>
                <NavLink to="/login" className="">
                  <span>Login</span>
                </NavLink>
                <NavLink to="/signup" className="">
                  <span>SignUp</span>
                </NavLink>
              </div>
            </>
          )}
          {/* {!authUser && (
          <NavLink to="/login" className="">
            <i className="fa fa-user  " aria-hidden="true"></i>
          </NavLink>
        )} */}
        </div>
      </header>
    </>

    // <!-- HEADER SECTION -->
  );
};

export default Header;
