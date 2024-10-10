import React from "react";
import "./Footer.css"; 

const Footer = () => {
  return (
    <footer className="footer">

      <div className="cta-section">
        <h2>Ready to get started? <br /> <span>Build your business now!</span></h2>
        <p>Incorporate your business in the UAE and build it with us.</p>
        <div className="cta-buttons">
          <button className="primary-btn">Start your business</button>
          <a href="#" className="secondary-link">Already incorporated?</a>
        </div>
      </div>

      
      <div className="footer-links">
        <div className="footer-column">
          <h3>One View</h3>
          <p>Subscribe to our newsletter and emails to stay updated</p>
          <div className="subscribe-section">
            <input type="email" placeholder="Enter your email" />
            <button className="subscribe-btn">Subscribe now</button>
          </div>
        </div>

        <div className="footer-column">
          <h3>Services</h3>
          <ul>
            <li><a href="#">Visa center</a></li>
            <li><a href="#">Financial resources</a></li>
            <li><a href="#">Mailbox</a></li>
            <li><a href="#">Legal compliance</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Resources</h3>
          <ul>
            <li><a href="#">Help</a></li>
            <li><a href="#">Starting a business 101</a></li>
            <li><a href="#">Business guide in the UAE</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact us</a></li>
          </ul>
        </div>
      </div>

    
      <div className="footer-bottom">
        <p>© 2023, UAE Start. All rights reserved.</p>
        <div className="legal-links">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
