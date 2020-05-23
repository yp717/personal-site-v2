import React from 'react';
import useDarkMode from "use-dark-mode";

import SpotifyIcon from '../images/icons/Spotify.svg';
import SpotifyIconWhite from '../images/icons/Spotify_white.svg';
import GithubIcon from '../images/icons/Github.svg';
import GithubIconWhite from '../images/icons/Github_white.svg';
import LinkedInIcon from '../images/icons/LinkedIn.svg';
import LinkedInIconWhite from '../images/icons/LinkedIn_white.svg';
import MailIcon from '../images/icons/Mail.svg';
import MailIconWhite from '../images/icons/Mail_white.svg';

const githubLink = `https://github.com/yp717`;
const linkedinLink = `https://www.linkedin.com/in/yannis-panagis/`;
const spotifyLink = `https://open.spotify.com/artist/4tCn4Wkn4cf0CWLUFvQO58?si=XUyEXMPASyqdhksoCx587g`;
const mailLink = `mailto:yannis.panagis1998@gmail.com`

export default props => {
    const darkMode = useDarkMode(false) //defaults to false 
    return (
        <>
            <div className="text-align-center">
                <a href={githubLink} target="blank">
                    { 
                        darkMode.value ?
                        (
                            <img 
                                className="socialIcon" 
                                aria-label="github icon" 
                                alt="github icon"
                                src={GithubIconWhite}/>
                        ) :
                        (
                            <img 
                                className="socialIcon" 
                                aria-label="github" 
                                alt="github icon"
                                src={GithubIcon}/>
                        )
                    }
                </a>
                <a href={linkedinLink} target="blank">
                    {
                        darkMode.value ?
                        (
                            <img 
                                className="socialIcon" 
                                aria-label="linkedin" 
                                alt="linkedin icon"
                                src={LinkedInIconWhite}/>
                        ) :
                        (
                            <img 
                                className="socialIcon" 
                                aria-label="linkedin" 
                                alt="linkedin icon"
                                src={LinkedInIcon}/>
                        )
                    } 
                </a>
                <a href={spotifyLink} target="blank">
                    {
                        darkMode.value ? 
                        (
                            <img 
                                className="socialIcon" 
                                aria-label="spotify" 
                                alt="spotify icon"
                                src={SpotifyIconWhite}/>
                        ) :
                        (
                            <img 
                                className="socialIcon" 
                                aria-label="spotify" 
                                alt="spotify icon"
                                src={SpotifyIcon}/>
                        )
                    }
                </a>
                <a href={mailLink} target="blank">
                    {
                        darkMode.value ?
                        (
                            <img 
                                className="socialIcon" 
                                aria-label="mail" 
                                alt="mail icon"
                                src={MailIconWhite}/>
                        ) :
                        (
                            <img 
                                className="socialIcon" 
                                aria-label="mail" 
                                alt="mail icon"
                                src={MailIcon}/>
                        )
                    }
                </a>
            </div>    
        </>
    );
}
