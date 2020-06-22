import React from "react";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Resume from "./Resume";
import Skills from "./Skills";
import ContactMe from "./ContactMe";
function PageDisplayed(props) {
  if (props.page === "Home") {
    return <Home navigate={props.navigate} />;
  } else if (props.page === "Projects") {
    return <Projects navigate={props.navigate} />;
  } else if (props.page === "Resume") {
    return <Resume navigate={props.navigate} />;
  } else if (props.page === "Skills") {
    return <Skills navigate={props.navigate} />;
  } else if (props.page === "Aboutme") {
    return <AboutMe navigate={props.navigate} />;
  } else if (props.page === "ContactMe") {
    return <ContactMe navigate={props.navigate} />;
  }
}

export default PageDisplayed;
