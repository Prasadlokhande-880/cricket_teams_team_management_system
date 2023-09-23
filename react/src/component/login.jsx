import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Login.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useHistory


const Login = (props) => {

  const navigate = useNavigate();


  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error,seterror]=useState('');
  const [display,functionDisplay]=useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    props.functionName(username);
    try {
      const response = await axios.post("/login_save", {
        name:username,
        password:password,
      });

      console.log("Response from server:", response.data);

      if (response.data.message === "Login successful") {
        console.log("Login is successful!");
        functionDisplay((prev)=>{
          return !prev;
        })
        setTimeout(()=>{
          navigate('/home');
        },1000);

        seterror();
      }
      else{
      console.log("error password or username is wroung");
      seterror('Password or Username is wrong!');
      }

    } catch (error) {
      console.log("An error occurred:", error);
    }
  };

  return (
    <div>

<div className='display' style={{ display: display ? 'block' : 'none' }}>
  <p className='successful'>Login is successful!</p>
</div>

    <div className="login_main_body">
      <div className='Swiper'>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="https://media.istockphoto.com/id/1281150061/vector/register-account-submit-access-login-password-username-internet-online-website-concept.jpg?s=612x612&w=0&k=20&c=9HWSuA9IaU4o-CK6fALBS5eaO1ubnsM08EOYwgbwGBo=" alt="Slide 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg?w=2000" alt="Slide 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://t3.ftcdn.net/jpg/03/39/70/90/360_F_339709048_ZITR4wrVsOXCKdjHncdtabSNWpIhiaR7.jpg" alt="Slide 3" />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="form">
        <p className="login_heading">Hello Again!</p>
        <p className="login_sub">Welcome back. Let's work on your skills with the Physics Sansar.</p>

        <form onSubmit={handleSubmit} action='post'>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" placeholder="Enter your username" value={username} onChange={handleUsernameChange} required/>

          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" value={password} onChange={handlePasswordChange} required/>

          <p className='error' style={{color:'red'}}>{error}</p>
          <button type='submit' className='login_form'>Login</button>
        </form>

        <p className="sign_up_link">
          Don't have an account yet? <a href="/SignUP">Sign up</a>
        </p>
      </div>
    </div>
    </div>
  );
};

export default Login;
