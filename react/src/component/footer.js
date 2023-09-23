import React from 'react';
import './footer.css';
import '@fortawesome/fontawesome-free/css/all.css'; // Import Font Awesome CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container2">
        <div className="row">
          <div className="footer-col">
            <h4>Contact Us</h4>
            <ul>
              <li>
                <a href="#">
                  Birenu Asha Palace, 121, Sanjay Rd, Near Bengal Club, SNP
                  Area, Ambagan, Sakchi, Jamshedpur, Jharkhand 831001
                </a>
              </li>
              <li>
                <a href="#">9771320397 | 7667599826</a>
              </li>
              <li>
                <a href="#">info@physicssansar.com</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Courses</h4>
            <ul>
              <li>
                <a href="#">JEE Main + Adv.</a>
              </li>
              <li>
                <a href="#">NEET UG</a>
              </li>
              <li>
                <a href="#">Class 11th</a>
              </li>
              <li>
                <a href="#">Class 11th</a>
              </li>
              <li>
                <a href="#">Foundation (10th)</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Supported Documents</h4>
            <ul>
              <li>
                <a href="#">Terms and Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Cancellation and Refund</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Get Our Application</h4>
            <ul>
              <li>
                <img className="playimg" src={process.env.PUBLIC_URL + '/img/gplay.png'} alt="Google Play" />
              </li>
              <li>
              <img className="playimg" src={process.env.PUBLIC_URL + '/img/gplay.png'} alt="Google Play" />
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom">
          <div className="footer-row">
            <div className="social-links">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <div className="developers">
              <p style={{ textAlign: 'center' }}>
                © 2023{' '}
                <a href="#">QuantEM JEE Academy</a>. All Rights Reserved,
                Developed By MITAOE student{' '}
                <a href="https://www.linkedin.com/in/prasad-lokhande-540020254/">
                  Prasad
                </a>
              </p>
              </div>
              </div>
            </div>
            </div>
    </footer>
  );
};

export default Footer;
