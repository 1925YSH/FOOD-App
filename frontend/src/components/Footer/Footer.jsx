import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo2} alt="" />
          <p>
          Savor the finest flavors with us! At Tomato, we are dedicated to bringing you 
            delicious meals made from the freshest ingredients. Whether it's a quick bite or a grand feast, 
            we've got you covered. Join us on a journey of taste and quality!
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
       <li><Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}> Home </Link></li>
       
            <li><Link to="/about" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
    About Us
  </Link></li>
            <li><Link to="/delivery" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
    Delivery
  </Link></li>
            <li><Link to="/privacy-policy" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
    Privacy & Policy
  </Link></li>
        </div>
        <div className="footer-content-right">
        <h2>GET IN TOUCH</h2>
        <ul>
            <li>+91-8283510196</li>
            <li>contact@tomato.com</li>
        </ul>
        </div>
      </div>
    <hr />
    <p className="footer-copyright">Copyright 2025 © Tomato.com - All Right Reserved. </p>

    </div>
  );
};

export default Footer;
