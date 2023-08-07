import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FadeInSection from "./FadeInSection";

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
    Elsevier: {
      jobTitle: "Software Development Engineer @",
      duration: "JAN 2023 - PRESENT",
      desc: [
        "Successfully implement development processes, coding best practices and code reviews.",
        "Complete simple bug fixes and resolve basic technical issues as necessary and write and review portions of detailed specifications for the development systems components of simple complexity.",
        "Operate in various development environments (Agile, Waterfall, etc.) while collaborating with key stakeholders and keep abreast of new technology developments."
      ]
    },
    "Temple University": {
      jobTitle: "Web Development Intern @",
      duration: "OCT 2022 - JAN 2023",
      desc: [
        "Collaborate with multiple small business clients to create or redesign their website presence to support their business objectives, products, and services and gather and refine client specifications and requirements based on user’s needs.",
        "Create website layout and user interface using tools such as Wix, WordPress & Shopify and complete Search Engine Optimization (SEO) to improve website presence .",
        "Create turnover documentation and custom video training videos unique to each client to facilitate their future website updates."
      ]
    },
    "Temple Univerity": {
      jobTitle: "Undergraduate Research Program Participant @",
      duration: "AUG 2022 - DEC 2022",
      desc: [
        "Worked within Temple University’s ecology lab to create a relational database using R and MySQL.",
        "Implemented an API to automate importing data in the relational database and a third-party API to add locations to each record based on species occurrence records."
      ]
    },
    // "Temple University": {
    //   jobTitle: "Undergraduate Teaching Assistant @",
    //   duration: "JAN 2022 - DEC 2022",
    //   desc: [
    //     "Delivered a range of teaching and assessment activities including tutorials for the Introduction to Academics in Computer Science course.",
    //     "Managed grading and led discussions on topics presented in lecture.",
    //     "Applyed departmental processes related to peer advising & mentoring for over 200 students."
    //   ]
    // }
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
                <FadeInSection delay={`${i + 1}00ms`}>
                  <li key={i}>{descItem}</li>
                </FadeInSection>
              );
            })}
          </ul>
        </TabPanel>
      ))}
    </div>
  );
};

export default JobList;
