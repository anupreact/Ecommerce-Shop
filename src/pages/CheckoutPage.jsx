import React, { useEffect, useLayoutEffect, useState } from "react";
import { Button, Form, Input, Select, Space, Tooltip, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import emailjs from "emailjs-com";
import { addToCart, clearCart, deleteFromCart } from "../actions/cartActions";
import { useDeleteMessage } from "../components/Testing/Hooks/useDeleteMessage";
import { Result } from "antd";
import { NavLink } from "react-router-dom";
import { useWarningModal } from "../components/Testing/Hooks/useWarningModal";
import { addOrders } from "../actions/orderActions";
import axios from "axios";
import cors from "cors";

const { Option } = Select;

// customized console
const c = console.log;
const fn = (x) => {
  return x;
};
const test = (x) => {
  c(`%c ${fn(x)}`, `background: black; color: #bada55`);
};
// customized console

const authUser = localStorage.getItem("authUser");

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const warning = useWarningModal();
  const openDeleteMessage = useDeleteMessage();
  const openUpdateMessage = useDeleteMessage();

  const loginState = useSelector((state) => state.loginReducer);
  
  const cartState = useSelector((state) => state.cartReducer);
  const { cartItems } = cartState;
  const orderState = useSelector((state) => state.orderReducer);
  const { orderItems } = orderState;

  const [delivery, setDelivery] = useState(0);
  const [discount, setDiscount] = useState(199);
  const [checkout, setCheckout] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [formState, setFormState] = useState([]);
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [jsonData, setJsonData] = useState([]);
  const [allOrders, setAllOrders] = useState([]);
  const [userState, setUserState] = useState([]);
  const [placed, setPlaced] = useState(false);

  useEffect(() => {
   console.log('CHECKOUT PAGE RENDERRING')
  }, [])
  

  // const fetchedUser = jsonData.find((u) => u.email === JSON.parse(authUser));
  const [fetchedUser, setFetchedUser] = useState(
    jsonData.find((u) => u.email === JSON.parse(authUser))
  );

  const fetchUsers = () => {
    axios.get("http://localhost:4000/users").then((res) => {
      setJsonData(res.data);
    });
  };

  useEffect(() => {
    fetchUsers();
  }, [],[deliveryAddress]);



  

  useEffect(() => {
    setFetchedUser(jsonData?.find((u) => u.email === JSON.parse(authUser)));
  }, [jsonData]);

  // console.log(fetchedUser)

  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    phone: "",
    address: "",
    country: "",
    state: "",
    city: "",
    pincode: "",
  });

  const { fName, lName, phone, address, country, state, city, pincode } =
    formData;

  //   ONCHANGE HANDLER
  const handleInput = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  //   ONCHANGE HANDLER

  const handleAddress = (e) => {
    setDeliveryAddress(e.target.value);
  };

  //   ON-SUBMIT HANDLER
  const handleSubmit = (e, fetchedUser) => {
    console.log("running on every render")
    const { email, password, confirmPassword, id, Name } = fetchedUser;
    e.preventDefault();

    axios
      .put(`http://localhost:4000/users/${id}`, {
        email,
        password,
        confirmPassword,
        Name,

        address:
          address + ", " + " " + city + ", " + state + ", " + pincode + ".",
      })
      .then((res) => c(res.data));

    if (
      (fName &&
        lName &&
        phone &&
        address &&
        country &&
        state &&
        city &&
        pincode) !== ""
    ) {
      setFormState([...formState, formData]);
      openUpdateMessage("Updating" , "Address Updated Successfully")
      setTimeout(() => {
        setFormData({
          fName: "",
          lName: "",
          phone: "",
          address: "",
          country: "",
          state: "",
          city: "",
          pincode: "",
        });
      }, 1000);
      setTimeout(() => {
      }, 1000);
    } else {
      warning("Something went wrong", "Mandatory fields are Required");
    }
  };

  //   ON-SUBMIT HANDLER

  //      GETTING TOTAL PRICE OF THE ITEMS
  const subTotal = cartItems.reduce((x, item) => x + item.prices, 0);
  //      GETTING TOTAL PRICE OF THE ITEMS

  //   INDIAN CURRENCY FORMATTER
  const toIndianCurrency = (num) => {
    const curr = num.toLocaleString("en-IN", {
      style: "currency",
      currency: "INR",
    });
    return curr;
  };
  //   INDIAN CURRENCY FORMATTER

  //   EMAIL JS FUNCTION
  var templateParams = {
    // name: "Shopper",
    // message:
    //   "Recieved an order from Mr.Miachel Scofield, below are the order details",
    // details: JSON.stringify([
    //   {
    //     shippingInfo: formState,
    //     cartItems: cartItems,
    //   },
    // ]),
    // details: JSON.stringify(cartItems)
  };

  useEffect(() => {
    const { id, ...rest } = userState;
    setAllOrders(rest.orders);
    if (id) {
      axios.get(`http://localhost:4000/users/${id}`).then((res) => {
        // setAllOrders(res.data.orders)
      });
    }
  }, [userState.orders]);

  const sendSMS = (items, fetchedUser) => {
    setUserState(fetchedUser);
    setPlaced(true);
    const {
      email,
      password,
      confirmPassword,
      id,
      address,
      Name,
      image,
      orders,
    } = fetchedUser;


    const getO = () => {
      axios.get(`http://localhost:4000/users/${id}`).then((res) => {
        setAllOrders(res.data.orders);
      });
    };
    getO();

    const postOrders = async () => {
      await axios
        .put(`http://localhost:4000/users/${id}`, {
          email,
          password,
          confirmPassword,
          id,
          image,
          Name,   
          address,
          orders: [...items , ...orders],
          status:"Pending"
        })
        // .then((res) => c("res", res));
    };
    postOrders();
    // dispatch(addOrders(items,orderAddress));

    setTimeout(() => {
      dispatch(clearCart());
      // console.log("order placed successfully");
    }, 1000);

    dispatch(clearCart());
    // openMessage("Processing", "Order Placed Successfully");
    openDeleteMessage("Processing", "Order Placed Successfully");

    setCheckout(true);
    setTimeout(() => {
      setCheckout(false);
      setOrderSuccess(true);
      dispatch(clearCart(items));
      // console.log(items);
    }, 2000);
    // emailjs
    //   .send(
    //     "service_wn68p1a",
    //     "template_vq1q3ok",
    //     templateParams,
    //     "jk4lmumiJoQrnWck7"
    //   )
    //   .then(
    //     function (response) {
    //       console.log("SUCCESS!", response.status, response.text);
    //     },
    //     function (err) {
    //       console.log("FAILED...", err);
    //     }
    //   );
  };
  //   EMAIL JS FUNCTION

  // useEffect(()=>{
  //      fetchUsers();
  // },[fetchedUser])

  return (
    <>
      <main className="checkout-wrapper">
        {cartItems.length !== 0 ? (
          <div> 
            <section className="checkout-section">
            

              <div className="right">
                <h1>CART SUMMARY</h1>

                <p>No of Items : {cartItems.length}</p>
                <p>SubTotal : {toIndianCurrency(subTotal)}</p>
                <p>Discount : {toIndianCurrency(discount)}</p>
                <p>
                  Delivery : <strike>{toIndianCurrency(delivery)}</strike> Free
                </p>
                <p>Payment Method : Cash On Delivery</p>
                <hr />
                <h3>
                  Total : {toIndianCurrency(subTotal + delivery - discount)}
                </h3>

                <span>
                  <h2>Address:</h2>

                  {fetchedUser ? (
                    <>
                      <p>
                        {fetchedUser.address
                          ? fetchedUser.address
                          : "Please select Address"}{" "}
                      </p>
                    </>
                  ) : (
                    "No address found"
                  )}
                </span>
                <button
                  className={
                    fetchedUser && fetchedUser.address ? "enabled" : ""
                  }
                  disabled={fetchedUser && fetchedUser.address ? false : true}
                  onClick={(allOrders) => {
                    // sendSMS(cartItems, fetchedUser.address);
                    sendSMS(cartItems, fetchedUser);
                  }}
                >
                  Place Order
                </button>
                <br />
              </div>
              <div className="left">
                <h1 style={{fontWeight:"bolder"}}>UPDATE SHIPPING ADDRESS </h1>
                  <form
                    className="checkout-form"
                    onSubmit={(e) => handleSubmit(e, fetchedUser)}
                  >
                    <div>
                      <input
                        type="text"
                        name="fName"
                        value={fName}
                        placeholder="First Name"
                        onChange={handleInput}
                      />
                      <input
                        type="text"
                        name="lName"
                        value={lName}
                        placeholder="Last Name"
                        onChange={handleInput}
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="phone"
                        value={phone}
                        placeholder="Phone No."
                        onChange={handleInput}
                      />
                    </div>

                    <div>
                      <input
                        type="text"
                        name="address"
                        value={address}
                        placeholder="Address line"
                        onChange={handleInput}
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="country"
                        value={country}
                        placeholder="Select Country"
                        onChange={handleInput}
                      />
                      <input
                        type="text"
                        name="state"
                        value={state}
                        placeholder="Select state"
                        onChange={handleInput}
                      />
                      <div>
                        <input
                          type="text"
                          name="city"
                          value={city}
                          placeholder="Select city"
                          onChange={handleInput}
                        />
                        <input
                          type="text"
                          name="pincode"
                          value={pincode}
                          placeholder="Pincode"
                          onChange={handleInput}
                        />
                      </div>
                    </div>

                    <div>
                      <button>Save Address</button>
                    </div>
                  </form>
              </div>
            </section>
          </div>
        ) : (
          <>
            {placed ? (
              <Result
                status="success"
                title="Thank You for Shopping with us!"
                subTitle="Order number: 2017182818828182881 , Your order will be delivered to you with 7 working days."
                extra={[
                  <NavLink to="/products">
                    <Button type="primary">Continue Shopping</Button>
                  </NavLink>,
                ]}
              />
            ) : (
              <Result
                status="error"
                title="Currently No products in bag"
                subTitle="Please Add some products"
                extra={[
                  <NavLink to="/products">
                    <Button type="primary">Continue Shopping</Button>
                  </NavLink>,
                ]}
              />
            )}
          </>
        )}
      </main>
    </>
  );
};

export default CheckoutPage;
