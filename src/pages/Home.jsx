import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import img1 from "../images/cricket.png";
import banner1 from "../images/banner1.png";
import banner2 from "../images/shoe2.png";
import Testimonials from "../components/Testimonials";

import img11 from "../images/hero1.jpg";
import img2 from "../images/hero2.jpg";
import img3 from "../images/hero3.jpg";
import img4 from "../images/hero4.jpg";
import img5 from "../images/music-banner.jpg";
import img6 from "../images/sports-banner.jpg";
import img7 from "../images/gym-banner.jpg";
import img8 from "../images/yoga-banner.jpg";
import { motion, useScroll  } from "framer-motion";


import {
  categoryData, 
  productsData,
  testimonialsData,
} from "../Data/SampleData";
import Carousal from "../components/Carousal";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Products from "../components/Products/Products";

const title1 = "Swatches";
const desc1 =
  "Don’t have enough time to make your own gradients? Looking for a supply of popular gradients you can use for your projects? Our swatch collection features.";

const title2 = "Specials";
const desc2 =
  "We have some special edition shoes crafted for your trendy and special requirements";
var authorisedUser = localStorage.getItem("authUser");
const Home = () => {


  
  const { scrollYProgress } = useScroll();

  var settings = {
    dots: true,
    // size:large
  };

  const contentStyle = {
    height: "500px",
    width: "100%",
    textAlign: "center",
    objectFit: "cover",
    borderRadius: "0px",
  };
  useEffect(() => {
    console.log("HOMEPAGE RENDERRING");
    console.log(
      "authorisedUser--NOT WORKING WHEN LOGGED IN OR LOGGED OUT----",
      authorisedUser
    );
  }, []);
  const [authUser, setAuthUser] = useState({});
  useEffect(() => {
    setAuthUser(localStorage.getItem("authUser"));
  }, [authUser]);

  const [price, setPrice] = useState(true);

  return (
    <>
      {/* working */}
    <h2>Hello</h2>
      <div>
        <Slider {...settings} style={{ color: "red" }}>
          <div>
            <img src={img5} style={contentStyle} />
          </div>
          <div>
            <img src={img6} style={contentStyle} />
          </div>
          <div>
            <img src={img7} style={contentStyle} />
          </div>
          <div>
            <img src={img8} style={contentStyle} />
          </div>
        </Slider>
      </div>
      {/* <br /> */}
      {/* <Carousal /> */}
      {/* <Banner title={title1} desc={desc1} image={banner1} /> */}
      {/* <Categories
        heading={"Featured Categories"}
        btn={"Explore"}
        data={categoryData}
        value={"category"}
        qty={"no"}
        viewBtn={false}
        filterOptions={false}

      /> */}

      {/* 
        <Categories
          heading={"Featured Products"}
          btn={"Add To Cart"}
          data={productsData.slice(0, 8)}
          value={"product"}
          qty={"yes"}
          viewBtn={true}
          filterOptions={false}
        />   */}

      <Products
        heading={"Featured Categories"}
        btn={"Explore"}
        data={categoryData}
        value={"product"}
        qty={"no"}
      />

      <Products
        heading={"Featured Products"}
        btn={"Add To Cart"}
        data={productsData.slice(0, 8)}
        value={"product"}
        qty={"yes"}
        viewBtn={true}
        filterOptions={false}
      />

      
      {/* <motion.p style={{ scaleX: scrollYProgress, width: "500px" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt fuga
        incidunt adipisci. Ullam sit dicta nam blanditiis fugiat deserunt
        obcaecati tempora doloremque excepturi cupiditate error similique
        cumque, placeat hic! Rerum mollitia reiciendis dolorem error earum
        temporibus eveniet ab molestias, quo minima, sed dolor nihil quaerat
        accusamus, illum voluptate magnam facere tempora id nulla omnis aperiam
        quam reprehenderit odio? Ut eligendi impedit reiciendis rerum doloribus
        itaque, rem asperiores nobis ipsum! Animi, cum ducimus!
      </motion.p> */}

      {/* <Banner title={title2} desc={desc2} image={banner2} /> */}
      {/* <Testimonials data={testimonialsData} /> */}
    </>
  );
};

export default Home;
