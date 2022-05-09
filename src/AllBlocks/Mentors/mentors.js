import React from "react";
import "./mentors.css"

let mentorsObj = [
    {
        id: 1,
        title: "Get New Friends",
        deck: "You will meet new friends in some of classes that you take. Say hello to them and make friends, it will be so much warm friendship!"
    },
    {
        id: 2,
        title: "Expert and Fun Mentor",
        deck: "Learn with earnest and don't forget to get relax too. Learn and enjoy the materials or classes with our expert mentors."
    },
    {
        id: 3,
        title: "Flexible Access",
        deck: "You can access materials or classes easily by our website also mobile. Access it everywhere and everytime, no limit for you to learn!"
    },

]

function renderItem() {
    return (
        mentorsObj.forEach((mnItem, index) => {
            for(let i in mnItem) {
                console.log(mnItem[i]);
                <li className="mentors-item" key={mnItem[i].id}>
                     <h3 className="mentors-title">{mnItem[i].title}</h3>
                     <p className="mentors-text">{mnItem[i].deck}</p>
                </li>
            }
        })
    )
}

function Mentors () {
    return (
        <section className="mentors">
            <div className="container">
                <ul className="mentors-list row middle around">
                    <li className="mentors-item">
                        <h3 className="mentors-title">Get New Friends</h3>
                        <p className="mentors-text">You will meet new friends in some of classes that you take. Say hello to them and make friends, it will be so much warm friendship!</p>
                    </li>
                    <li className="mentors-item">
                        <h3 className="mentors-title">Expert and Fun Mentor</h3>
                        <p className="mentors-text">Learn with earnest and don't forget to get relax too. Learn and enjoy the materials or classes with our expert mentors.</p>
                    </li>
                    <li className="mentors-item">
                        <h3 className="mentors-title">Flexible Access</h3>
                        <p className="mentors-text">You can access materials or classes easily by our website also mobile. Access it everywhere and everytime, no limit for you to learn!</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Mentors;
