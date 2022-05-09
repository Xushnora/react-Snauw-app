import React from "react";
import LearnItem from "./learnList";
import './learn.css'


function Learn() {
    return (
        <section id="learn">
            <div className="container">
                <div className="learn-portion">
                    <div className="learn-heading">
                        <h2 className="learn-title">What Do You Want to Learn?</h2>
                        <p className="learn-text">Choose the right class as you need. Then enjoy studying.</p>
                    </div>
                    <LearnItem />
                    <div className="finally-btn">
                        <a className="main-btn" href="#">Show All Classes</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Learn;