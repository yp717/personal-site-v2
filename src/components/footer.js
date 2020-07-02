import React from 'react';
import SocialLinks from '../components/socialLinks';

const Footer = () => (
    <footer className="is-white-bg">
        <div style={{float: 'left', marginLeft: '5%'}}>
            <p className="footer-text is-background-blue-text text-align-left">
                © Yannis Panagis 2020
            </p>
        </div>                       
        <div style={{float: 'right', marginRight: '5%', height: '80px', display: 'flex', alignItems: 'center'}}>
            <SocialLinks/>
        </div>
    </footer>
);

export default Footer;