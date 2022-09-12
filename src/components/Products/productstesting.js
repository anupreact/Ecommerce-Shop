import React from "react";
import "./Products.scss";
import img1 from "../../images/cricket.png";
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
  } = props;
  return (

    



    
    <>
      <div className="products-header">
        {heading ? (
          <div className="left">{heading}</div>
        ) : filterOptions == true ? (
          // {filterListing.map((items) => {
          //   return (
          //     <>

          //     <div className="right">
          //     <button>View all</button>
          //      </div>
          //       <span
          //         key={items.class}
          //         id={items.class}
          //         className={current == items.class ? "active" : null}
          //         onClick={() => handleFilter(items)}
          //       >
          //         {" "}
          //         {items.name}
          //       </span>
          //     </>
          //   );
          // })}

          // put the code if filtr options are true
          "filter options"
        ) : (
          ""
        )}

        {viewBtn == true ? (
          <div className="right">
            <button>View all</button>
          </div>
        ) : (
          ""
        )}

        {filter == true ? (
          <div className="filterBtn">
            {/* <select name="filter" id="" onChange={(e) => handleSelect(e)}>
              <option value="All">All</option>
              <option value="Sports">Sports</option>
              <option value="Music">Music</option>
              <option value="Gym">Gym</option>
            </select> */}
          </div>
        ) : (
          ""
        )}
      </div>
      {/*  end*/}

      {/*  start*/}

      <div class="products-container">
        <div class="products-wrapper">
          <div class="cards-wrapper">


          {/* treat this as a card */}

          {
            data.map((fItem , index)=>{
              const { id, image, title, description, price, category } = fItem;
              return(

            <article class="actual-card">
              <picture class="card-thumbnail">
                <img
                  class="card-img"
                  src={img1}
                  alt="Chocolate filled boller"
                />
              </picture>
              <div class="actual-card-content">
                <div>{title}</div>
                <div>Price : {price}</div>
              </div>
              <div class="actual-card-btn">
                <button>add to cart</button>
              </div>
            </article>
              )
            })
          }



          </div>
        </div>
      </div>

      <div className="products-footer">
        <div className="view-more">
          <button>View More</button>
        </div>
      </div>
    </>
  );
};

export default Products;


// {data.map((items) => {
//     return (
//       <>
        // <div class="actual-card">
        //   <picture class="card-thumbnail">
        //     <img
        //       class="card-img"
        //       src={img1}
        //       alt="Chocolate filled boller"
        //     />
        //   </picture>
        //   <div class="actual-card-content">
        //     <p>{items.title}</p>
        //     <div>Price : {items.price}/-</div>
        //   </div>
        //   <div class="actual-card-btn">
        //     <button>add to cart</button>
        //   </div>
        // </div>
//       </>
//     );
//   })}