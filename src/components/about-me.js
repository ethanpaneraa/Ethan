import React from "react";
import "../styles/about-me.css";
import PopInSection from "./PopInSection"; 

class AboutMe extends React.Component {
    constructor() {
    super();
    this.state = {
        expanded: true,
        activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this); 
    }
    handleSelect(eventKey) {
        this.setState({
            activeKey: eventKey
        })
    }

    render () {
        
        const myTechStack = [
            "Javascript ES6+",
            "Python",
            "React.JS", 
            "Racket",
            "Node.JS",
            "HTML & CSS"
        ];

        const technologies = myTechStack.map(stack => <li>{stack}</li>); 

        const moreDetails = (
            <p>I am currently a second-year at
                <a href="https://www.northwestern.edu/about/" target={"_blank"}>{" "}
                 Northwestern University
                </a>
                {" "}
                where I am pursuing my Bachelors of Arts and Masters of Science in 
                <b> Computer Science</b>{". "}
                After finishing my studies, I hope to work full-time as a <b> Software Engineer </b>
                and in the future, earn my Ph.D in Computer Science, further advancing the field of <b> Human-Computer Interaction</b>
            </p>
        );


        const all_desc_items = [moreDetails];   
       
        return (
            <div id="about">
              <PopInSection>
                <div className="section-header ">
                  <span className="section-title">{"</about-me>"}</span>
                </div>
                <div className="about-content">
                  <div className="about-description">
                    {[moreDetails]}
                    {"Here are some technologies I have been working with:"}
                    <ul className="tech-stack">
                      {technologies.map(function (tech_item, i) {
                        return (
                          <PopInSection delay={`${i + 1}00ms`}>
                            {tech_item}
                          </PopInSection>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="about-image">
                    <img src={process.env.PUBLIC_URL + "/assets/yo.jpg"} />
                  </div>
                </div>
              </PopInSection>
            </div>
          );
    }

}

export default AboutMe; 