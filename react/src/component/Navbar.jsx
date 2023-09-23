import React, { useState, useEffect } from "react";
import axios from "axios";
import menuItems from "./MenuItems";
import "./Nabar.css"; // Make sure the filename matches the import
import "@fortawesome/fontawesome-free/css/all.min.css";

const Navbar = (props) => {
  const [active, setActive] = useState(false);
  const [username, setUsername] = useState(''); // Change name to username

  useEffect(() => {
    // Fetch username from the backend when the component mounts
    axios.get('/username')
      .then(response => {
        setUsername(response.data.username1); // Update state with the fetched username
      })
      .catch(error => {
        console.error('Error fetching username:', error);
      });
  }, []); // Empty dependency array to fetch only once on mount

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className="navbar">
      <h1 className="navbar-logo">
        {username ? `Hello ${username} 😁 !` : 'Hello, Guest!'}
      </h1>
      <div className="menu-icon" onClick={handleClick}>
        <i className={active ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={active ? "nav-menu active" : "nav-menu"}>
        {menuItems.map((item, index) => (
          <li key={index}>
            <a href={item.url} className={item.cName} id="hover-underline-animation">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
