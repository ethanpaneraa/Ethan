import React from "react";
import PopInSection from "./PopInSection";
import "../styles/softwareProjects.css"; 
import OutsideLinks from "./LinksToOthers";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";


class PersonalProjects extends React.Component {
    constructor() {
        super()
        this.state = {
            expanded: true, 
            activeKey: "1"
        };
        this.handleSelect = this.handleSelect.bind(this); 
    }
    handleSelect(eventKey) {
        this.setState({
            activeKey: eventKey
        });
    }

    render() {
        
        const allProjects = {
            
            "Chicago Furniture Bank Environmental Calculator": {
                desc: "Interactive web-based interactive calculator that shows you your environmental impact of donating used furniture.",
                technology: "Javascript, HTML & CSS",
                link: "https://github.com/ethanpaneraa/DISC_NU_CFB",
                open: "https://ethanpaneraa.github.io/DISC_NU_CFB/"
            }, 

            "Personal Porfolio": {
                desc: "My personal portfolio website. What you are seeing here!",
                technology: "React.JS, HTML & CSS",
                link:"https://github.com/ethanpaneraa/Ethan",
                open:"https://ethanpaneraa.github.io/Ethan/"
        },

            
            
            "Trip Planner API": {
            desc:
                "Trip planning programming interface that provides routing and searching searches using various data structures (linked-list, hash tables, binary heaps) and algorithms (Dijkstra's algorithm, heap sort) to calculate best optimal routes given a specified query and map.",
            technology: "DSSL2 (Racket)",
            link: "",
            open: ""
        }, 
            "Apollo": {
            desc: 
                "Single-Player 2D brick breaker where your objective is to destroy all the bricks on screen using your paddle.",
            technology: "C# (UNITY)",
            link: "https://github.com/ethanpaneraa/COMP-SCI-376-Final-Project-Apollo",
            open: ""

        }, 
            "Koanne Game Solver": {
                desc: "Terminal-based Koanne game solver that that allows you to play against an AI opponent or have two AIs compete against each other using minimax and alpha-beta pruning.",
                technology: "Python",
                link:"",
                open:""
        },
            "Space Invaders": {
                desc: "A single-player implementation of the famous game, space invaders",
                link: "",
                open: ""
        }
  
    };

    return (
        <div id="PersonalProjects">
            <div className="section-header">
                <span className="section-title">{"</personal-projects>"}</span>
            </div>
            <div className="project-container">
                <ul className="projects-layout">
                    {Object.keys(allProjects).map((key, i) => (
                        <PopInSection delay={`${i + 2}00ms`}>
                            <li className="project-card">
                                <div className="card-header">
                                    <div className="foler-icon">
                                    <FolderOpenRoundedIcon style={{fontSize: 35}}>
                                    </FolderOpenRoundedIcon>
                                    </div>
                                    <OutsideLinks 
                                        mygithublink={allProjects[key]["link"]}
                                        clickLink={allProjects[key]["open"]}>
                                    </OutsideLinks>
                                </div>
                                <div className="card-title">{key}</div>
                                <div className="card-desc">{allProjects[key]["desc"]}</div>
                                <div className="card-technology">{allProjects[key]["technology"]}</div>
                            </li>
                        </PopInSection>
                    ))}
                </ul>
            </div>
        </div>
    );

    }
}

export default PersonalProjects; 