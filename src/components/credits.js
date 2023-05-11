import React from "react";
import "../styles/credits.css";
import PopInSection from "./PopInSection";

class finalCredits extends React.Component {
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
        });
    }

    render() {
        return (
            <PopInSection>
                <div id="creds">
                    <div className="endCreds">
                        <div>Built and designed by Ethan Pineda.</div>
                        <div>Hosted on GitHub Pages</div>
                        <div>All rights reserved</div>
                        <div>Last Updated: May 11th 2023</div>
                    </div>
                </div>
            </PopInSection>
        );
    }
}

export default finalCredits;