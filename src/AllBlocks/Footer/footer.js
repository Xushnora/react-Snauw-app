import React from "react";
import "./footer.css"

import logoFooter from "../../imgs/logo-sinauw.svg"

function Footer() {
    return (
        <footer id="footer">
            <div class="container">
                <div class="row">
                    <div class="footer-block">
                        <a class="link-logo" href="#">
                            <img src={logoFooter} alt="logo" style={{width: "117", height: "56"}} />
                        </a>
                        <div class="texts">
                            <p class="footer-text">Any feedback or questions?
                            </p>
                            <p class="footer-text after">Contact us on our social media</p>
                        </div>
                        <ul class="social-list row middle">
                            <li class="social-item list-sty">
                                <a href="#" target="_blank">
                                    <i class='bx bxl-facebook'></i>
                                </a>
                            </li>
                            <li class="social-item list-sty">
                                <a href="#" target="_blank">
                                    <i class='bx bxl-twitter' ></i>
                                </a>
                            </li>
                            <li class="social-item list-sty">
                                <a href="#" target="_blank">
                                    <i class='bx bxl-instagram'></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <ul class="footer-list row between"> 
                        <li class="footer-item list-sty">
                            <h3 class="footer-title">Menu</h3>
                            <ul class="in-list">
                                <li class="in-item list-sty">
                                    <a class="fo-item-link text-none" href="#">Revisions</a>
                                </li>
                                <li class="in-item list-sty">
                                    <a class="fo-item-link text-none" href="#">Sheets</a>
                                </li>
                                <li class="in-item list-sty">
                                    <a class="fo-item-link text-none" href="#">Quiz</a>
                                </li>
                            </ul>
                        </li>
                        <li class="footer-item list-sty">
                            <h3 class="footer-title">Services</h3>
                            <ul class="in-list">
                                <li class="in-item list-sty">
                                    <a class="fo-item-link text-none" href="#">About us</a>
                                </li>
                                <li class="in-item list-sty">
                                    <a class="fo-item-link text-none" href="#">Partners</a>
                                </li>
                                <li class="in-item list-sty">
                                    <a class="fo-item-link text-none" href="#">Contact us</a>
                                </li>
                                <li class="in-item list-sty">
                                    <a class="fo-item-link text-none" href="#">Careers</a>
                                </li>
                            </ul>
                        </li>
                        <li class="footer-item list-sty">
                            <h3 class="footer-title">Helpful link</h3>
                            <ul class="in-list">
                                <li class="in-item list-sty">
                                    <a class="fo-item-link text-none" href="#">Conditions</a>
                                </li>
                                <li class="in-item list-sty">
                                    <a class="fo-item-link text-none" href="#">Solutions</a>
                                </li>
                            </ul>
                        </li>
                        <li class="footer-item list-sty">
                            <h3 class="footer-title">Apps Download</h3>
                            <ul class="in-list">
                                <li class="in-item list-sty">
                                    <a class="fo-item-link text-none" href="#">Google Play</a>
                                </li>
                                <li class="in-item list-sty">
                                    <a class="fo-item-link text-none" href="#">Solutions</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="finally-link-div">
                    <a class="finally-link" href="#">Copyright © 2021 Sinauw. All Rights Reserved.</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;