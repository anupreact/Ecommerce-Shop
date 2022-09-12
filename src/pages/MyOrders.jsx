// key_id - rzp_test_uWiB7CXnh9PMVg
// key_secret - H1TcVY5E6sgkh7IcannFIYRN
import { Button, Result, Skeleton } from "antd";
import axios from "axios";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import cricket from "../../src/images/cricket.png";
import Login from "./Login";


const MyOrders = () => {
  const authUser1 = localStorage.getItem("authUser");
  const dispatch = useDispatch();
  // const cartState = useSelector((state) => state.cartReducer);
  // const { cartItems } = cartState;
  const [all, setAll] = useState([]);
  const [orderAddress, setOrderAddress] = useState();
  const orderState = useSelector((state) => state.orderReducer);
  const { orderItems } = orderState;
  const [jsonData, setJsonData] = useState([]);
  const [authUser, setAuthUser] = useState(localStorage.getItem("authUser"));
  useEffect(() => {
    console.log("MY-ORDERS PAGE RENDERRING")
    setAuthUser(authUser1)
    
  }, [])
  

  const [Target, setTarget] = useState({});
  const [Skeleto, setSkeleton] = useState(false);

  
  useEffect(() => {
    console.log(authUser);
    const fetchUsers = () => {
      axios.get("http://localhost:5000/users").then((res) => {
        // console.log(res.data);
        setJsonData(res.data);
      });
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    setSkeleton(true);

    // console.log("jsonData:", jsonData);
    // console.log(jsonData.find((x) => x.email === JSON.parse(authUser)));
    setTarget(jsonData.find((x) => x.email === JSON.parse(authUser)));

    setTimeout(() => {
      setSkeleton(false);
    }, 300);
  }, [jsonData]);

  return (
    <>
    {/* {authUser ? "Authorised " : "not authorised"} */}
      {Skeleto ? (
        <Skeleton
          active
          paragraph={{
            rows: 10,
          }}
        />
      ) : authUser ? (

       Target.orders ? (
        <>
          <main className="cart orders">
            {Target.orders && Target.orders.length === 0 ? (
              <Result
                status="404"
                title="No Orders "
                subTitle="Sorry, You did not order till now"
                extra={
                  <NavLink to="/products">
                    <Button type="primary">Continue Shopping</Button>
                  </NavLink>
                }
              />
            ) : (
              <>
              
              <div className="head">
                <div
                  style={{ flex: 3, maxWidth: "30rem" }}
                  className="item-wrapper"
                >
                  Order Details
                </div>
                <div style={{ flex: 2 }} className="address">
                  Address
                </div>
                <div style={{ flex: 1 }} className="status">
                  Status
                </div>
              </div>
              <div className="mobile-head">
                <h1 style={{textAlign:""}}>ORDERS</h1>
              </div>
              </>

            )}

            {Target &&
              Target.orders.map((items) => {
                // const { addressData , item} = items;
                return (
                  <div key={items.id}>
                    <div className="body">
                      <div className="item-wrapper">
                        <div className="left">
                          <img src={cricket} alt="" />
                        </div>
                        <div className="right">
                          <span>
                            <p
                              style={{
                                fontWeight: "bold",
                                textTransform: "uppercase",
                              }}
                            >
                              {items.title}
                            </p>
                          </span>
                          <span style={{}}>Quantity : {items.quantity}</span>
                          <br />
                          <span style={{}}>
                            Rs. {items.price} | size : Medium
                          </span>
                          <br />
                          <span>Expected Delivery : 01/09/2022</span>
                          <br />
                          <span>Delivered on : 29 July 2022</span>
                        </div>
                      </div>
                      <div className="address">
                        <p>
                          {Target.address}
                          {/* {
                        orderAddress.map((p)=>{
                          return (
                            <>
                              {p.address}, {p.city}, {p.pincode}
                            </>
                          )
                        })
                     } */}
                        </p>
                      </div>
                      <div className="status">
                        <button disabled>Pending</button>
                        {/* <button style={{background:"green"}}>Deilvered</button> */}
                      </div>
                    </div>
                    <hr />
                  </div>
                );
              })}
            {/* <div className="footer">footer</div> */}
          </main>
        </>
      ) : (
        <>
          {/* {Target ? Target.email : "dsghfd"} */}
          <Result
            status="404"
            title="No Orders "
            subTitle="Sorry, You did not order till now"
            extra={
              <NavLink to="/products">
                <Button type="primary">Continue Shopping</Button>
              </NavLink>
            }
          />
        </>
      )):
      <Login/>
      // " NOT AUTHORISED"
    }
    </>
  );
};
export default MyOrders;
