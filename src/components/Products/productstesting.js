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
      <div classNameName="products-header">
        {heading ? (
          <div classNameName="left">{heading}</div>
        ) : filterOptions == true ? (
          // {filterListing.map((items) => {
          //   return (
          //     <>

          //     <div classNameName="right">
          //     <button>View all</button>
          //      </div>
          //       <span
          //         key={items.className}
          //         id={items.className}
          //         classNameName={current == items.className ? "active" : null}
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
          <div classNameName="right">
            <button>View all</button>
          </div>
        ) : (
          ""
        )}

        {filter == true ? (
          <div classNameName="filterBtn">
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

      <div classNameName="products-container">
        <div classNameName="products-wrapper">
          <div classNameName="cards-wrapper">


          {/* treat this as a card */}

          {
            data.map((fItem , index)=>{
              const { id, image, title, description, price, category } = fItem;
              return(

            <article className="actual-card">
              <picture className="card-thumbnail">
                <img
                  className="card-img"
                  src={img1}
                  alt="Chocolate filled boller"
                />
              </picture>
              <div className="actual-card-content">
                <div>{title}</div>
                <div>Price : {price}</div>
              </div>
              <div className="actual-card-btn">
                <button>add to cart</button>
              </div>
            </article>
              )
            })
          }



          </div>
        </div>
      </div>

      <div classNameName="products-footer">
        <div classNameName="view-more">
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
        // <div className="actual-card">
        //   <picture className="card-thumbnail">
        //     <img
        //       className="card-img"
        //       src={img1}
        //       alt="Chocolate filled boller"
        //     />
        //   </picture>
        //   <div className="actual-card-content">
        //     <p>{items.title}</p>
        //     <div>Price : {items.price}/-</div>
        //   </div>
        //   <div className="actual-card-btn">
        //     <button>add to cart</button>
        //   </div>
        // </div>
//       </>
//     );
//   })}