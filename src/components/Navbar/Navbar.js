import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, NavLink } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { logout } from "../../actions/loginActions";
import { useToastMessage } from "../Testing/Hooks/useToastMessage";
import "./NavBar.css";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";

function Navbar() {
  const authUser = localStorage.getItem("authUser");
  const dispatch = useDispatch();
  const notifyMessage = useToastMessage();

  const loginState = useSelector((state) => state.loginReducer);

  const [loginRedirect, setLoginRedirect] = useState(false);

  //   const { authUser } = loginState;

  //   console.log("authUser---", authUser);

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const menu = ( 
    <Menu
      items={[
        {
          label: (
            <a
              className="drop"
              onClick={() => {
               handleClick()
                setLoginRedirect(true);
                notifyMessage("Logged out successfuly ");
                setTimeout(() => {
                  dispatch(logout());
                  setLoginRedirect(false);
                }, 1000);
              }}
            >
              {/* <i class="fa fa-sign-out" aria-hidden="true"></i> */}
              <i
                className="fa fa-sign-out"
                style={{ color: "black", marginRight: ".2rem" }}
                aria-hidden="true"
              ></i>
              Logout
            </a>
          ),
          key: "0",
        },
        {
          label: (
             
            <NavLink activeclassname="active" className="drop" to="/orders" onClick={()=>handleClick()} >
              <i class="fa fa-truck" aria-hidden="true"></i> My Orders
            </NavLink>
          ),
          key: "1",
        },
      ]}
    />
  );

  return (
    <>
      <ToastContainer position="top-left" />

      {!authUser && (loginRedirect ? <Navigate to="/" /> : "")}

      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <NavLink
              className="hide"
              activeclassname="active"
              to="/"
              style={{ letterSpacing: ".1rem" }}
            >
              HOME
            </NavLink>
            <NavLink
              className="hide"
              activeclassname="active"
              to="/products"
              style={{ letterSpacing: ".1rem" }}
            >
              SHOP
            </NavLink>
          </div>
          <NavLink to="/">
            <h2 className="ecomlogo">Ecommerce</h2>
          </NavLink>

          <div className={click ? "nav-menu active" : "nav-menu"}>
            {/* <span>{authUser ? "hello auth" : "No Auth"}</span> */}

            {authUser ? (
              <>
                <li className="nav-item hidden">
                  <NavLink
                    to="/"
                    activeclassname="active"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    <Space>
                      <i
                        className="fa fa-home"
                        style={{ color: "white", marginRight: ".2rem" }}
                        aria-hidden="true"
                      ></i>
                      Home
                    </Space>
                  </NavLink>
                </li>
                <li className="nav-item hidden">
                  <NavLink
                    to="/products"
                    activeclassname="active"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    <Space>
                      <i
                        className="fa fa-cart-plus"
                        style={{ color: "white", marginRight: ".2rem" }}
                        aria-hidden="true"
                      ></i>
                      Shop
                    </Space>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/cart"
                    activeclassname="active"
                    className="nav-links"
                    onClick={handleClick}
                    style={{ letterSpacing: ".1rem" }}
                  >
                    <Space>
                      <i
                        className="fa fa-cart-plus"
                        style={{ color: "", marginRight: ".2rem" }}
                        aria-hidden="true"
                      ></i>
                      Cart
                    </Space>
                  </NavLink>
                </li>

                <li className="nav-item">
                  <Dropdown overlay={menu} style={{ display: "none" }}>
                    <a
                      className="nav-links "
                      onClick={(e) => e.preventDefault()}
                      style={{
                        letterSpacing: ".1rem",
                        textTransform: "capitalize",
                      }}
                    >
                      <Space>
                        <i
                          style={{ color: "", margin: "0rem .2rem" }}
                          className="fa fa-user"
                          aria-hidden="true"
                        ></i>

                        {/* <span>{authUser.slice(0,1)}</span> */}

                        {JSON.parse(authUser).slice(
                          0,
                          authUser.indexOf("@") - 1
                        )}
                        {/* <DownOutlined /> */}
                      </Space>
                    </a>
                  </Dropdown>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item hidden">
                  <NavLink
                    to="/"
                    activeclassname="active"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    <Space>
                      <i
                        className="fa fa-home"
                        style={{ color: "white", marginRight: ".2rem" }}
                        aria-hidden="true"
                      ></i>
                      Home
                    </Space>
                  </NavLink>
                </li>
                <li className="nav-item hidden">
                  <NavLink
                    to="/products"
                    activeclassname="active"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    <Space>
                      <i
                        className="fa fa-cart-plus"
                        style={{ color: "white", marginRight: ".2rem" }}
                        aria-hidden="true"
                      ></i>
                      Products
                    </Space>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/cart"
                    activeclassname="active"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    <Space>
                      <i
                        className="fa fa-cart-plus"
                        style={{ color: "", marginRight: ".2rem" }}
                        aria-hidden="true"
                      ></i>
                      Cart
                    </Space>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/login"
                    activeclassname="active"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    <Space>
                      <i
                        className="fa fa-sign-in"
                        style={{ color: "", marginRight: ".2rem" }}
                        aria-hidden="true"
                      ></i>
                      Login/Sign-up
                    </Space>
                  </NavLink>
                </li>
              </>
            )}
          </div>

          <div className="nav-icon" onClick={handleClick}>
            <i
              className={click ? "fas fa-times" : "fas fa-bars"}
              style={{ color: "black" }}
            ></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
