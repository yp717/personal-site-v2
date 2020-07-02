import React from 'react';

// import WebDevelopment from '../WebDevelopment';
// import TechnicalSkills from '../TechnicalSkills';

import Skills from '../../data/skills.json';

// import Profile from './components/profile';

const SkillsSection = () => {
    return (
        <>
            {/* Import a list of things from a json array here, each with their respective links */}
            <div className="container padding-t-b-2">
                <h2 className="is-background-blue-text pad-5-lr margin-5-b  margin-5-t">My Toolbox <span role="img" aria-label="tools">🛠</span></h2>
                <div className="row pad-5-lr">
                    {/* <div className="col-xs-12 content-card pad-5-l is-supernova-yellow-bg"> */}
                        {
                            Skills.map((skill) => 
                                (
                                    // <div class="tooltip">
                                        <a href={skill.link} className="skill-link">{skill.name}</a>
                                        // <span className="tooltiptext">{skill.description}</span>
                                    // </div>
                                )
                            )
                        }
                    {/* </div> */}
                </div>
            </div>
        </>
    );
};

export default SkillsSection;