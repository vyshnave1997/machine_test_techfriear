import React, { useState } from 'react';
import './Hero.css';

const Hero = () => {
    const [isNewCompany, setIsNewCompany] = useState(true);

    return (
        <section className="hero-section">
            <div className="hero-left">
                <h1>Build your business here and now.</h1>
                <p>We help you start, grow, and build your dream business in the UAE. <br />Just a few steps, and you'll be right on track!</p>
                <div className="input-container">
                    <input type="text" placeholder="Enter your company name" />
                    <button className="get-started-btn">Get started</button>
                </div>
                <div className="toggle-container">
                    <span className={isNewCompany ? 'active' : ''}>New company</span>
                    <label className="switch">
                        <input
                            type="checkbox"
                            checked={isNewCompany}
                            onChange={() => setIsNewCompany(!isNewCompany)}
                        />
                        <span className="slider"></span>
                    </label>
                    <span className={!isNewCompany ? 'active' : ''}>Existing company</span>
                </div>
            </div>
            
            <div className="hero-right">
                <div className="compliance-section">
                    <h3>Compliance</h3>
                    <ul className="compliance-list">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                       
                    </ul>
                </div>

                <div className="progress-bar-container">
                    <div className='progress-one'><div className="progress-one"></div></div>
                    <div className="progress-text">89% Completed</div>
                    <div className="progress-bar">
                        <div className="progress"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
