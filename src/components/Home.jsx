import React from "react";
import CopyFooter from "./CopyFooter";
import Typewriter from "typewriter-effect";
function Home(props) {
  return (
    <div>
      <div className="startDiv container-fluid">
        <div className="row row-cols-2 align-items-center justify-content-between">
          <div className="homeContent col col-lg-6 col-12">
            <h1>
              <Typewriter
                options={{
                  strings: ["Hello I am Vaidik....."],
                  autoStart: true,
                  loop: true
                }}
              />
            </h1>
            <p>
              I make elegent, professional web apps with minimalistic design
              techniques for living. If you want any one of those feel free to
              contact me.
            </p>
            <button
              onClick={() => {
                props.navigate("Projects");
              }}
              type="button"
              className="btn btn-lg btn-outline-light"
            >
              Projects
            </button>
            <button
              onClick={() => {
                props.navigate("ContactMe");
              }}
              type="button"
              className="btn btn-lg btn-outline-warning"
            >
              Contact Me
            </button>
          </div>
          <div className=" homeimage col col-lg-6">
            <img
              className="homeIllustration"
              src="https://i.ibb.co/M735wzr/330747-PA698-T-360.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <CopyFooter />
    </div>
  );
}
export default Home;
