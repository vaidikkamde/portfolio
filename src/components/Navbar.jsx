import React from "react";

function Navbar(props) {
  return (
    <section className="head-section">
      <div id="nav" className="navigation">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="navbar-brand pointer" />
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <div
                  id="Home"
                  onClick={event => {
                    props.navigate(event.target.id);
                  }}
                  className="nav-link pointer"
                >
                  Home
                </div>
              </li>
              <li className="nav-item ">
                <div
                  id="Aboutme"
                  onClick={event => {
                    props.navigate(event.target.id);
                  }}
                  className="nav-link pointer"
                >
                  About Me
                </div>
              </li>
              <li className="nav-item ">
                <div
                  id="Resume"
                  onClick={event => {
                    props.navigate(event.target.id);
                  }}
                  className="nav-link pointer"
                >
                  Resume
                </div>
              </li>
              <li className="nav-item ">
                <div
                  id="Skills"
                  onClick={event => {
                    props.navigate(event.target.id);
                  }}
                  className="nav-link pointer"
                >
                  Skills
                </div>
              </li>
              <li className="nav-item">
                <div
                  id="Projects"
                  onClick={event => {
                    props.navigate(event.target.id);
                  }}
                  className="nav-link pointer"
                >
                  Projects
                </div>
              </li>
              <li className="nav-item">
                <div
                  id="ContactMe"
                  onClick={event => {
                    props.navigate(event.target.id);
                  }}
                  className="nav-link pointer"
                >
                  ContactMe
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div id="blankSpace" />
    </section>
  );
}
export default Navbar;
