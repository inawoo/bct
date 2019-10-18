import * as React from "react";
import "./landingPage.css";
import Particles from "react-particles-js";
import Typist from "react-typist";
import "react-animated-slider/build/horizontal.css";
import Header from "../header/header";
const cursor = {
  hideWhenDone: true
};
const part: any = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#444",
      opacity: 0.4,
      width: 1
    },
    size: {
      value: 2,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    color: {
      value: "#444"
    }
  }
};
const ParticleContainer = ({ children }: any) => (
  <>
    <div id="particles-js">
      <Particles params={part} />
    </div>
    <div>{children}</div>
  </>
);
const Landing = () => {
  return (
    <div className="landing-page">
      <Header />
      <div className="landing-container">
        <div className="carousel-title">BuildCodeTogether</div>
        <div className="carousel-text">
          <Typist cursor={cursor}>
            We help Africa’s most innovative technology startups grow quickly.
          </Typist>
        </div>
      </div>
      <div className="landing-page-footer">
        <span>Consulting</span>
        <span>Startups</span>
        <span>Workspaces</span>
        <span>Labs</span>
      </div>
    </div>
  );
};

const LandingPage = () => {
  return (
    <React.Fragment>
      {/* <div>
        <Particles params={part} />
      </div> */}

      <ParticleContainer>
        <Landing />
      </ParticleContainer>
    </React.Fragment>
  );
};
export default LandingPage;
