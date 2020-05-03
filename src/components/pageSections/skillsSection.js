import React from 'react';

import WebDevelopment from '../WebDevelopment';
import TechnicalSkills from '../TechnicalSkills';

const SkillsSection = () => {
    return (
        <>
            <div className="container padding-top-bottom-2">
                <h2 className="is-background-blue-text margin-left-right-5">My Toolbox <span role="img" aria-label="tools">🛠</span></h2>
                <TechnicalSkills />
                <WebDevelopment />
            </div>
        </>
    );
};

export default SkillsSection;