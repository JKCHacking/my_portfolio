import React from "react";
import "./Header.css";

function Header() {
    return(
        <div className="header">
            <div className="my-name">Joshnee</div>
            <div className="right-buttons">
                <a href="/">Home</a>
                <a href="/About">About</a>
                <a href="/Projects">Projects</a>
                <a href="/Skills">Skills</a>
                <a href="/Contact">Contact</a>
            </div>
        </div>
    );
}

export default Header;