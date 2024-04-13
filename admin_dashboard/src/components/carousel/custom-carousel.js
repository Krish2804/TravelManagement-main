import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import Slider from "react-slick";
import Image from "../image/image";

function SimpleSlider(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable : true
  };

  // const imgs = [
    // "/assets/images/home/Elecon/banner-1.jpg",
    // "/assets/images/home/Elecon/banner-2.jpg",
    // "/assets/images/home/Elecon/banner-3.jpg",
  // ];

  const { imgArr } = props;

  return (

    <Box className="slider-container" sx={{
      borderRadius: 6,
    }} >
      <Slider {...settings}>
        {
          imgArr.map((img, index) => (
            <div key={index}>
              <Image key={index} src={img} alt={`Slide ${index}`} sx={{height : 350 }} ratio="16/9"  />
            </div>
          ))
        }


      </Slider>
    </Box>
  );
}


SimpleSlider.propTypes = {
  imgArr: PropTypes.array.isRequired,
};

export default SimpleSlider;
