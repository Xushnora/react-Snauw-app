import React from "react";
import "./aside.css"

import googleImg from "../../imgs/google-app.png"
import appStoryImg from "../../imgs/app-story-2.png"
import phoneImg from "../../imgs/Group 19.svg"

function Aside() {
    return (
        <section>
            <div className="container">
                <div className="apps-portion row middle around">
                    <div className="apps-desc">
                        <h2 className="apps-title">Get Our Apps, Now!</h2>
                        <p className="apps-text">Reach out our apps everywhere and everytime with Sinauw Mobile Application.</p>
                        <div className="row middle">
                            <img className="gg-ap" src={googleImg} style={{width: "164", height: "72"}} alt="google" />
                            <img src={appStoryImg} alt="app-story" style={{width: "147", height: "50"}} />
                        </div>
                    </div>
                    <div className="apps-img">
                        <img className="phone" src={phoneImg} alt="phone" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Aside;

