import React from 'react'
import "./founter.css"


const founder = () => {
  return (
    <div className='mainFounder'>
      <div className='main_founder_info'>
        <section className='main_founderInfo'>
        <p className='main_founderInfo_header'>
            Athlete Development program
        </p>
        <p className='main_founderInfo_subinfo'>
        An Athlete Development Program is a structured plan designed to enhance the physical, mental, and skill-based aspects of athletes' performance and overall well-being. It typically includes personalized training, nutrition guidance, mental conditioning, injury prevention, and performance analysis. The program aims to optimize an athlete's potential, ensuring progressive growth and success in their chosen sport.
        </p>
        <button className='main_founderInfoMore'>Read more</button>
        </section>

        <search className='founder_img'>
            <img src= {process.env.PUBLIC_URL + '/img/PngItem_1924266.png'} alt=''></img>
        </search>
      </div>
    </div>
  )
}

export default founder
