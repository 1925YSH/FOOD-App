import React from "react";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      <h1>Privacy & Policy</h1>
      <p>
        At <strong>Tomato</strong>, we value your privacy and are committed to protecting your personal data. 
        This Privacy Policy explains how we collect, use, and safeguard your information.
      </p>

      <h2>1. Information We Collect</h2>
      <ul>
        <li>Personal details like name, phone number, and email.</li>
        <li>Delivery address for processing your orders.</li>
        <li>Payment information for completing transactions.</li>
        <li>Order history and preferences for better recommendations.</li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <p>
        Your data is used to:
      </p>
      <ul>
        <li>Process and deliver your orders efficiently.</li>
        <li>Improve our menu and services based on your preferences.</li>
        <li>Communicate important updates and offers.</li>
      </ul>

      <h2>3. Data Protection</h2>
      <p>
        We implement strict security measures to prevent unauthorized access, alteration, or disclosure of your data.
      </p>

      <h2>4. Sharing Your Information</h2>
      <p>
        We never sell your personal data. We may share it only with trusted delivery and payment partners necessary for fulfilling your order.
      </p>

      <h2>5. Cookies</h2>
      <p>
        Our website uses cookies to enhance your experience. You can disable cookies in your browser settings.
      </p>

      <h2>6. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy periodically. Please review it regularly for any changes.
      </p>

      <p>
        If you have any questions about our Privacy Policy, contact us at: 
        <strong> contact@tomato.com</strong>
      </p>
    </div>
  );
};

export default PrivacyPolicy;
