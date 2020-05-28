import React from 'react';

import html5 from '../images/icons/skillIcons/web-dev/html-5-icon.svg';
import css3 from '../images/icons/skillIcons/web-dev/css-3-icon.svg';
import javascript from '../images/icons/skillIcons/web-dev/javascript-icon.svg';
import gatsby from '../images/icons/skillIcons/web-dev/gatsby-icon.svg';
import graphql from '../images/icons/skillIcons/web-dev/GraphQL-icon.svg';
import react from '../images/icons/skillIcons/web-dev/react-icon.svg';
import sass from '../images/icons/skillIcons/web-dev/sass-icon.svg';
import netlify from '../images/icons/skillIcons/web-dev/netlify-icon.svg';

const WebDevelopment = () => {

    const webskills = [
        [html5, "html5"],
        [css3, "css3"],
        [javascript, "javascript"],
        [gatsby, "gatsby"],
        [graphql, "graphql"],
        [react, "react"],
        [sass, "sass"],
        [netlify, "netlify"]
    ]

    return (
        <>
            <div className="col-xs-12 content-card pad-5-l is-supernova-yellow-border is-white-bg">
                <h2 className="is-background-blue-text">Web Development</h2>
                <table>
                    <tbody>
                        {webskills.map((skill) =>
                            (
                                <>
                                <tr>
                                    <td className="padding-0 margin-0">
                                        <img src={skill[0]} alt="logo" className="skill-icon-height"/>
                                    </td>                       
                                    <td>
                                        <p className="is-background-blue-text padding-0 margin-0">{skill[1]}</p>
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

export default WebDevelopment;