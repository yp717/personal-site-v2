import React from 'react';
import SocialLinks from "../../components/socialLinks";

const HeroSection = () => {
    return (
        <>
            <p className="greeting-text">
                Hi <span role="img" aria-label="wave">👋</span>, my name is
            </p>         
            <h1 className="is-background-blue-text">Yannis Panagis</h1>
            <h2 className="hero-tagline-text">Engineer. Designer. Developer. Student.</h2>
            <h3 className="hero-description-text">I'm currently a third year Electrical and Electronic</h3>
            <h3 className="hero-description-text">Engineering Student @ Imperial College London</h3>
            <div>
            <SocialLinks/>
            </div>
            {/* <div className="col-sm-12">
            <Button buttonText="Get in touch" />
            <Button buttonText="Resume" />
            </div> */}
        </>
    );
}

export default HeroSection;