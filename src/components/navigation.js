import React from "react";
import { Sidenav } from "rsuite";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/navigation.css";
import "react-typist/dist/Typist.css"; 
import PopInSection from "./PopInSection.js"; 
import { LinkSharp } from "@material-ui/icons";

const userMobile = window.innerWidth < 600; 

class navigation extends React.Component {
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

        const { expanded } = this.state; 

        const allLinks = [
            <a href="#introduction">{"</home>"}</a>,
            <a href="#about">{"</about>"}</a>,
            <a href="#profExperience">{"</experience>"}</a>,
            <a href="#PersonalProjects">{"</projects>"}</a>,
            <a href= {process.env.PUBLIC_URL + "/assets/Pineda_Ethan_Resume_2025.pdf"}>{"</resume>"}</a>
        ];


        return (
            <div id="navigation">
              {!userMobile && (
                <Sidenav
                  expanded={expanded}
                  defaultOpenKeys={["3", "4"]}
                  activeKey={this.state.activeKey}
                  onSelect={this.handleSelect}
                  appearance={"subtle"}
                >
                  <Sidenav.Body>
                    <div className="nav-links">
                      {allLinks.map((link, i) => (
                        <PopInSection delay={`${i + 1}00ms`}>
                          <div>{link}</div>
                        </PopInSection>
                      ))}
                    </div>
                  </Sidenav.Body>
                </Sidenav>
              )}
              <div className="nav-logos">
                <a href="mailto:ethanpineda2025@u.northwestern.edu">
                  <EmailRoundedIcon style={{ fontSize: 20 }}></EmailRoundedIcon>
                </a>
                <a href="https://github.com/ethanpaneraa">
                  <GitHubIcon style={{ fontSize: 19 }}></GitHubIcon>
                </a>
                <a href="https://www.linkedin.com/in/ethanpineda">
                  <LinkedInIcon style={{ fontSize: 21 }}></LinkedInIcon>
                </a>
              </div>
            </div>
          );                    
         }
}

export default navigation; 