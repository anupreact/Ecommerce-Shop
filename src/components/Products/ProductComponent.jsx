import React, { useState, useEffect } from "react";
import img1 from "../../images/cricket.png";
import { NavLink, Outlet } from "react-router-dom";

const ProductComponent = (product) => {
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

  const [quantity, setQuantity] = useState(1);
  const [showAddBtn, setshowAddBtn] = useState(false);
  const [Redirect, setRedirect] = useState(false);

  const handleCartBtn = (x) => {
    if (x === "hovered") {
      console.log("true");
      setshowAddBtn(true);
    } else {
      console.log("false");
      setshowAddBtn(false);
    }
  };

  useEffect(() => {
    // console.log("component renderring");
  }, []);

  return (
    <div className="actual-card">
      <picture className="card-thumbnail">
        <NavLink to={btn==="Add To Cart" ? `/product/${id}` : ""}>
          <img className="card-img" src={image} alt="Chocolate filled boller" />
        </NavLink>
      </picture>
      <div className="actual-card-content">
        {
          btn==="Explore" ? <p style={{display:"flex", justifyContent:"center"}}>{title}</p> : <p>{title}</p>
        }

        {btn === "Explore" ? "" : <div>Price : {price}/-</div>}
      </div>
      <div className="actual-card-btn" style={{justifyContent:`${btn==="Explore" ? "center" : "start"}`}}>
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
    </div>
  );
};

export default ProductComponent;
