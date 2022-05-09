import React from "react";
import "./course.css"

import starImg from "../../imgs/star (2).svg";
import keyImg from "../../imgs/key 1.svg";
import crownImg from "../../imgs/crown.svg";

function Course() {
    return (
        <section id="course"> 
            <div className="container">
                <div className="course-portion">
                    <div className="course-heading">
                        <h2 className="course-title">Course Pricing</h2>
                        <p className="course-text">Choose pricing that suits to your need.</p>
                    </div>
                    <ul className="course-list row middle between">
                        <li className="course-item">
                            <div className="stars-block row middle">
                                <img className="img-stars" src={starImg} style = {{width: "56", height: "56"}} />
                                <div className="stars-in">
                                    <h4 className="stars-title">Free</h4>
                                    <span className="money">$</span><span className="number">0</span><span className="month">/month</span>
                                </div>
                            </div>
                            <ul className="inner-list">
                                <li className="inner-item">Free e-book for every class</li>
                                <li className="inner-item">Materials update every day</li>
                                <li className="inner-item">Free download material videos</li>
                                <li className="inner-item">Unlock 5 material videos</li>
                            </ul>
                            <a className="inner-btn" href="#">Your Current Package</a>
                        </li>
                        <li className="course-item">
                            <div className="stars-block row middle">
                                <img className="img-key" src={keyImg}style = {{width: "56", height: "56"}} />
                                <div className="stars-in">
                                    <h4 className="stars-title">Express</h4>
                                    <span className="money">$</span><span className="number">75</span><span className="month">/month</span>
                                </div>
                            </div>
                            <ul className="inner-list">
                                <li className="inner-item">Free e-book for every class</li>
                                <li className="inner-item">Materials update every day</li>
                                <li className="inner-item">Free download material videos</li>
                                <li className="inner-item">Unlock 5 material videos</li>
                            </ul>
                            <a className="inner-btn" href="#">Your Current Package</a>
                        </li>
                        <li className="course-item">
                            <div className="stars-block row middle">
                                <img className="img-crown" src={crownImg} style = {{width: "56", height: "56"}} />
                                <div className="stars-in">
                                    <h4 className="stars-title">Premium</h4>
                                    <span className="money">$</span><span className="number">115</span><span className="month">/month</span>
                                </div>
                            </div>
                            <ul className="inner-list">
                                <li className="inner-item">Free e-book for every class</li>
                                <li className="inner-item">Materials update every day</li>
                                <li className="inner-item">Free download material videos</li>
                                <li className="inner-item">Unlock 5 material videos</li>
                            </ul>
                            <a className="inner-btn" href="#">Your Current Package</a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Course;