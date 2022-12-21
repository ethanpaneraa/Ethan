import React from "react";
import PopInSection from "./PopInSection";
import JobList from "./allMyWork";
import "../styles/profExperinces.css"; 

class ProfExperince extends React.Component {
    constructor() {
        super()
        this.state = {
            expanded: true,
            activeKey: "1"
        };
        this.handleSelect = this.handleSelect.bind(this)
    }
    handleSelect(eventKey) {
        this.setState({
            activeKey: eventKey
        });
    }

    render() {
        return (
            <div id="profExperience">
                <PopInSection>
                    <div className="section-header ">
                        <span className="section-title">{"</professional-experience>"}</span>
                    </div>
                    <JobList></JobList>
                </PopInSection>
            </div>
        );
    }
}

export default ProfExperince; 