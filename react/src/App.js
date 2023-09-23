import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Signup from './pages/Signuppage';
import Home from './pages/Home';
import Team from './pages/Team';
import ErrorPage from './component/error';

import {useState} from 'react'

function App() {
  const [name , getname ]= useState('');

  const functionName = (newName) => {
    getname(newName);
    console.log("this is your name at app", newName);
  };


  return (
    <>
      <Routes>
        {/* Routes for the pages */}
        <Route path="/" element={<Login functionName={functionName}/>} />
        <Route path="/SignUP" element={<Signup/>} />
        <Route path="/Home" element={<Home  name={name}/>}/>
        <Route path="/*" element={<ErrorPage/>}/>
        <Route path="/Team" element={<Team name={name}/>}/>
      </Routes>
    </>
  );
}

export default App;
