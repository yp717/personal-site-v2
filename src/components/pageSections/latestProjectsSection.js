import React from 'react';
import ProjectCard from '../cards/projectCard';

const HeroSection = () => {
    return (
        <>
            <div className="container__row">
                {/* Section heading */}
                <div className="col-sm-8 is-background-blue-text" style={{width: '50%'}}>
                  <h2>Latest Projects</h2>
                </div>               
            </div>
            <div className="container__row"> 
            </div>
        </>
    );
}

export default HeroSection;