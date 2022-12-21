import React from "react"
import Introduction from "./components/Introduction"
import AboutMe from "./components/about-me";
import AboutMeTwo from "./components/about-me-2";
import ProfExperince from "./components/profExperinces";
import PersonalProjects from "./components/softwareProjects";
import Navigation from "./components/navigation";
import Creds from "./components/credits"; 
import logo from './logo.svg';
import './App.css';
import "./styles/main.css"

function App() {
  return (
    <div className="App">
      <div id="PageDetails">
        <Introduction></Introduction>
        <AboutMe></AboutMe>
        <AboutMeTwo></AboutMeTwo>
        <ProfExperince></ProfExperince>
        <PersonalProjects></PersonalProjects>
        <Creds></Creds>
      </div>
      <Navigation></Navigation>
    </div>
  );
}

export default App;
