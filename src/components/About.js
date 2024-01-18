import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
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
    const one = (
      <p>
        
        I am currently a Software Engineer at
        <a href="https://www.elsevier.com"> Elsevier</a>, working on  <a href="https://www.osmosis.org"> Osmosis</a>. I am also undertaking a
        part-time Master's of Science in Computer Science at the{" "}
        <a href="https://www.gatech.edu/about">Georgia Institute of Technology</a> with a specialization in Interactive Intelligence.
      </p>
    );
    const two = (
      <p>
        Outside of work, I'm interested in following the developments of
        science. I also enjoy anime/manga, creating art, playing video games and travelling.
      </p>
    );
    const three = (
      <p>
        <b>Want to chat?</b> Shoot me a message at{" "}
        <a href="yasminepwatkins@gmail.com">
          yasminepwatkins@gmail.com
        </a>{" "}
        and let's talk.
      </p>
    );
    const desc_items = [one, two];

    const tech_stack = [
      "Javascript",
      "Typscript",
      "React.js",
      "Java",
      "Node.js",
      "HTML & CSS"
    ];

    const tech_items = tech_stack.map(stack => <li>{stack}</li>);

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
            </div>
            <div className="about-image">
              <img src={"/assets/me2.jpg"} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
