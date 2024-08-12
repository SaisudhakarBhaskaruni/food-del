import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo}></img>
          <p>
            Getting your food delivered right to your doorstep has never been
            easier! There are so many food delivery options available, and each
            one has its own unique slogan. Here are MORE food delivery slogans
            ideas to get you started:
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon}></img>
            <img src={assets.linkedin_icon}></img>
            <img src={assets.twitter_icon}></img>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>CONTACT US</h2>
          <ul>
            <li>+91-123456789</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr></hr>
      <p className="footer-copyright">
        Copyright 2024 Tomato.com - All Right Reserved
      </p>
    </div>
  );
};

export default Footer;
