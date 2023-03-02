import React from "react";
import './Header.css'


const Header = () => {

    return (
        <div className="header-banner">
            <p className="header-title">The Tavern</p>
            <div className="header-button-group">
                <button className="header-button">HOME</button>
                <button className="header-button">DRINKS</button>
                <button className="header-button">ABOUT</button>
                <button className="header-button">ACCOUNT</button>
            </div>
        </div>
    )
};

export default Header;