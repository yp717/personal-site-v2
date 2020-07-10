import React from 'react';

import SpotifyIcon from '../images/icons/social/spotify.svg';
import GithubIcon from '../images/icons/social/github.svg';
import LinkedInIcon from '../images/icons/social/linked-in.svg';
import MailIcon from '../images/icons/social/mail.svg';

const githubLink = `https://github.com/yp717`;
const linkedinLink = `https://www.linkedin.com/in/yannis-panagis/`;
const spotifyLink = `https://open.spotify.com/artist/4tCn4Wkn4cf0CWLUFvQO58?si=XUyEXMPASyqdhksoCx587g`;
const mailLink = `mailto:yannis.panagis1998@gmail.com`;

const SocialLinks = () => {
    return (
        <>
            <div className="text-align-center">
                <a href={githubLink} target="blank">    
                    <img 
                        className="socialIcon" 
                        aria-label="github" 
                        alt="github icon"
                        src={GithubIcon}
                    />
                </a>
                <a href={linkedinLink} target="blank">
                    <img 
                        className="socialIcon" 
                        aria-label="linkedin" 
                        alt="linkedin icon"
                        src={LinkedInIcon}
                    />
                </a>
                <a href={spotifyLink} target="blank">
                    <img 
                        className="socialIcon" 
                        aria-label="spotify" 
                        alt="spotify icon"
                        src={SpotifyIcon}
                    />
                </a>
                <a href={mailLink} target="blank">
                    <img 
                        className="socialIcon" 
                        aria-label="mail" 
                        alt="mail icon"
                        src={MailIcon}
                    />
                </a>
            </div>
        </>
    );
}

export default SocialLinks;