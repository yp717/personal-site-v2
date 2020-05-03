import React from 'react';

import Cplusplus from '../images/icons/skillIcons/technicalSkills/c++.svg';
import Github from '../images/icons/skillIcons/technicalSkills/github.svg';
import Invision from '../images/icons/skillIcons/technicalSkills/invision.svg';
import Java from '../images/icons/skillIcons/technicalSkills/java.svg';
import R from '../images/icons/skillIcons/technicalSkills/r.svg';
import Sketch from '../images/icons/skillIcons/technicalSkills/sketch.svg';

const SoftwarePackageSkills = () => {
    
    const TechncialSKills = [
        [Cplusplus, "C++"],
        [Java, "Java"],
        [R, "R"],
        [Github, "Github"],
        [Sketch, "Sketch"],
        [Invision, "Invision"]
    ]
    return (
        <>
            <div className="content-card is-supernova-yellow-border">
                <h2 className="is-background-blue-text">Software and App Skills</h2>
                <table>
                    <tbody>
                        {TechncialSKills.map((skill) =>
                            (
                                <>
                                <tr>
                                    <td className="padding-0 margin-0">
                                        <img src={skill[0]} alt="logo" className="skill-icon-height"/>
                                    </td>                       
                                    <td>
                                        <p className="is-background-blue-text margin-0 padding-0">{skill[1]}</p>
                                    </td>
                                </tr>
                                </>
                            )
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default SoftwarePackageSkills;