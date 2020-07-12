import React from 'react';
import { Emojione } from "react-emoji-render"

import Skills from '../../data/skills.json';

const SkillsSection = () => {
    return (
        <>
            {/* Import a list of things from a json array here, each with their respective links */}
            <div className="container padding-t-b-2">
                <h2 className="is-background-blue-text pad-5-lr margin-5-b  margin-5-t">My Toolbox <Emojione text="🛠" /></h2>
                <div className="row pad-5-lr">
                    {
                        Skills.map((skill) => 
                            (
                                <a href={skill.link} className="skill-link">{skill.name}</a>
                            )
                        )
                    }
                </div>
            </div>
        </>
    );
};

export default SkillsSection;