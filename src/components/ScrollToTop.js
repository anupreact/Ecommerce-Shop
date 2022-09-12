import React, { useState, useEffect } from "react";

const ScrollToTop = () => {

    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
  return (
    <div className='top-to-btm'>
        {
            showTopBtn && (

                <i className="fa fa-arrow-up icon-position icon-style" aria-hidden="true" onClick={goToTop}></i>
            )
        }
    </div>
  )
}

export default ScrollToTop