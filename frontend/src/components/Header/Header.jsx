import React from "react";
import "./Header.css";
import { assets } from "../../assets/assets";
const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <h2>Order Your Favourite Food Here</h2>
        <img src={assets.header_img} alt="" />
        <p>
        Enjoy a delicious variety of freshly made dishes, from savory meals to delightful desserts.
        Order now and indulge in a flavorful experience right at your doorstep!
        </p>

        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
