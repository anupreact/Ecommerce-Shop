import { Skeleton } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useParams } from "react-router-dom";
import { addToCart } from "../actions/cartActions";
import { getAllProducts } from "../actions/productAction";
import Card from "../components/Card";
import Categories from "../components/Categories";
import { useDeleteMessage } from "../components/Testing/Hooks/useDeleteMessage";
import { useGetRequest } from "../components/Testing/Hooks/useGetRequest";
import { useLoader } from "../components/Testing/Hooks/useLoader";
import { productsData } from "../Data/SampleData";
import img1 from "../images/cricket.png";
import { Breadcrumb } from "antd";
import ProductsArray from "./Products";
import Products from "../components/Products/Products";

// "address": "109 , city club new-york , america 23454,  New York, New York, 123323.",

const Product = (props) => {
  const openMessage = useDeleteMessage();
  const openLoader = useLoader();
  const dispatch = useDispatch();
  const params = useParams();
  const productsState = useSelector((state) => state.getAllProductsReducer);
  const { products, loading, error } = productsState;
  const [quantity, setQuantity] = useState(1);
  const [loginRedirect, setLoginRedirect] = useState(false);
  const [loader, setLoader] = useState(false);
  const getUser = localStorage.getItem("authUser");

  // data fetched from custom hook writen in useGetRequest file
  const [fetched] = useGetRequest("http://localhost:5000/users");

  useEffect(() => {
    dispatch(getAllProducts());
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 300);
  }, []);

  const pId = products.find((p) => p.id == params.id);

  const handleClick = (product, quantity) => {
    if (getUser) {
      openMessage("Adding", "Added Successfully");
      dispatch(addToCart(product, quantity));
      setTimeout(() => {
        setQuantity(1);
      }, 1000);
    } else {
      setLoginRedirect(true);
    }
  };
  return (
    <>
      {loader ? (
        openLoader()
      ) : (
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
                {pId&& pId.title}
              </span>
            </Breadcrumb.Item>
          </Breadcrumb>

          <div className="main-area">
            <br />
            {loginRedirect ? <Navigate to="/login" /> : ""}
            <div className="centered">
              <div className="cards">
                {pId ? (
                  <>
                    <article class="card2 left-p">
                      <picture class="thumbnail">
                        <img src={img1} alt="A banana that looks like a bird" />
                      </picture>

                      <div className="hidden-content">
                        <div>
                          <h1>{pId?.title}</h1>
                        </div>
                        <div>
                          <p>
                            {pId.description}
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Deserunt, consectetur tempora voluptatum quas
                            recusandae accusamus delectus vel consequatur
                            laboriosam voluptas ad odio modi.
                          </p>
                        </div>
                        <div>
                          {" "}
                          <h3> Reviews : 4 stars</h3>{" "}
                        </div>

                        <div>
                          {" "}
                          <h2> Price :- {pId.price} /-INR</h2>
                        </div>
                        <div style={{ display: "flex", padding: ".3rem 0" }}>
                          <div
                            className="select"
                            style={{
                              marginRight: ".5rem",
                              width: "4.2rem",
                              height: "4rem",
                            }}
                          >
                            <select
                              style={{ width: "4rem", height: "1.94rem" }}
                              value={quantity}

                              onChange={(e) => {
                                setQuantity(e.target.value);
                              }}
                            >
                              {[...Array(10).keys()].map((x, i) => {
                                return (
                                  <option key={i} value={i + 1}>
                                    {" "}
                                    {i + 1}
                                  </option>
                                );
                              })}
                            </select>
                          </div>
                          <div className="addbtn">
                            <button>Add To Cart</button>
                          </div>
                        </div>
                      </div>
                    </article>

                    <article class="card2 right-p">
                      <div>
                        <h1>{pId.title}</h1>
                      </div>
                      <div>
                        <p>
                          {pId.description}
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Deserunt, consectetur tempora voluptatum quas
                          recusandae accusamus delectus vel consequatur
                          laboriosam voluptas ad odio modi.
                        </p>
                      </div>
                      <div>
                        {" "}
                        <h3> Reviews : 4 stars</h3>{" "}
                      </div>

                      <div>
                        {" "}
                        <h2> Price :- {pId.price * quantity} /-INR</h2>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          padding: ".3rem 0",
                        }}
                      >
                        <div
                          className="select"
                          style={{
                            marginRight: ".5rem",
                            width: "4.2rem",
                            height: "3rem",
                          }}  
                        >
                          <select
                            style={{
                              width: "4rem",
                              height: "2rem",
                              borderRadius: ".01rem",
                            }}
                            value={quantity}

                            onChange={(e) => {
                              setQuantity(e.target.value);
                            }}
                          >
                            {[...Array(10).keys()].map((x, i) => {
                              return (
                                <option key={i} value={i + 1}>
                                  {" "}
                                  {i + 1}
                                </option>
                              );
                            })}
                          </select>
                        </div>
                        <div className="addbtn">
                          <button onClick={() => handleClick(pId, quantity)}>
                            Add To Cart
                          </button>
                        </div>
                      </div>
                    </article>
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          <hr />
  
          <Products
            heading={"Related Products"}
            btn={"Add To Cart"}
            data={productsData.slice(0, 4)}
            value={"product"}
            qty={"yes"}
            viewBtn={true}
            filterOptions={false}
          />
        </>
      )}
    </>
  );
};

export default Product;
