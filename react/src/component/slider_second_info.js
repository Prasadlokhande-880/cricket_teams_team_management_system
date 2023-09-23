import React from 'react'
import './slider_second_info.css'


const slider_second_info = (props) => {
  return (
    <div className='slider'>
      <div class="container">
        <img  className="slider_second_img" src={props.img} alt=""/>
        <div class="t">
            <div className='bottom'>
            <h2>{props.name}</h2>
            <p>{props.info}</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default slider_second_info
