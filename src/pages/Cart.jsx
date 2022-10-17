// service_wn68p1a

import React, { useState, useEffect } from "react";

import Card from "../components/Card";
import Products from "./Products";
import item from "../images/man4.png";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, clearCart, deleteFromCart } from "../actions/cartActions";
// import SendSMS from 'react-native-send-sms';
import { LoadingOutlined } from "@ant-design/icons";
import { Breadcrumb, Spin } from "antd";
import { Button, message } from "antd";

import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import { Result } from "antd";
import { Skeleton } from "antd";
import emailjs from "emailjs-com";
import settingsLoader from "../images/Settings.gif";
import tdloader from "../images/loader.gif";

import { Link, NavLink } from "react-router-dom";
import { useDeleteMessage } from "../components/Testing/Hooks/useDeleteMessage";
import { useWarningModal } from "../components/Testing/Hooks/useWarningModal";
import Pagination from "../components/Pagination";
import Login from "./Login";
// import { SMTPClient } from 'emailjs';

const key = "updatable";

// INDIAN FORMAT PRICE

// var x=123456;
// x=x.toString();
// var lastThree = x.substring(x.length-3);
// var otherNumbers = x.substring(0,x.length-3);
// if(otherNumbers != '')
// lastThree = ',' + lastThree;
// var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
// console.log(res);

// using function
const toIndianCurrency = (num) => {
  const curr = num.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
  });
  return curr;
};
// using function

// INDIAN FORMAT PRICE

