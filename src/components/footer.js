import React from 'react';

const Footer = () => (
    <footer className="footer is-background-blue-bg">
        <p className="footer-text is-white-text">
            Made with <span role="img" aria-label="love">❤️</span> by Yannis Panagis 
            © {new Date().getFullYear()}
        </p>
    </footer>
);

export default Footer;