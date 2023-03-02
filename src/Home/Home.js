import React from "react";
import "./Home.css";
import Manhattan from '../Images/Manhattan.png'

const Home = () => {

    return (
        <div className="home-body">
            <div className="home-container">
                <img src={Manhattan} alt="Manhattan" className="home-img"></img>
                <img src={Manhattan} alt="Manhattan" className="home-img"></img>
                <img src={Manhattan} alt="Manhattan" className="home-img"></img>
                <img src={Manhattan} alt="Manhattan" className="home-img"></img>
                <img src={Manhattan} alt="Manhattan" className="home-img"></img>
                <img src={Manhattan} alt="Manhattan" className="home-img"></img>
                <img src={Manhattan} alt="Manhattan" className="home-img"></img>
                <img src={Manhattan} alt="Manhattan" className="home-img"></img>
                <img src={Manhattan} alt="Manhattan" className="home-img"></img>
                <img src={Manhattan} alt="Manhattan" className="home-img"></img>
            </div>
        </div>
    )
};

export default Home;