const Cart = () => {
  // DECREMENT DELETE MODAL

  const openDeleteMessage = useDeleteMessage();
  const warningModal = useWarningModal();
  const [skeleton, setSkeleton] = useState(false);
  const [visible, setVisible] = useState(false);
  const [itemId, setItemId] = useState(null);
  const [notifyDelete, setNotifyDelete] = useState(false);
  const [pitems, setPitems] = useState([]);
  const [authUser, setAuthUser] = useState(localStorage.getItem("authUser"));

  useEffect(() => {
    console.log("CART PAGE RENDERRING");
    setAuthUser(localStorage.getItem("authUser"));
  }, []);

  // CHECKOUT SPINNER
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
      }}
      spin
    />
  );
  // CHECKOUT SPINNER

  // MODAL TOGGLER
  const showModal = (item) => {
    setVisible(true);
    setItemId(item);
  };
  const hideModal = () => {
    setVisible(false);
  };
  // MODAL TOGGLER

  // DELETE MESSAGE

  // const openMessage = (message1, message2) => {
  //   message.loading({
  //     content: message1,
  //     key,
  //   });
  //   setTimeout(() => {
  //     message.success({
  //       content: message2,
  //       key,
  //       duration: 2,
  //     });
  //   }, 1000);
  // };
  // DELETE MESSAGE

  // REDUX
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cartReducer);
  const { cartItems } = cartState;

  // INITIAL LOADING SKELETON
  useEffect(() => {
    if (cartItems.length !== 0) {
      setSkeleton(true);
      setTimeout(() => {
        setSkeleton(false);
      }, 300);
    }
  }, []);
  // INITIAL LOADING SKELETON

  // console.log(cartItems);

  // SUBTOTAL FOR CART FOOTER
  const subTotal = cartItems.reduce((x, item) => x + item.prices, 0);
  // SUBTOTAL FOR CART FOOTER

  // price formatter
  const newSubTotal = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(subTotal);

  const ntos = subTotal.toString();

  const a = (str) => {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
      newString += str[i];
    }
    return newString;
  };
  // price formatter

  // REDUX

  const localdata = localStorage.getItem("cartitems");

  // DELETE MODAL
  const deleteItem = (i) => {
    hideModal();
    // openMessage("Deleting", "Deleted Successfully");
    openDeleteMessage("Deleting", "Deleted Successfully");

    setTimeout(() => {
      dispatch(deleteFromCart(i));
    }, 1000);
  };
  // DELETE MODAL

  // DECREMENT ITEM
  const handleDecrement = (item) => {
    if (item.quantity === 1) {
      showModal(item);
    } else {
      dispatch(addToCart(item, item.quantity - 1));
    }
  };
  const handleIncrement = (item) => {
    if (item.quantity === 10) {
      warningModal("Quantity Exceeded", "Cannot add more than 10 Items");
    } else {
      dispatch(addToCart(item, item.quantity + 1));
    }
  };
  // DECREMENT ITEM

  // DELETE ITEM
  const remove = (j) => {
    setNotifyDelete(true);
    // openMessage("Deleting", "Deleted Successfully");
    openDeleteMessage("Deleting", "Deleted Successfully");
    setTimeout(() => {
      dispatch(deleteFromCart(j));
      setNotifyDelete(false);
    }, 1000);
  };
  // DELETE ITEM

  const getCurrentItem = (x) => {
    setPitems(x);
  };
  // Email JS


  return (
    <>
      {authUser ? (
        <>
         
          <Breadcrumb
            style={{ background: "", margin: ".6rem", padding: ".5rem .5rem" }}
          >
            <Breadcrumb.Item>
              <Link to="/">HOME </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/products">PRODUCTS</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <span
                style={{
                  textTransform: "uppercase",
                  color: "rgba(0, 36, 33, 1)  ",
                }}
              >
                CART
              </span>
            </Breadcrumb.Item>
          </Breadcrumb>
          {skeleton ? (
            <div>
              {/* <img src={tdloader} style={{color:"red" , margin:".7rem 50%" }} alt="loader" /> */}
              <Skeleton
                active
                paragraph={{
                  rows: 10,
                }}
              />
            </div>
          ) : cartItems.length !== 0 ? (
            <main className="cart">
              <h2 style={{ textAlign: "center" }}>My Cart</h2>

              <br />
              <div className="cart-head">
                <p style={{ width: "200px" }}>Item </p>
                <p style={{ width: "170px", textAlign: "end" }}>Description</p>
                <p style={{ width: "170px", textAlign: "end" }}>Quantity</p>
                <p style={{ width: "200px", textAlign: "center" }}>Price</p>
                <p>Remove </p>
              </div>
              <hr />
              {/* {notifyDelete ? (
          <h3 style={{ textAlign: "center", color: "red" }}>
            Product Deleted Successfully
          </h3>
        ) : (
          ""
        )} */}
              <br />

              {cartItems.map((items) => {
                // const { title , description ,price , quantity , id} = items

                return (
                  <div key={items.id}>
                    <Modal
                      title="Delete Item"
                      visible={visible}
                      onOk={() => deleteItem(itemId)}
                      onCancel={hideModal}
                      okText="Yes"
                      cancelText="No"
                      width="30vw"
                      zIndex=".9"
                    >
                      Are You sure , You want to Delete this item
                    </Modal>
                    <section className="cart-item" key={items.id}>
                      <div
                        className="item-name"
                        style={{
                          border: "0px solid red",
                          display: "flex",
                          alignItems: "center",
                          width: "20%",
                        }}
                      >
                        <img src={item} alt="" width={"100px"} />
                        <p>
                          {items.title} <br />
                          <span style={{ color: "gray", fontSize: "12px" }}>
                            EIECH0120245
                          </span>
                        </p>
                      </div>
                      <div style={{ width: "20%" }}>
                        <p>{items.description}</p>
                      </div>
                      <div className="qty-container">
                        <button onClick={() => handleDecrement(items)}>
                          {" "}
                          -{" "}
                        </button>
                        <span> {items.quantity} </span>
                        <button
                          onClick={() => handleIncrement(items)}
                          // onClick={() => {
                          //   dispatch(addToCart(items, items.quantity + 1));
                          // }}
                        >
                          {" "}
                          +{" "}
                        </button>
                      </div>
                      {/* <p>{ items.price * items.quantity} INR</p> */}
                      <p>{toIndianCurrency(items.price * items.quantity)}</p>
                      <button
                        className="remove-btn"
                        onClick={() => remove(items)}
                      >
                        Delete
                      </button>
                    </section>
                  </div>
                );
              })}
              {/* <Pagination products = {cartItems} getCurrentItem = {getCurrentItem}/> */}
              <div className="cart-footer">
                <div>Discount : {toIndianCurrency(199)}</div>
                <div>Delivery : {toIndianCurrency(99)} </div>
                <div>SubTotal : {toIndianCurrency(newSubTotal)} </div>
                <div>Total : {toIndianCurrency(subTotal - 50 + 199)}</div>
                <div className="btn-container">
                  <NavLink to="/checkout">
                    <button className="checkout" value="">
                      Checkout
                    </button>
                  </NavLink>
                </div>

                <div
                  className="spinner-container"
                  style={{
                    width: "20px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {/* {checkout && (
                <Spin large indicator={antIcon} style={{ color: "green" }} />
              )} */}
                </div>
              </div>
            </main>
          ) : cartItems.length === 0 ? (
            <Result
              status="404"
              title="404"
              subTitle="Sorry, Your Cart is Empty Currently"
              extra={
                <Link to="/products">
                  <Button type="primary">Continue Shopping</Button>
                </Link>
              }
            />
          ) : (
            ""
          )}
        </>
      ) : (
        <>
          {" "}
        <Login />{" "}
        </>
      )}
    </>
  );
};

export default Cart;
