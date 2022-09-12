import React, { useState, useEffect } from "react";
import { Skeleton, Select } from "antd";

const Pagination = (props) => {
  // const { products } = props
  

  const { products, getCurrentItem, perPage } = props;

  // PAGINATION
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(100);

  const [pageNumberLimit, setPageNumberLimit] = useState(4);
  const [maxPNL, setMaxPNL] = useState(4);
  const [minPNL, setMinPNL] = useState(0);

  const { Option } = Select;

  const pages = [];
  for (let i = 1; i <= Math.ceil(products.length / itemsPerPage); i++) {
    pages.push(i);
    // console.log(pages.length);
  }

  const indexofLastItem = currentPage * itemsPerPage;
  // 1*4=4 , 2*4=8 , 3*4=12
  const indexofFirstItem = indexofLastItem - itemsPerPage;
  // 4-4=0 , 8-4=4 , 12-4=8
  const currentItem = products.slice(indexofFirstItem, indexofLastItem);
  // (0,4) , (4,8) , (8 , 12) , (12,16)

  useEffect(() => {
    getCurrentItem(currentItem);
  }, [currentPage,itemsPerPage]);

  const handlePage = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  const handlePrevious = () => {
    setCurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit == 0) {
      setMaxPNL(maxPNL - pageNumberLimit);
      setMinPNL(minPNL - pageNumberLimit);
    }
  };
  const handleNext = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPNL) {
      setMaxPNL(maxPNL + pageNumberLimit);
      setMinPNL(minPNL + pageNumberLimit);
    }
  };

  const renderPageNumbers = pages.map((num) => {
    if (num < maxPNL + 1 && num > minPNL) {
      return (
        <li
          key={num}
          id={num}
          onClick={handlePage}
          className={currentPage == num ? "active" : null}
        >
          {num}
        </li>
      );
    }
  });
  const handleChange = (val) => {
    console.log(`selected `, val);
    setItemsPerPage(val);
  };

  return (
    <div className="pagination-container">
      <button
        disabled={currentPage == pages[0] ? true : false}
        onClick={handlePrevious}
        className="pgbtn"
      >
        Previous
      </button>
      <div>
        <ul className="pagination">{renderPageNumbers}</ul>
      </div>
      <button
        className="pgbtn"
        onClick={handleNext}
        disabled={currentPage == pages[pages.length - 1] ? true : false}
      >
        Next
      </button>

      <Select
        className="pgselect"
        defaultValue="Per Page"
        onChange={handleChange}
      >
        <Option value="4">4</Option>
        <Option value="8">8</Option>
        <Option value="16">16</Option>
        <Option value="24">24</Option>
        <Option value="32">32</Option>
        <Option value="100">100</Option>
      </Select>
    </div>
  );
};

export default Pagination;
