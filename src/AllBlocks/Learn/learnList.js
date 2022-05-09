import React from "react";
import './learn.css'

import laptopImg from "../../imgs/laptop.png";
import joeyImg from "../../imgs/joey.png";
import laptop2Img from "../../imgs/social.png";
import joey2Img from "../../imgs/araya2.png";
import codeImg from "../../imgs/code.png";
import joey3Img from "../../imgs/ellisa.png";
import androidImg from "../../imgs/android.png";
import wendyImg from "../../imgs/wendy.png";

let laptopStyle = {
    with: "252",
    height: "169",
    objectFit: "cover"
}

let joeyImgStyle = {
    with: "40",
    height: "40",
    objectFit: "cover"
}

function LearnItem() {
    return (
        <ul className="learn-list row middle between">
            <li className="learn-item">
                <img className="img-kom" src={laptopImg} style = {laptopStyle} />
                <span className="media-learn">12 vedios</span>
                <span className="learn-span">Technology</span>
                <h3 className="item-title">Digital Marketing Strategy</h3>
                <p className="item-text">This course aims to give you deeper understanding of core processes ...</p>
                <div className="item-inner row middle">
                    <img src={joeyImg} style = {joeyImgStyle} />
                    <div className="joey-in">
                        <h4 className="joy-title">Joey Piere</h4>
                        <p className="joy-jobs">Mentor</p>
                    </div>
                </div>
                <div className="btn-content">
                    <button className="learn-btn">Access Class</button>
                </div>
            </li>
            <li className="learn-item">
                <img className="img-kom" src={laptop2Img} style = {laptopStyle} />
                <span className="media-learn">7 vedios</span>
                <span className="learn-span">Design</span>
                <h3 className="item-title">Figma Fundamental</h3>
                <p className="item-text">These lessons and exercises will help you start designing with Figma</p>
                <div className="item-inner row middle">
                    <img src={joey2Img} style = {joeyImgStyle} />
                    <div className="joey-in">
                        <h4 className="joy-title">Araya Sheila</h4>
                        <p className="joy-jobs">Mentor</p>
                    </div>
                </div>
                <div className="btn-content">
                    <button className="learn-btn">Access Class</button>
                </div>
            </li>
            <li className="learn-item">
                <img className="img-kom" src={codeImg} style = {laptopStyle} />
                <span className="media-learn">10 vedios</span>
                <span className="learn-span">Coding</span>
                <h3 className="item-title">HTML Fundamental</h3>
                <p className="item-text">Well organized and easy to make you understand tutorials with lots of ...</p>
                <div className="item-inner row middle">
                    <img src={joey3Img} style = {joeyImgStyle} />
                    <div className="joey-in">
                        <h4 className="joy-title">Ellisa Ruth</h4>
                        <p className="joy-jobs">Mentor</p>
                    </div>
                </div>
                <div className="btn-content">
                    <button className="learn-btn">Access Class</button>
                </div>
            </li>
            <li className="learn-item">
                <img className="img-kom" src={androidImg} style = {laptopStyle} />
                <span className="media-learn">16 vedios</span>
                <span className="learn-span">Coding</span>
                <h3 className="item-title">Android App Development</h3>
                <p className="item-text">Take your Android coding skills to the next level, advanced Android app</p>
                <div className="item-inner row middle">
                    <img src={wendyImg} style = {joeyImgStyle} />
                    <div className="joey-in">
                        <h4 className="joy-title">Wendy Troye</h4>
                        <p className="joy-jobs">Mentor</p>
                    </div>
                </div>
                <div className="btn-content">
                    <button className="learn-btn">Access Class</button>
                </div>
            </li>
        </ul>
    )
}

export default LearnItem;