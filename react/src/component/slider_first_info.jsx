import React from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './slider_first_info.css';

const SliderFirstInfo = ({ icon, info, color }) => {
    return (
        <div className="slider-info-item" style={{ backgroundColor: color }}>
            <i className={icon} />
            <p className='info_slider_first'>{info}</p>
        </div>
    );
}

export default SliderFirstInfo;
