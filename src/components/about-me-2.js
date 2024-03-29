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
                    <li><a className="text-decoration" href="https://www.mccormick.northwestern.edu/computer-science/academics/courses/descriptions/330-1.html" target={"_blank"}>COMP_SCI 330: Human-Computer Interaction</a></li>
                    Summer 2023
                    <br></br>
                    <p>
                    Introduction to human-computer interaction and the design of systems that work for people and their organizations. The goal is to understand the manner in which humans interact with, and use, 
                    their computers for productive work. The course focus is on the interface as designed artifact. The interface is a design problem without a single "correct" solution but which has many 
                    "good" solutions and a plethora of "bad" solutions. Class discussion centers on what makes an interface good and proven techniques for designing interfaces that meet human needs. 
                    Taught by <a href="https://vickiebananas.com/" target="_blank">Victoria Concepción Chávez</a>
                    </p>
                    <li><a className="text-decoration" href="https://www.mccormick.northwestern.edu/computer-science/academics/courses/descriptions/214.html" target={"_blank"}>COMP_SCI 214: Data Structures and Algorithms</a></li>
                    Summer 2022, Fall 2022, Winter 2023, Spring 2023
                    <br></br>
                    <p>Teaches the design, implementation, analysis, and proper application of abstract data types,
                    data structures, and their associated algorithms. Explores a wide variety of data structures both
                    conceptually and concretely via implementation.
                    Taught by <a href="https://www.mccormick.northwestern.edu/research-faculty/directory/profiles/st-amour-vincent.html" target="_blank"> Vincent St-Amour</a>,   
                    <a href="https://www.mccormick.northwestern.edu/research-faculty/directory/profiles/bhagavatula-sruti.html" target="_blank"> Sruti Bhagavatula</a>, 
                    and <a href="http://leif.rasmussen.com/" target="_blank">Leif Rasmussen</a>
                    </p>
                </ul>

                In the Fall 2022 Quarter, I was fortunate to have been awarded the Northwestern Computer Science department 
                <a href="https://www.mccormick.northwestern.edu/computer-science/news-events/news/articles/2023/northwestern-cs-announces-fall-2022-outstanding-teaching-assistant-and-peer-mentors.html" 
                target={"_blank"}><b className="text-decoration" href=""> Outstanding Peer Mentor Award</b></a>{" "}
                in recognition of the dedication and quality I exhibited in my teaching and support towards students. 
            </p>
        ); 

        const OutSideWork = (
            <p className="p-tag"> 
                Outside of my academics, you can see me working with some amazing student organizations:
                <ul>
                    <li><a className="text-decoration" href="https://www.instagram.com/colorstacknu/" target="_blank">ColorStack @Northwestern University</a></li>
                    Founder & Treasurer
                    <br></br>
                    <br></br>
                    ColorStack is a tech nonprofit cultivating the strongest cross-campus community of its kind to deliver community building, academic support, 
                    and career development opportunities at scale. ColorStack exists to increase the number of Black and Latinx graduates interested in technical 
                    careers. At Northwestern, our goal is to engage peer-to-peer connections so students can meet other Black and Latinx students who major in 
                    computing fields including computer science, data science, etc. As a chapter of a national organization, we want to help students secure 
                    their next opportunity by sharing jobs, fellowships, and events from peers and corporate sponsors. We want students to be their most 
                    authentic selves as part of a diverse, inclusive community. 
                    <br></br>
                    <br></br>
                    As treasurer of this organization, I am in charge and responsible for keeping record of our organization's financials for event planning
                    as well as applying to grants inside and outside of Northwestern to ensure we can continue to support our members and meet their needs.
                    <br></br>
                    <br></br>
                    <li> <a className="text-decoration" href="https://www.instagram.com/nu.emergingcoders/" target={"_blank"}>Emerging Coders</a></li>
                    WebMaster
                    <br></br>
                    <br></br>
                    Seeing more folks that come from the same background in me in technology is important to me. At Emerging Coders,
                    we aim to accomplish that through networking events, panels, and informational sessions. My role in particular, 
                    enables me to lead bi-weekly LeetCode review sessions where I prepare and inform our members on preparing for
                    technical interviews as well portfolio-building projects where members can learn and practice new technical skills.
                    <br></br>
                    <a className="text-deocration" href="https://drive.google.com/drive/u/0/folders/1aN9pn81bW8MJ8OXphSjHsHClgZ5W32CB" target="_blank">View my Work with Emerging Coders here</a>
                    <br></br>
                    <br></br>
                    <li><a className="text-decoration" href="https://www.instagram.com/shpe_nu/" target="_blank"> Society of Hispanic Professional Engineers (SHPE)</a></li>
                    MentorSHPE Chair
                    <br></br>
                    <br></br>
                    As the MentorSHPE Chair for SHPE, I am responsible for coordinating and supervising our mentorship
                    program that enables first-generation low-income STEM/Engineering Majors at Northwestern to receive 
                    mentorship and guidance on navigating academics, professional goals, and overall personal development.
                    <br></br>
                    <br></br>
                    <li><a className="text-decoration" href="https://www.instagram.com/nu_alianza/" target={"_blank"}>Alianza</a></li>
                    Historian
                    <br></br>
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