import React from "react";
import './Header.css'


const Header = () => {

    return (
        <div className="header-banner">
            <p className="header-title">Header!</p>
            <div className="header-button-group">
                <button className="header-button">Click1</button>
                <button className="header-button">Click2</button>
                <button className="header-button">Click3</button>
                <button className="header-button">Click4</button>
            </div>
        </div>
    )
};

export default Header;