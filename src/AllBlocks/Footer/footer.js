import React from "react";
import "./footer.css"

import logoFooter from "../../imgs/logo-sinauw.svg"

function Footer() {
    return (
        <footer id="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-block">
                        <a className="link-logo" href="#">
                            <img src={logoFooter} alt="logo" style={{width: "117", height: "56"}} />
                        </a>
                        <div className="texts">
                            <p className="footer-text">Any feedback or questions?
                            </p>
                            <p className="footer-text after">Contact us on our social media</p>
                        </div>
                        <ul className="social-list row middle">
                            <li className="social-item list-sty">
                                <a href="#" target="_blank">
                                    <i className='bx bxl-facebook'></i>
                                </a>
                            </li>
                            <li className="social-item list-sty">
                                <a href="#" target="_blank">
                                    <i className='bx bxl-twitter' ></i>
                                </a>
                            </li>
                            <li className="social-item list-sty">
                                <a href="#" target="_blank">
                                    <i className='bx bxl-instagram'></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <ul className="footer-list row between"> 
                        <li className="footer-item list-sty">
                            <h3 className="footer-title">Menu</h3>
                            <ul className="in-list">
                                <li className="in-item list-sty">
                                    <a className="fo-item-link text-none" href="#">Revisions</a>
                                </li>
                                <li className="in-item list-sty">
                                    <a className="fo-item-link text-none" href="#">Sheets</a>
                                </li>
                                <li className="in-item list-sty">
                                    <a className="fo-item-link text-none" href="#">Quiz</a>
                                </li>
                            </ul>
                        </li>
                        <li className="footer-item list-sty">
                            <h3 className="footer-title">Services</h3>
                            <ul className="in-list">
                                <li className="in-item list-sty">
                                    <a className="fo-item-link text-none" href="#">About us</a>
                                </li>
                                <li className="in-item list-sty">
                                    <a className="fo-item-link text-none" href="#">Partners</a>
                                </li>
                                <li className="in-item list-sty">
                                    <a className="fo-item-link text-none" href="#">Contact us</a>
                                </li>
                                <li className="in-item list-sty">
                                    <a className="fo-item-link text-none" href="#">Careers</a>
                                </li>
                            </ul>
                        </li>
                        <li className="footer-item list-sty">
                            <h3 className="footer-title">Helpful link</h3>
                            <ul className="in-list">
                                <li className="in-item list-sty">
                                    <a className="fo-item-link text-none" href="#">Conditions</a>
                                </li>
                                <li className="in-item list-sty">
                                    <a className="fo-item-link text-none" href="#">Solutions</a>
                                </li>
                            </ul>
                        </li>
                        <li className="footer-item list-sty">
                            <h3 className="footer-title">Apps Download</h3>
                            <ul className="in-list">
                                <li className="in-item list-sty">
                                    <a className="fo-item-link text-none" href="#">Google Play</a>
                                </li>
                                <li className="in-item list-sty">
                                    <a className="fo-item-link text-none" href="#">Solutions</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="finally-link-div">
                    <a className="finally-link" href="#">Copyright © 2021 Sinauw. All Rights Reserved.</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;