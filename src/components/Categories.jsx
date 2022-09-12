import React, { useState, useEffect } from "react";
import Card from "./Card";
import img1 from "../images/cricket.png";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Pagination, Skeleton } from "antd";
import { Button, message } from "antd";
import { useDeleteMessage } from "./Testing/Hooks/useDeleteMessage";
import { Select } from "antd";
import { Navigate, NavLink } from "react-router-dom";
const key = "updatable";

// customized console
const c = console.log;
const fn = (x) => {
  return x;
};
const test = (x) => {
  c(`%c ${fn(x)}`, `background: black; color: #bada55`);
};
// customized console

const Categories = (props) => {
  const {
    heading,
    btn,
    data,
    value,
    qty,
    viewBtn,
    filter,
    filterOptions,
    mainHeading,
  } = props;

  const dispatch = useDispatch();
  const openMessage = useDeleteMessage();
  const [selectedInput, setSelectedInput] = useState("All");
  const [activeStyle, setActiveStyle] = useState("");
  const [allStyle, setAllStyle] = useState("");
  const [skeleton, setskeleton] = useState(false);
  const [listStyle, setListStyle] = useState("");
  const [current, setCurrent] = useState("allStyle");
  const [loginRedirect, setLoginRedirect] = useState(false);
  const [filterTest, setFilterTest] = useState([]);

  const getUser = localStorage.getItem("authUser");

  // const localdata = localStorage.getItem("cartitems");
  // console.log(localdata);

  // ADD MESSAGE
  // update : it is being executed using Custom hook now , see the code in useDeleteMessage.js file
  //  const openMessage = () => {
  //   message.loading({
  //     content: 'Adding...',
  //     key,
  //    style:{
  //      color: 'green'
  //    }
  //   });
  //   setTimeout(() => {
  //     message.success({
  //       content: 'Added Successfully!',
  //       key,
  //       duration: 2,
  //     });
  //   }, 1000);
  // };
  // ADD MESSAGE

  const [notifyAdd, setNotifyAdd] = useState(false);

  let filterListing = [
    {
      name: "All",
      class: "allStyle",
    },
    {
      name: "Sports",
      class: "sportsStyle",
    },
    {
      name: "Music",
      class: "musicStyle",
    },
    {
      name: "Gym",
      class: "gymStyle",
    },
  ];

  const handleClick = (product, quantity, setQuantity) => {
    console.log(product);
    const getUser = localStorage.getItem("authUser");
    if (getUser) {
      setNotifyAdd(true);
      openMessage("Adding", "Added Successfully");
      dispatch(addToCart(product, quantity));
      setTimeout(() => {
        setQuantity(1);
        setNotifyAdd(false);
      }, 2000);
    } else {
      setLoginRedirect(true);
    }

    // const w = data.filter((i) => {
    //   return id === i.id;
    // });

    // setCartData([...cartData,w[0]])
  };

  useEffect(() => {
    setAllStyle("allStyle");
  }, []);

  const handleSelect = (e) => {
    setskeleton(true);
    setTimeout(() => {
      setskeleton(false);
      setSelectedInput(e.target.value);
      setCurrent("");
    }, 700);
  };

  const handleFilter = (items) => {
    setCurrent(items.class);
    setSelectedInput(items.name);
    setListStyle(items.class);
    c(items);
    // c(v);
    // setSelectedInput(v);

    // if (v === "All") {
    //   setAllStyle("allStyle");
    //   setSportsStyle("");
    //   setMusicStyle("");
    //   setGymStyle("");
    // }
    // if (v === "Music") {
    //   setAllStyle("");
    //   setSportsStyle("");
    //   setMusicStyle("allStyle");
    //   setGymStyle("");
    // }
    // if (v === "Sports") {
    //   setAllStyle("");
    //   setSportsStyle("allStyle");
    //   setMusicStyle("");
    //   setGymStyle("");
    // }
    // if (v === "Gym") {
    //   setAllStyle("");
    //   setSportsStyle("");
    //   setMusicStyle("");
    //   setGymStyle("allStyle");
    // }
    setskeleton(true);
    setTimeout(() => {
      setskeleton(false);
    }, 700);
  };

  return (
    <>
      {/* <h2 style={{ padding: ".3rem", textAlign: "center" }}>SHOP</h2> */}
      {mainHeading && (
        <h2 style={{ padding: ".3rem", textAlign: "center" }}>SHOP</h2>
      )}
      <main className="featured">
        <div className="featured">
          <div className="products-header">
            {heading ? (
              <span
                style={{
                  fontWeight: "bold",
                  letterSpacing: ".1rem",
                  fontSize: "1rem",
                }}
              >
                {" "}
                {heading}
              </span>
            ) : filterOptions == true ? (
              <div className="filterList">
                {filterListing.map((items) => {
                  return (
                    <>
                      <span
                        key={items.class}
                        id={items.class}
                        className={current == items.class ? "active" : null}
                        onClick={() => handleFilter(items)}
                      >
                        {" "}
                        {items.name}
                      </span>
                    </>
                  );
                })}
                {/* OLD WAY */}
                {/* <span
                  id="All"
                  className={`${allStyle}`}
                  onClick={(id) => handleFilter("All")}
                >
                  {" "}
                  All{" "}
                </span>
                <span
                  id="Sports"
                  className={`${sportsStyle}`}
                  onClick={(id) => handleFilter( "Sports")}
                >
                  {" "}
                  Sports{" "}
                </span>
                <span
                  id="Music"
                  className={`${musicStyle}`}
                  onClick={(id) => handleFilter("Music")}
                >
                  {" "}
                  Music{" "}
                </span>
                <span
                  id="Gym"
                  className={`${gymStyle}`}
                  onClick={(id) => handleFilter("Gym")}
                >
                  {" "}
                  Gym{" "}
                </span> */}

                {/* OLD WAY */}
              </div>
            ) : (
              ""
            )}

            {viewBtn == true ? (
              <span>
                <NavLink to="/products">
                  {" "}
                  <button className="viewbtn"> VIEW ALL</button>
                </NavLink>{" "}
              </span>
            ) : (
              ""
            )}
            {filter == true ? (
              <div className="filterBtn">
                <select name="filter" id="" onChange={(e) => handleSelect(e)}>
                  <option value="All">All</option>
                  <option value="Sports">Sports</option>
                  <option value="Music">Music</option>
                  <option value="Gym">Gym</option>
                </select>
              </div>
            ) : (
              ""
            )}
          </div>

          {data
            .filter((fItem) => {
              if (selectedInput == "All") {
                return fItem;
              } else if (
                fItem.title
                  .toLowerCase()
                  .includes(selectedInput.toLowerCase()) ||
                fItem.category
                  .toLowerCase()
                  .includes(selectedInput.toLowerCase())
              ) {
                return fItem;
              }
            })
            .map((fItem, index) => {
              // console.log(fItem)
              const { id, image, title, description, price, category } = fItem;
              // setFilterTest()
              return (
                <>
                  {skeleton ? (
                    <Skeleton
                      active
                      paragraph={{
                        rows: 10,
                      }}
                    />
                  ) : (
                    <Card
                      index={index}
                      id={id}
                      title={title}
                      image={image}
                      category={category}
                      description={description}
                      btn={btn}
                      value={value}
                      price={price}
                      key={id}
                      qty={qty}
                      handleClick={handleClick}

                      // notifyAdd={notifyAdd}
                    />
                  )}
                </>
              );
            })}

          <br />
        </div>
        {loginRedirect ? <Navigate to="/login" /> : ""}
      </main>
    </>
  );
};

export default Categories;
