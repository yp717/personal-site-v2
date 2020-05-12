import React from 'react';
import SocialLinks from '../components/socialLinks';

const Footer = () => (
    <footer className="is-footer-blue-bg">
        <div style={{float: 'left', marginLeft: '5%'}}>
            <p className="footer-text text-align-left" style={{fontSize: '14px'}}>
                © Yannis Panagis 
            </p>
        </div>                       
        <div style={{float: 'right', marginRight: '5%', height: '80px', display: 'flex', alignItems: 'center'}}>
            <SocialLinks/>
        </div>
    </footer>
);

export default Footer;