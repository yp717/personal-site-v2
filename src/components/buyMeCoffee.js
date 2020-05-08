import React from 'react';
    
const BuyMeCoffeeButton = () => (
    <a 
        className="bmc-button" 
        target="_blank" 
        rel="noopener noreferrer" // to overcome security vulnerability
        href="https://www.buymeacoffee.com/yannis"
    >
        <img src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg" alt="Buy me a coffee"/>
        <span>Buy me a coffee</span>
    </a>
);
    
export default BuyMeCoffeeButton;