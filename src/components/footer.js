import React from 'react';

const Footer = () => (
    <footer id="footer" className="is-footer-blue-bg">
        <p className="footer-text">
            Made with <span role="img" aria-label="love">❤️</span> by Yannis Panagis 
            © {new Date().getFullYear()}
        </p>
    </footer>
);

export default Footer;