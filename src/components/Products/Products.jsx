import React, { useState, useEffect } from "react";
import "./Products.scss";
import img1 from "../../images/cricket.png";
import { motion } from "framer-motion";

// import img1 from "../images/cricket.png";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../actions/cartActions";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Pagination, Skeleton, Tooltip } from "antd";
import { Button, message } from "antd";
import { useDeleteMessage } from "../Testing/Hooks/useDeleteMessage";
import { Select } from "antd";
import { Navigate, NavLink } from "react-router-dom";
import ProductComponent from "./ProductComponent";
const key = "updatable";
const Products = (props) => {
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
    loadMore,
  } = props;
  const initialItems = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(initialItems);

  const pages = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pages.push(i);
    // console.log(pages.length);
  }

  const indexofLastItem = currentPage * itemsPerPage;
  // 1*8=8 , 2*8=16 , 3*8=24
  const indexofFirstItem = indexofLastItem - itemsPerPage;
  // 8-8=0 , 16-8=8 , 24-8=16
  const currentItem = data.slice(indexofFirstItem, indexofLastItem);
  // (0,4) , (4,8) , (8 , 12) , (12,16)

  const handleNext = () => {
    setItemsPerPage(itemsPerPage + initialItems);
    // setCurrentPage(currentPage + 1);
  };

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

    setskeleton(true);
    setTimeout(() => {
      setskeleton(false);
    }, 700);
  };

  const { Option, OptGroup } = Select;

  return (
    <>
      {mainHeading && (
        <h2
          animate={{ x: 100 }}
          style={{ padding: ".3rem", textAlign: "center" }}
        >
          SHOP
        </h2>
      )}
      <div className="products-header">
        <div className="left">
          {heading && heading}
          {filterOptions && (
            <>
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
            </>
          )}
        </div>
        <div className="right">
          {viewBtn ? (
            <NavLink to="/products">
              <button>View all</button>
            </NavLink>
          ) : (
            filter && (
              <div className="filterBtn">
                <select name="filter" id="" onChange={(e) => handleSelect(e)}>
                  <option value="All">All</option>
                  <option value="Sports">Sports</option>
                  <option value="Music">Music</option>
                  <option value="Gym">Gym</option>
                </select>
              </div>
            )
          )}
        </div>
      </div>

      <div class="products-container">
        <div class="products-wrapper">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            class="cards-wrapper"
          >
            {currentItem
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
                const { id, image, title, description, price, category } =
                  fItem;
                return (
                  <ProductComponent
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
                  />
                );
              })}
          </motion.div>
        </div>
      </div>
      {loadMore && (
        <div className="products-footer">
          <div className="view-more">
            <Tooltip
              placement="right"
              title={`${
                currentPage == pages[pages.length - 1] ? "No More Products" : ""
              }`}
            >
              <button
                disabled={currentPage == pages[pages.length - 1] ? true : false}
                // style={{background:`${currentPage == pages[pages.length - 1] ? 'red' : 'green'}`}}
                onClick={handleNext}
              >
                Load More
              </button>
            </Tooltip>
          </div>
        </div>
      )}
      {loginRedirect ? <Navigate to="/login" /> : ""}
    </>
  );
};

export default Products;
