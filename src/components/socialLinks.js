import React from 'react';
import useDarkMode from "use-dark-mode";
import { darkmagenta } from 'color-name';

const githubLink = `https://github.com/yp717`;
const linkedinLink = `https://www.linkedin.com/in/yannis-panagis/`;
const mediumLink = `https://medium.com/@yannis.panagis1998`;
const spotifyLink = `https://open.spotify.com/artist/4tCn4Wkn4cf0CWLUFvQO58?si=XUyEXMPASyqdhksoCx587g`;

export default props => {
    const darkMode = useDarkMode(false) //defaults to false 
    return (
        <>
        <div className="container">
            <div className="container__row">
                <div className="col-sm-2" style={{marginLeft: '0'}}>
                    <a href={githubLink} target="blank">
                        { 
                            darkMode.value ?
                            (
                                <div className="githubIcon-dark-mode" />
                            ) :
                            (
                                <div className="githubIcon" />
                            )
                        }
                    </a>
                </div>
                <div className="col-sm-2">
                    <a href={linkedinLink} target="blank">
                        {
                            darkMode.value ?
                            (
                                <div className="linkedinIcon-dark-mode"/>
                            ) :
                            (
                                <div className="linkedinIcon"/>
                            )
                        } 
                    </a>
                </div>
                <div className="col-sm-2"> 
                    <a href={mediumLink} target="blank">
                        {
                            darkMode.value ? 
                            (
                                <div className="mediumIcon-dark-mode"/>
                            ) :
                            (
                                <div className="mediumIcon"/>
                            )
                        }
                    </a>
                </div>
                <div className="col-sm-2">
                    <a href={spotifyLink} target="blank">
                        {
                            darkMode.value ?
                            (
                                <div className="spotifyIcon-dark-mode"/>
                            ) :
                            (
                                <div className="spotifyIcon"/>
                            )
                        }
                    </a>
                </div>
            </div>
        </div>
        </>
    );
}
