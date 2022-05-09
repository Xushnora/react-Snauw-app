import React from "react";

import "./hero.css"

import heroImg from "../../imgs/student-girl.png";
import lampImg from "../../imgs/zmdi_lamp.svg";
import bookImg from "../../imgs/emojione-monotone_closed-book.svg";
import studentsImg from "../../imgs/students.svg";

let suggestions = ["CSS Fundamental", "3D Design Illustration", "UI UX Design", "Website Development", "Logo Design", "Icon Design"];

let styleHeroImg = {
    width: "100",
    height: "100",
    objectFit: "cover"
}
let styleLampImg = {
    width: "60",
    height: "57",
    objectFit: "cover"
}
let styleBookImg = {
    width: "60",
    height: "60",
    objectFit: "cover"
}
let styleStudentsImg = {
    width: "363",
    height: "92",
    objectFit: "cover"
}

function Hero () {
    return (
        <section id="hero-section">
            <div className="container">
            <div className="hero-block">
                    <div className="picsums col-6">
                        <img className="imgs" src={heroImg} style = {styleHeroImg} />
                        <img className="lamp" src={lampImg} style = {styleLampImg} />
                        <img className="book" src={bookImg} style = {styleBookImg} />
                        <img className="students" src={studentsImg} style = {styleStudentsImg} />
                    </div>
                    <div className="title-block col-6">
                        <h1 className="hero-title">Grow Your Skills To Advance Your Career Path.</h1>
                        <p className="hero-text">We have something big for you who want to level up!</p>
                    </div>
                    <div className="input-block row between middle">
                        <input className="inputs" type="text" placeholder="What do you want to learn..." />
                        <i className='bx bx-search'></i>
                    </div>
                    <div className="suggestions">
                        <h3 className="sug-title">Suggestions</h3>
                        <div className="sugg-list">
                            {suggestions.map((suggstItem, idx) => {
                                return <span className="sugg-item" key={idx}>{suggstItem}</span>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Hero;