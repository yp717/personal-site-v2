import React from 'react';

import WebDevelopment from '../WebDevelopment';
import TechnicalSkills from '../TechnicalSkills';

const SkillsSection = () => {
    return (
        <>
            <div className="container padding-t-b-2">
            <h2 className="is-background-blue-text pad-5-lr margin-5-b">My Toolbox <span role="img" aria-label="tools">🛠</span></h2>
                <div className="row pad-5-lr">
                    <TechnicalSkills />
                    <WebDevelopment />
                </div>
            </div>
        </>
    );
};

export default SkillsSection;