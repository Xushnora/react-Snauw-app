import React from "react";
import './video.css'

import macLeftImg from "../../imgs/mac-left.png";
import macRightImg from "../../imgs/mac-left.png";

let macStyle = {
    with: "471",
    height: "270",
    objectFit: "cover"
}

function Videos() {
    return (
        <section id = "vedio">
            <div className="container">
                <div className="vedio-content">
                    <div className="vedio-heading">
                        <h2 className="vedio-title">Live Online Webinar</h2>
                        <p className="vedio-text">You can stream Webinar live on our apps. Stay update on our Webinar, it's Free!</p>
                    </div>
                    <div className="vedio-block row between">
                        <img src={macLeftImg} style = {macStyle} />
                        <iframe src="https://www.youtube.com/embed/4pcNRDx6KrE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" className="youtube-vd" allowFullScreen></iframe>
                        <img src={macRightImg} style = {macStyle} />
                    </div>
                    <div className="vedios-text row">
                        <p className="texts-vd">See more webinar videos<i className='bx bx-arrow-back bx-flip-horizontal' ></i></p>
                    </div>
                </div>
            </div>
    </section>
    )
}

export default Videos;