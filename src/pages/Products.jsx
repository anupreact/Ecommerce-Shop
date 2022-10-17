import React, { useEffect, useMemo, useState } from "react";
import Categories from "../components/Categories";
import { categoryData, productsData, usersData } from "../Data/SampleData";
import { getAllProducts } from "../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import { Skeleton, Select } from "antd";
import Pagination from "../components/Pagination";
import Count from "../components/Testing/useCallback/Count";
import Products from "../components/Products/Products";

const ProductsArray = () => {
  const dispatch = useDispatch();
  const productsState = useSelector((state) => state.getAllProductsReducer);
  const { products, loading, error } = productsState;
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    dispatch(getAllProducts());
    // console.log("PRODUCTS PAGE RENDERRING");

    // setData(products);
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }, []);

  // // PAGINATION
  // const [currentPage, setCurrentPage] = useState(1);
  // const [itemsPerPage, setItemsPerPage] = useState(4);

  // const [pageNumberLimit, setPageNumberLimit] = useState(4);
  // const [maxPNL, setMaxPNL] = useState(4);
  // const [minPNL, setMinPNL] = useState(0);

  // const { Option } = Select;

  // const handleChange = (value) => {
  //   console.log(`selected ${value}`);
  //   setItemsPerPage(value);
  // };

  // const pages = [];
  // for (let i = 1; i <= Math.ceil(products.length / itemsPerPage); i++) {
  //   pages.push(i);
  //   // console.log(pages.length);
  // }

  // const indexofLastItem = currentPage * itemsPerPage;
  // // 1*4=4 , 2*4=8 , 3*4=12
  // const indexofFirstItem = indexofLastItem - itemsPerPage;
  // // 4-4=0 , 8-4=4 , 12-4=8
  // const currentItem = products.slice(indexofFirstItem, indexofLastItem);
  // // (0,4) , (4,8) , (8 , 12) , (12,16)

  // const handlePage = (event) => {
  //   setCurrentPage(Number(event.target.id));
  // };

  // const handlePrevious = () => {
  //   setCurrentPage(currentPage - 1);

  //   if ((currentPage - 1) % pageNumberLimit == 0) {
  //     setMaxPNL(maxPNL - pageNumberLimit);
  //     setMinPNL(minPNL - pageNumberLimit);
  //   }
  // };
  // const handleNext = () => {
  //   setCurrentPage(currentPage + 1);

  //   if (currentPage + 1 > maxPNL) {
  //     setMaxPNL(maxPNL + pageNumberLimit);
  //     setMinPNL(minPNL + pageNumberLimit);
  //   }
  // };

  // const renderPageNumbers = pages.map((num) => {
  //   if (num < maxPNL + 1 && num > minPNL) {
  //     return (
  //       <li
  //         key={num}
  //         id={num}
  //         onClick={handlePage}
  //         className={currentPage == num ? "active" : null}
  //       >
  //         {num}
  //       </li>
  //     );
  //   }
  // });

  // PAGINATION

  const getCurrentItem = (x) => {
    setItems(x);
  };
  // console.log(items)


  return (
    <>
      {loading || isLoading ? (
        <h3 style={{ textAlign: "center" }}>
          {" "}
          <Skeleton
            active
            paragraph={{
              rows: 10,
            }}
          />
        </h3>
      ) : error ? (
        <h1> something went wrong </h1>
      ) : (
        <>
          {/*  */}
          <Products
            // heading={"Featured Products"}
            btn={"Add To Cart"}
            qty={"yes"}
            // data={products.slice(0,10)}
            viewBtn={false}
            data={items}
            filter={true}
            filterOptions={true}
            mainHeading={true}
            loadMore={true}
            // child={childFuction}
          />
          <div style={{display:"none"}}>

          <Pagination
            // currentPage={currentPage}
            // pages={pages}
            // renderPageNumbers={renderPageNumbers}
            // handleChange={handleChange}
            // handlePrevious={handlePrevious}
            // handleNext={handleNext}
            products={products}
            // currentItem={currentItem}
            getCurrentItem={getCurrentItem}
            // perPage={16}
          />
          </div>

          {/*  */}

          {/* {currentItem.length && <></>} */}
          {/* <Categories
            // heading={"Featured Products"}
            btn={"Add To Cart"}
            qty={"yes"}
            // data={products.slice(0,10)}
            viewBtn={false}
            data={items}
            filter={true}
            filterOptions={true}
            mainHeading={true}
            // child={childFuction}
          /> */}

        </>
      )}
    </>
  );
};

export default ProductsArray;
