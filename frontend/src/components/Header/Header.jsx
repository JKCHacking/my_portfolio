import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    const [activeLink, setActiveLink] = useState("/");

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <header className="header">
        <div className="brand">
            <h1>Joshnee</h1>
        </div>
        <nav className="navigation">
            <ul className="nav-list">
            <li>
                <Link
                to="/"
                className={`nav-link ${activeLink === "/" ? "underline" : ""}`}
                onClick={() => handleLinkClick("/")}
                >
                    Home
                </Link>
            </li>
            <li>
                <Link
                to="/skills"
                className={`nav-link ${
                    activeLink === "/skills" ? "underline" : ""
                }`}
                onClick={() => handleLinkClick("/skills")}
                >
                    Skills
                </Link>
            </li>
            <li>
                <Link
                to="/projects"
                className={`nav-link ${
                    activeLink === "/projects" ? "underline" : ""
                }`}
                onClick={() => handleLinkClick("/projects")}
                >
                    Projects
                </Link>
            </li>
            <li>
                <Link
                to="/about"
                className={`nav-link ${
                    activeLink === "/about" ? "underline" : ""
                }`}
                onClick={() => handleLinkClick("/about")}
                >
                    About
                </Link>
            </li>
            <li>
                <Link
                to="/contacts"
                className={`nav-link ${
                    activeLink === "/contacts" ? "underline" : ""
                }`}
                onClick={() => handleLinkClick("/contacts")}
                >
                    Contacts
                </Link>
            </li>
            </ul>
        </nav>
        </header>
    );
};

export default Header;
