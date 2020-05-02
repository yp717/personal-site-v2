import React from 'react';

import WebDevelopment from '../WebDevelopment';
import TechnicalSkills from '../TechnicalSkills';

const SkillsSection = () => {
    return (
        <>
            <div className="container" style={{paddingBottom: '2%', paddingTop: '2%'}}>
                <h2 className="is-background-blue-text section-heading-margin">My Toolbox 🛠</h2>
                <TechnicalSkills />
                <WebDevelopment />
            </div>
        </>
    );
};

export default SkillsSection;