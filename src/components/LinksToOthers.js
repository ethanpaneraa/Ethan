import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";

class OutsideLinks extends React.Component {
    constructor() {
        super();
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
            <span className="outside-links">
                <a className="github-logo" href={this.props.mygithublink}>
                    <GitHubIcon style={{fontSize: 20, color: "var(--light-grey)"}}></GitHubIcon>
                </a>
                {this.props.clickLink && (
                    <a className="web-logo" href={this.props.clickLink}>
                        <OpenInBrowserIcon style={{fontSize: 25, color: "var(--light-grey"}}></OpenInBrowserIcon>
                    </a>
                )}
            </span>
        );
    }

}

export default OutsideLinks; 