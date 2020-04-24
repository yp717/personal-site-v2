import React from 'react';

const Footer = () => (
    <div className="footer-style is-very-dark-grey-bg">
        <p className="footer-text is-white-text">
            Made with <span role="img" aria-label="love">❤️</span> by Yannis Panagis 
            © {new Date().getFullYear()}
        </p>
    </div>
);

export default Footer;