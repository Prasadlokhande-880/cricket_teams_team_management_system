import React,{useState} from 'react'
import Header from '../component/header'
import Navbar from '../component/Navbar'
import Ourchempions from '../component/ourchempions'
import Founder from '../component/founder'
import Footer from '../component/footer'
import Success from '../component/Success'
import Commpones from '../component/commpones'
import Blog from '../component/blog'

const Home = (props) => {


  return (
    <div>
        <Navbar name={props.name}/>
        <Header/>
        <div className='hight_light'>
        <Ourchempions/>
        <Founder/>
        <Success/>
        <Commpones/>
        <Blog/>
        <Footer/>
        </div>
        <div>
        <input type='file' name='img'/>
        </div>
    </div>
  )
}

export default Home
