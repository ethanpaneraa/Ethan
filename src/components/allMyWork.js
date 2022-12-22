import React from "react";
import PopInSection from "./PopInSection";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const isHorizontal = window.innerWidth < 600;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  if (isHorizontal) {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  } else {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  if (isHorizontal) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`
    };
  } else {
    return {
      id: `vertical-tab-${index}`
    };
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "theme.palette.background.paper",
    display: "flex",
    height: 300
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}));

const JobList = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const experienceItems = {
    "Technological Innovations for Inclusive Learning and Teaching": {
      jobTitle: "Research Assistant @",
      duration: "MARCH 2022 - PRESENT",
      desc: [
        "Partner with the BLINC project to enhance and implement interactive and accessible front-end features to improve user experience for the real-time multimodal learning analytics platform.",
        "Spearhead the transition of BLINC codebase from Angular to React increasing code flexibility and readability for future features.",
        " Direct open house for lab to further recruitment of undergraduate which led to >100 applications sent in and 20 new members."
      ]
    },
    "Northwestern University Department of Computer Science": {
      jobTitle: "Undergradaute Teaching Assistant @",
      duration: "JUNE 2022 - PRESENT",
      desc: [
        "Dedicate 6-10 hours weekly for office hours to aid more than 200 students in Data Structures and Algorithms course.",
        "Work closely with Professor Vincent St. Amour to provide feedback and grades on student code submissions and examinations.",
        "Guide students through assignment specifics, attend to Q&A board daily keeping average response time within 5 minutes."
      ]
    },
    "Design and Innovation for Social Change": {
      jobTitle: "Software Engineer @",
      duration: "FEB 2022 - JUNE 2022",
      desc: [
        "Worked as a student developer in a team of 5 to create a JavaScript application for Chicago Furniture Bank that calculates users environmental impact with a web-based interactive calculator.",
        "Compiled and presented information and statistics on environmental savings and benefits on donating furniture to CEO and company partners at Chicago Furniture Bank and its sister company.",
        "Coordinated weekly meetings with team members to implement, design, and collaborate on one feature of web application weekly"
      ]
    },
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation={!isHorizontal ? "vertical" : null}
        variant={isHorizontal ? "fullWidth" : "scrollable"}
        value={value}
        onChange={handleChange}
        className={classes.tabs}
      >
        {Object.keys(experienceItems).map((key, i) => (
          <Tab label={isHorizontal ? `0${i}.` : key} {...a11yProps(i)} />
        ))}
      </Tabs>
      {Object.keys(experienceItems).map((key, i) => (
        <TabPanel value={value} index={i}>
          <span className="joblist-job-title">
            {experienceItems[key]["jobTitle"] + " "}
          </span>
          <span className="joblist-job-company">{key}</span>
          <div className="joblist-duration">
            {experienceItems[key]["duration"]}
          </div>
          <ul className="job-description">
            {experienceItems[key]["desc"].map(function (descItem, i) {
              return (
                <PopInSection delay={`${i + 1}00ms`}>
                  <li key={i}>{descItem}</li>
                </PopInSection>
              );
            })}
          </ul>
        </TabPanel>
      ))}
    </div>
  );
};

export default JobList;
