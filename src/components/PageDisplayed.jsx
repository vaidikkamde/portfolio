import React from "react";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Resume from "./Resume";
import Skills from "./Skills";
import ContactMe from "./ContactMe";
function PageDisplayed(props) {
  if (props.page === "Home") {
    return <Home />;
  } else if (props.page === "Projects") {
    return <Projects />;
  } else if (props.page === "Resume") {
    return <Resume />;
  } else if (props.page === "Skills") {
    return <Skills />;
  } else if (props.page === "Aboutme") {
    return <AboutMe />;
  } else if (props.page === "ContactMe") {
    return <ContactMe />;
  }
}

export default PageDisplayed;
