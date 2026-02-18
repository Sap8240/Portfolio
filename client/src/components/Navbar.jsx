import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className="navbar cylindrical-navbar">
            <div className="nav-container">
                <div className="logo">Saptarshi Kayal</div>
                <div
                    className="menu-toggle"
                    id="menu-toggle"
                    aria-label="Open navigation"
                    onClick={toggleMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={`nav-links ${isOpen ? 'open' : ''}`} id="nav-links">
                    <li><a href="#home" onClick={closeMenu}>Home</a></li>
                    <li><a href="#about" onClick={closeMenu}>About</a></li>
                    <li><a href="#services" onClick={closeMenu}>Services</a></li>
                    <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
                    <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
