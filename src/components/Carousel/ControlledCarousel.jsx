import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import carousel1 from "../Carousel/CarouselImg/slide1.jpg";
import carousel2 from "../Carousel/CarouselImg/slide2.png";
import carousel3 from "../Carousel/CarouselImg/slide3.png";

import {
  main,
  caption,
  h3OfWords,
  span,
  button,
  button2,
  buttonhover,
  buttonhover2,
  df,
  dfInner,
  summer,
  arrivals,
  del,
  mainCaption,
  main3,
  summer3,
  arrivals3,
} from "./CarouselStyles";

import "bootstrap/dist/css/bootstrap.min.css";

export default function ControlledCarousel({mainBool}) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };


  const [buttonS, setButtonS] = React.useState(button);

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      fade  
      interval={10000}
    >
      <Carousel.Item > 
        <img className="d-block w-100" src={carousel1} alt="First slide" />
        <Carousel.Caption style={main} className='caption-carousel'>
          <div style={caption}>
            <h3 style={h3OfWords}>
              THE <br /> BIGGEST <br /> <span style={span}className={`${mainBool} span-sale`}>SALE </span>
            </h3>{" "}
            <br />
            <button
              style={buttonS}
              onMouseOver={() => setButtonS(buttonhover2)}
              onMouseOut={() => setButtonS(button2)}
              className={`${mainBool} button-shop-now`}
            >
              SHOP NOW
            </button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={carousel2} alt="Second slide" />

        <Carousel.Caption style={main}>
          <div style={caption}>
            <h3 style={arrivals}>NEW ARRIVALS ON SALE</h3>
            <p style={summer}> SUMMER COLLECTION </p>
            <h5 style={df}>
              $ <h6 style={dfInner} >49</h6> ${" "}
              <h6 style={dfInner}>
                <del style={del}>86</del>
              </h6>{" "}
            </h5>
            <button
              style={buttonS}
              onMouseOver={() => setButtonS(buttonhover)}
              className={`${mainBool} button-shop-now`}
              onMouseOut={() => setButtonS(button)}
            >
              SHOP THIS ITEM NOW
            </button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img className="d-block w-100" src={carousel3} alt="Third slide" />

        <Carousel.Caption style={main3}>
          <div style={mainCaption}>
            <h3 style={arrivals3}>NEW ARRIVALS ON SALE</h3>
            <p style={summer3}> SUMMER COLLECTION </p><br />
            <button
              style={buttonS}
              onMouseOver={() => setButtonS(buttonhover)}
              onMouseOut={() => setButtonS(button)}
              className={`${mainBool} button-shop-now`}
            >
              SHOP THIS ITEM NOW
            </button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
