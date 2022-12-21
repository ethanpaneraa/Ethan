import React from "react";
import PopInSection from "./PopInSection";
import Typist from "react-typist";
import "react-typist/dist/Typist.css"; 
import "../styles/introduction.css";


class Introduction extends React.Component {
    constructor() {
        super()
        this.state = {
            expand: true, 
            activeKey: "1", 
            visible: true
        };
        this.handleSelect = this.handleSelect.bind(this); 
    }
    handleSelect(eventKey) {
        this.setState({
            activeKey: eventKey
        })
    }
    render() {
        return (
            <div id="introduction">
            <Typist avgTypingDelay={140}>
                <span className="intro-title">
                    {"hi, i'm "}
                    <span className="myName">{"ethan"}</span>
                    {""}
                </span>
            </Typist>
            <PopInSection>
                <div className="introduction-sub">i make things sometimes</div>
                <div className="about-me">
                    I'm a first-generation low-income second-year Computer Science student at 
                    Northwestern University and an aspiring Software Engineer. 
                    My current interest and focus is in full-stack development, artificial intelligence, 
                    human-computer interaction, and everything in between. 
                    Minus the jargon, I am driven by the idea of empowering folks with high-quality and accessible software and user experiences. My goal is to create technology that can empower entire communities.

                </div>
            </PopInSection>
            </div>
        )
    }

}

export default Introduction; 