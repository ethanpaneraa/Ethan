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

        
            "Recipe Finder API": {
            desc: "Uses the Edamam Recipe API to allow users to query and filter for recipes as well as their respective cusisine, calorie amount, and ingredients",
            technology:"React.JS, HTML & CSS",
            link: "https://github.com/ethanpaneraa/recipe-finder-api/settings/pages",
            open: "https://ethanpaneraa.github.io/recipe-finder-api/"
         },

         "Trip Planner API": {
            desc:
                "Trip planning programming interface that provides routing and searching searches using various data structures (linked-list, hash tables, binary heaps) and algorithms (Dijkstra's algorithm, heap sort) to calculate best optimal routes given a specified query and map.",
            technology: "DSSL2 (Racket)",
            link: "",
            open: ""
        }, 

            "Terrenos": {
            desc: 
                "A 2D hybird between popular games Minecraft and Terria mixed with RPG game elements. Built with Antonio Rocha and Arturo Fonseca",
            technology: "C#, Unity Game Engine",
            link: "https://github.com/ethanpaneraa/COMP-SCI-376-Final-Project-Apollo",
            open: ""

        }, 
            "Unity Flight Simulator": {
                desc: "Realistic Unity flight simulator, playable with keyboard/controllers",
                technology: "C#, Unity Game Engine",
                link:"https://github.com/ethanpaneraa/Unity-Flight-Sim",
                open:""
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