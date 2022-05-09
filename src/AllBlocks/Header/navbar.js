import React from "react";

import "./navbar.css"
import logo from "../../imgs/logo-sinauw.svg"

let style = {
    width: "82",
    height: "40",
    objectFit: "cover"
}

let navArr = ["Home", "Courses", "Webinar", "Pricing"];
let languageArr = ["Uzb", "Eng", "Ru"];

function Header () {
    return (
        <header>
        <div className = "container">
            <div className = "site-header row middle">
                <a className = "logo" href="#">
                    <img src={logo} style = {style}/>
                </a>
                <nav className = "site-nav grow">
                    <ul className = "nav-list row middle">
                       { navArr.map((navItem, i) => {
                               return (
                                    <li className="nav-item"  key={i}>
                                        <a className="nav-link" href="#">{navItem}</a>
                                    </li>
                                )
                           })
                       }
                    </ul>
                </nav>
                <div className = "selects row middle">
                    <select className = "language">
                        {languageArr.map((langItem, langIndex) => {
                            return <option key={langIndex}>{langItem}</option>
                        })}
                    </select>
                    <i className = 'bx bx-globe'></i>
                    <button className = "login-btn">Login</button>
                </div>
            </div>
        </div>
    </header>
    )
}

export default Header
