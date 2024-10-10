import React from 'react';
import './AboutUs.css';
import topImage from '../../assets/image-one.png'

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <img src={topImage} alt="Top Image" className="top-image" />
      

      <h5 className="small-heading">START AND GROW</h5>
      <h1 className="main-heading">
        Start your <span className="highlight">business</span> from scratch.
      </h1>
      <p className="description">
        We start your business and take care of all the documents and regulatory procedures in order to make your business fully functional in the UAE in only 2-3 weeks.
      </p>
      <button className="cta-button">Start your business</button>
    </div>
  );
};

export default AboutUs;
