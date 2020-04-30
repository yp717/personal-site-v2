import React from 'react';

import WebDevelopment from '../WebDevelopment';
import TechnicalSkills from '../TechnicalSkills';

const SkillsSection = () => {
    return (
        <>
            <div className="container" style={{paddingBottom: '5%', paddingTop: '5%'}}>
                <h2 className="is-background-blue-text section-heading">My Toolbox 🛠</h2>
                <TechnicalSkills />
                <WebDevelopment />
            </div>
        </>
    );
};

export default SkillsSection;