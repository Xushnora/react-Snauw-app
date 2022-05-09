import React from "react";
import "./aside.css"

import googleImg from "../../imgs/google-app.png"
import appStoryImg from "../../imgs/app-story-2.png"
import phoneImg from "../../imgs/Group 19.svg"

function Aside() {
    return (
        <section>
            <div class="container">
                <div class="apps-portion row middle around">
                    <div class="apps-desc">
                        <h2 class="apps-title">Get Our Apps, Now!</h2>
                        <p class="apps-text">Reach out our apps everywhere and everytime with Sinauw Mobile Application.</p>
                        <div class="row middle">
                            <img class="gg-ap" src={googleImg} style={{width: "164", height: "72"}} alt="google" />
                            <img src={appStoryImg} alt="app-story" style={{width: "147", height: "50"}} />
                        </div>
                    </div>
                    <div class="apps-img">
                        <img class="phone" src={phoneImg} alt="phone" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Aside;

