import React from 'react';
import './Pricing.css';

const Pricing = () => {
  return (
    <div className="pricing-container">
      <h5 className="section-heading">OUR PRICING</h5>
      <h1 className="main-heading">
        Absolute <span className="highlight">transparency</span> in our pricing;<br /> we stick to our word!
      </h1>
      <p className="sub-heading">
        Our default plan covers all your business needs for starting off, and Start and Grow covers all the services needed for growth.
      </p>
      
      <div className="pricing-cards">
        {/* Free Plan */}
        <div className="pricing-card free-plan">
          <div className="plan-header">
            <span className="plan-tag">Default plan</span>
            <h2 className="plan-price">Free</h2>
          </div>
          <h3 className="plan-title">Business start</h3>
          <p className="plan-description">
            This plan gives new businesses all the features required to start.
          </p>
          <ul className="plan-features">
            <li>Incorporate your company seamlessly</li>
            <li>Pay only government fees</li>
            <li>Access basic One View features</li>
            <li>Ideal for startups and small businesses</li>
          </ul>
        </div>

        {/* Managed Plan */}
        <div className="pricing-card managed-plan">
          <div className="plan-header">
            <span className="plan-tag managed">Managed plan</span>
            <h2 className="plan-price">AED 5000<span className="plan-duration">/year</span></h2>
          </div>
          <h3 className="plan-title">Managed plan</h3>
          <p className="plan-description">
            This plan helps your business grow with all the right amenities.
          </p>
          <ul className="plan-features">
            <li>Full access to One View platform</li>
            <li>Comprehensive regulatory and compliance management</li>
            <li>Dedicated support and assistance</li>
            <li>Automatic updates on regulations and compliance requirements</li>
            <li>Best for established businesses seeking hassle-free compliance management</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
