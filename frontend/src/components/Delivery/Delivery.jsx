import React from "react";
import "./Delivery.css";

const Delivery = () => {
  return (
    <div className="delivery-container">
      <div className="delivery-header">
        <h1>Delivery Information</h1>
        <p>
          Fast, reliable, and always on time! Here's how we bring your favorite meals right to your doorstep.
        </p>
      </div>

      <div className="delivery-content">
        <div className="delivery-card">
          <h2>⏱ Fast Delivery</h2>
          <p>
            We aim to deliver within <strong>30-45 minutes</strong> depending on your location and order size.
          </p>
        </div>

        <div className="delivery-card">
          <h2>📍 Delivery Areas</h2>
          <p>
            Currently, we deliver across major cities and expanding every month! Enter your pin code to check availability.
          </p>
        </div>

        <div className="delivery-card">
          <h2>💳 Payment Options</h2>
          <p>
            We accept cash on delivery, UPI, and all major debit/credit cards for your convenience.
          </p>
        </div>

        <div className="delivery-card">
          <h2>📦 Packaging</h2>
          <p>
            Your food is packed fresh and securely to keep it hot and safe during the journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
