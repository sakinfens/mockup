import React, { useState } from 'react';
import { SliderData } from './../Data/SliderData.js';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import "./../Style/slider.css";

function ImageSlider (){
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(SliderData) || SliderData.length <= 0) {
    return null;
  }

  return (
    <section id='slider'>
      <IoIosArrowBack onClick={prevSlide} style={{color: "white", width:"200px"}} />
      {SliderData.map((slide, index) => {
        return (
          <div
            id="slider-container"
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='travelimage' />
            )}
            <div className="slider-info">
                <div className="slider-dates">
                    {index === current && (<h2>{slide.eventInfo.month}</h2>)}
                    {index === current && (<h1>{slide.eventInfo.date}</h1>)}
                    {index === current && (<h1>{slide.eventInfo.time}</h1>)}
                </div>
                <div className="container-info">
                    {index === current && (<h1>{slide.eventInfo.eventTitle}</h1>)}
                    {index === current && (<h2>{slide.eventInfo.location}</h2>)}
                    {index === current && (<h1>{slide.eventInfo.directions}</h1>)}
                    {index === current && (<h1>{slide.eventInfo.paragraph}</h1>)}
                </div>
            </div>
            
          </div>
        );
      })}
      <IoIosArrowForward onClick={nextSlide} style={{color: "white"}}/>
    </section>
  );
};

export default ImageSlider;