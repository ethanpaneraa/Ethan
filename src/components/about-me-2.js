import React from "react";
import "../styles/about-me-2.css";
import PopInSection from "./PopInSection";

class AboutMeTwo extends React.Component {
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
        const NorthwesternWork = (

            <p className="p-tag">
                At Northwestern, I am affiliated with the <a className="text-decoration" href="https://tiilt.northwestern.edu/" target={"_blank"}>{" "}Technological Innovations for Inclusive Learning and Teaching (tiilt) </a>
                research group where I work on implementing front-end features
                for the multimodal-learning analytics platform:<a className="text-decoration" href="https://tiilt.northwestern.edu/projects/blinc/index.html" target={"_blank"}>{" "}B.L.I.N.C </a> 
                and occasionally help with programming on the <a className="text-decoration" href="https://tiilt.northwestern.edu/projects/sportsanalytics/index.html" target={"_blank"}>{" "}Sports Sense</a> project. 
                
                I also am a <b className="text-decoration">undergradaute teaching assistant</b> for the following: 
                <ul>
                    <li><a className="text-decoration" href="https://www.mccormick.northwestern.edu/computer-science/academics/courses/descriptions/214.html" target={"_blank"}>COMP_SCI 214: Data Structures and Algorithms</a></li>
                    Summer 2022, Fall 2022, Winter 2023
                    <br></br>
                    Teaches the design, implementation, analysis, and proper application of abstract data types,
                    data structures, and their associated algorithms. Explores a wide variety of data structures both
                    conceptually and concretely via implementation.
                    Taught by <a href="https://www.mccormick.northwestern.edu/research-faculty/directory/profiles/st-amour-vincent.html">Vincent St-Amour</a>
                </ul>

                In the Fall 2022 Quarter, I was fortunate to have been awarded the Northwestern Computer Science department <a href="https://www.mccormick.northwestern.edu/computer-science/news-events/news/articles/2023/northwestern-cs-announces-fall-2022-outstanding-teaching-assistant-and-peer-mentors.html" target={""}><b className="text-decoration" href="">Outstanding Peer Mentor Award</b></a>{" "}
                in recognition of the dedication and quality I exhibited in my teaching and support towards students. 


            </p>
        ); 

        const OutSideWork = (
            <p className="p-tag"> 
                Outside of my academics, you can see me working with some amazing student organizations:
                <ul>
                    <li><a className="text-decoration" href="https://www.instagram.com/shpe_nu/" target="_blank"> Society of Hispanic Professional Engineers (SHPE)</a></li>
                    MentorSHPE Chair
                    <br></br>
                    As the MentorSHPE Chair for SHPE, I am responsible for coordinating and supervising our mentorship
                    program that enables first-generation low-income STEM/Engineering Majors at Northwestern to receive 
                    mentorship and guidance on navigating academics, professional goals, and overall personal development.
                    <li> <a className="text-decoration" href="https://www.instagram.com/nu.emergingcoders/" target={"_blank"}>Emerging Coders</a></li>
                    WebMaster
                    <br></br>
                    Seeing more folks that come from the same background in me in technology is important to me. At Emerging Coders,
                    we aim to accomplish that through networking events, panels, and informational sessions. My role in particular, 
                    enables me to lead bi-weekly LeetCode review sessions where I prepare and inform our members on preparing for
                    technical interviews
                    <li><a className="text-decoration" href="https://www.instagram.com/nu_alianza/" target={"_blank"}>Alianza</a></li>
                    Historian
                    <br></br>
                    At Alianza, we are tasked with uniting the Latine community and its allies at Northwestern through community and social events. As the historian, I am tasked with maintaining a solid archive of our impact for future generations of Wildcats to view.
                </ul>

                When I'm not working, you'll catch me exploring my hometown, Chicago, trying out new restaurants, playing video games, listening to Omar Apollo, and touring new museums and art exhibits.
            </p>
        );

        const final_desc_items = [NorthwesternWork, OutSideWork]; 

        return (
            <div id="aboutTwo">
                <PopInSection>
                    <div className="aboutTwo-desc">
                    {[NorthwesternWork]}
                    {[OutSideWork]}
                    </div>
                </PopInSection>
            </div>
        );
    }
}

export default AboutMeTwo; 