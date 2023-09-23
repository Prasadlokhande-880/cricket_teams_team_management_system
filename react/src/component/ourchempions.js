import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SliderSecondInfo from './slider_second_info';
import axios from 'axios';
import "./ourChempions.css";


const OurChempions = () => {
  const [sliderInfo2, setSliderInfo2] = useState([]);

  useEffect(() => {
    // Fetch data from the backend when the component mounts
    axios
      .get('/slider_second_info')
      .then(response => {
        setSliderInfo2(response.data.users);
        console.log(sliderInfo2);
      })
      .catch(error => {
        console.error('Error fetching slider info:', error);
      });
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  const A = sliderInfo2.map((info, index) => (
    <SliderSecondInfo img={info.img} name={info.name} info={info.info} key={index} />
  ));

  return (
    <div className='mainDiv_ourchempions'>
      <section className='ourchempions_heading'>
        <p>Get to know the profiles of our chempions a become one of them now!</p>
      </section>

      <div className='information_Carousel_second'>
        <Carousel responsive={responsive}>{A}</Carousel>
      </div>
    </div>
  );
};

export default OurChempions;
