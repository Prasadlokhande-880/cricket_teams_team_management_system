import React, { useState, useEffect } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SliderFirstInfo from './slider_first_info';
import axios from 'axios';
import './header.css';

const Header = () => {
    const [sliderInfo, setSliderInfo] = useState([]);

    useEffect(() => {
        // Fetch data from the backend when the component mounts
        axios.get('/slider_first_info')
            .then(response => {
                setSliderInfo(response.data.users);
            })
            .catch(error => {
                console.error('Error fetching slider info:', error);
            });
    }, []);

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    }

    return (
        <div className='main_div_header'>
        <div className='home_header_main'>
            <div className='header_infosection'>
                <p className='header_main'>
                    Never say never because limits, like fears, are often just an illusion.
                </p>

                <p className='header_mainsub' >When there is a road block in vour wav, it is almost always mental. When vou place some sort of mental road block methina to'</p>
               <section className='Carousel'>
                <Carousel responsive={responsive}>
                    {sliderInfo.map((info, index) => (
                        <SliderFirstInfo key={index} icon={info.icon} info={info.info} color={info.color} />
                    ))}
                </Carousel>
                </section>
            </div>

            <div className='img_headersection'>
                <img src={process.env.PUBLIC_URL + '/img/pngwing.com(6).png'} alt="Image" />
            </div>
        </div>
        </div>
    )
}

export default Header;
