import { Carousel } from 'antd';
import img1 from "../images/hero1.jpg"
import img2 from "../images/hero2.jpg"
import img3 from "../images/hero3.jpg"
import img4 from "../images/hero4.jpg"
import img5 from "../images/music-banner.jpg"
import img6 from "../images/sports-banner.jpg"
import img7 from "../images/gym-banner.jpg"
import img8 from "../images/yoga-banner.jpg"
import React from 'react';


const contentStyle = {
  height: '500px',
  width:"100%",
  textAlign: 'center',
  objectFit: "cover"
};

const Carousal = () => {
  const onChange = (currentSlide) => {
    // console.log(currentSlide);
  };

  return (
    <Carousel autoplay afterChange={onChange}>
      <div>
        {/* <h3 style={contentStyle}> */}
          
        {/* </h3> */} 
        <img  style={contentStyle} src={img5} alt="hero" />
      </div>
      <div>
        {/* <h3 style={contentStyle}>2</h3> */}
        <img  style={contentStyle} src={img6} alt="hero" />

      </div>
      <div>
        {/* <h3 style={contentStyle}>3</h3> */}
        <img  style={contentStyle} src={img7} alt="hero" />

      </div>
      <div>
        {/* <h3 style={contentStyle}>4</h3> */}
        <img  style={contentStyle} src={img8} alt="hero" />

      </div>
    </Carousel>
  );
};

export default Carousal;