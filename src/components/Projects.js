import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";
import FadeInSection from "./FadeInSection";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
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
    const spotlightProjects = {
      "Simple Tunes Android Application": {
        title: "Simple Tunes Android Application",
        desc:
          "a media player app that runs asynchronously in the background, it was built using agile scrum methodology with focus on UX design, unit testing, and functionality for user events.",
        techStack: "JAVA",
        link: "https://github.com/Yasminepw/SimpleTunes",
        open: "https://github.com/Yasminepw/SimpleTunes",
        image: "/assets/images.png"
      },
      "Networked Spellchecker": {
        title: "Networked Spellchecker",
        desc:
          "A server program written that performs spell checking on demand utilizing a process that acquires. sequences of words sent by clients so users can easily type in words and be provided with the correct spelling.",
        techStack: "C",
        link: "https://github.com/Yasminepw/NetworkSpellchecker",
        open: "https://github.com/Yasminepw/NetworkSpellchecker",
        // image: "/assets/talltales.png"
      },
      "Linux Shell": {
        title: "Linux Shell",
        desc:
          "A command line interpreter that accepts commands then executes the command entered, prompting for more user input once complete, using child processes.",
        techStack: "C",
        link: "https://github.com/Yasminepw/LinuxShell",
        open: "https://github.com/Yasminepw/LinuxShell",
        image: "/assets/images.png"
      }
    };
    const projects = {
      "Simple Tunes Android Application": {
        title: "Simple Tunes Android Application",
        desc:
          "A media player app that runs asynchronously in the background, it was built using agile scrum methodology with focus on UX design, unit testing, and functionality for user events.",
        techStack: "JAVA",
        link: "https://github.com/Yasminepw/SimpleTunes",
        open: "https://github.com/Yasminepw/SimpleTunes",
        //image: "/assets/nomansland.png"
      },
      "Networked Spellchecker": {
        title: "Networked Spellchecker",
        desc:
          "A server program written that performs spell checking on demand utilizing a process that acquires. sequences of words sent by clients so users can easily type in words and be provided with the correct spelling.",
        techStack: "C",
        link: "https://github.com/Yasminepw/NetworkSpellchecker",
        open: "https://github.com/Yasminepw/NetworkSpellchecker",
        // image: "/assets/talltales.png"
      },
      "Linux Shell": {
        title: "Linux Shell",
        desc:
          "A command line interpreter that accepts commands then executes the command entered, prompting for more user input once complete, using child processes.",
        techStack: "C",
        link: "https://github.com/Yasminepw/LinuxShell",
        open: "https://github.com/Yasminepw/LinuxShell",
       // image: "/assets/portfolio.png"
      },
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ software-creations</span>
        </div>
        {/* <Carousel>
          {Object.keys(spotlightProjects).map((key, i) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={spotlightProjects[key]["image"]}
                alt={key}
              />
              <div className="caption-bg">
                <Carousel.Caption>
                  <h3>{spotlightProjects[key]["title"]}</h3>
                  <p>
                    {spotlightProjects[key]["desc"]}
                    <p className="techStack">
                      {spotlightProjects[key]["techStack"]}
                    </p>
                  </p>
                  <ExternalLinks
                    githubLink={spotlightProjects[key]["link"]}
                    openLink={spotlightProjects[key]["open"]}
                  ></ExternalLinks>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel> */}
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    ></ExternalLinks>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
