import React, { useState } from "react";

const usePagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  const [pageNumberLimit, setPageNumberLimit] = useState(4);
  const [maxPNL, setMaxPNL] = useState(4);
  const [minPNL, setMinPNL] = useState(0);

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

  const handleChange = (val) => {
    console.log(`selected `, val);
    setItemsPerPage(val);
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

  const usePaginate = () => {
      
  };
  return usePaginate;
};

export default usePagination;
