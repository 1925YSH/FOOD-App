import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Us</h1>
        <p>
          Welcome to <strong>Tomato</strong> – your go-to destination for delicious food 
          delivered right to your doorstep!
        </p>
      </div>

      <div className="about-content">
        <div className="about-section">
          <h2>Our Story</h2>
          <p>
            We started Tomato with one mission – to bring fresh, tasty, and 
            high-quality meals to everyone, anytime. From humble beginnings, 
            we've grown into a trusted food delivery platform.
          </p>
        </div>

        <div className="about-section">
          <h2>What We Offer</h2>
          <ul>
            <li>Fresh & high-quality ingredients</li>
            <li>Fast & reliable delivery</li>
            <li>Wide range of cuisines</li>
            <li>Affordable prices</li>
          </ul>
        </div>

        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            We believe food is more than just fuel – it's an experience. 
            Our goal is to connect people through flavors and provide 
            a seamless, joyful ordering experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
