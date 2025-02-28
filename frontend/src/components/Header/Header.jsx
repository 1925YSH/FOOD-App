import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <h2>Order Your Favourite Food Here</h2>
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
