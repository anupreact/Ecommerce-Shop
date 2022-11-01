import React from "react";
import Slider from "react-slick";
import img5 from "../../images/music-banner.jpg";
import img6 from "../../images/sports-banner.jpg";
import img7 from "../../images/gym-banner.jpg";
import img8 from "../../images/yoga-banner.jpg";

const Carousal = () => {
  var settings = {
    dots: true,
  };
  const contentStyle = {
    height: "500px",
    width: "100%",
    textAlign: "center",
    objectFit: "cover",
    borderRadius: "0px",
  };
  return (
    <div>
      <Slider {...settings} style={{ color: "red" }}>
        <div>
          <img src={img5} style={contentStyle} alt="not found" />
        </div>
        <div>
          <img src={img6} style={contentStyle} alt="not found" />
        </div>
        <div>
          <img src={img7} style={contentStyle} alt="not found" />
        </div>
        <div>
          <img src={img8} style={contentStyle} alt="not found" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousal;
