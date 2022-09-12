import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

import img1 from "../images/cricket.png";


const Card = (product) => {
  const [quantity, setQuantity] = useState(1);
  const [showAddBtn, setshowAddBtn] = useState(false);
  const [Redirect, setRedirect] = useState(false);
  const {
    id,
    title,
    index,
    image,
    qty,
    category,
    description,
    btn,
    value,
    price,
    handleClick,
  } = product;

  // Working
  const handleCartBtn = (x) => { 
    if(x==="hovered"){
      console.log("true")
      setshowAddBtn(true)
    }else{
      console.log("false")
      setshowAddBtn(false)
    }

   }

   useEffect(() => {
   
     console.log("component renderring")
   }, [])
   

  return (
    <>
 
    
    <section className={`${showAddBtn ? "in" : "out" } card`} onMouseOver={()=>handleCartBtn("hovered")} onMouseLeave={()=>handleCartBtn("leave")}  key={id}>
      <div className="card-img">
        <NavLink to={`/product/${id}`}>
          <img src={img1} alt="not found" />
        </NavLink>
      </div>

      <div className={`${showAddBtn ? "card-button-open" : "card-button-close" }`}>
      {btn === "Explore" ? (
          <button>{btn}</button>
        ) : (
          <button className={`${showAddBtn ? "button-open" : "button-close" }`} onClick={() => handleClick(product, quantity, setQuantity)}>
            {btn}
          </button>
        )}
      </div>

      <div className="card-title">
        <span>{title}</span>
      </div>
      {/* <div className="card-desc">
        <p>{description}</p>
      </div> */}
      {value !== "category" ? (
        <h2 className="price">Price:- {price * quantity}/- </h2>
      ) : (
        ""
      )}

      <div
        className="card-btn"
        style={{ justifyContent: `${qty === "no" ? "center" : ""}` }}
      >
        {qty === "yes" ? (
          <select
            value={quantity}
            // onChange={handleSelect}
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
        ) : (
          ""
        )}
        {btn === "Explore" ? (
          <button>{btn}</button>
        ) : (
          <button onClick={() => handleClick(product, quantity, setQuantity)}>
            {btn}
          </button>
        )}
      </div>
    </section>
    </>

  );
};

export default Card;
