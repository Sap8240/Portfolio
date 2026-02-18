import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    Saptarshi
                </div>
                <div className="footer-links">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#services">Services</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>
                <div className="footer-socials">
                    <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
                <div className="footer-copyright">
                    &copy; 2025 Saptarshi. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
