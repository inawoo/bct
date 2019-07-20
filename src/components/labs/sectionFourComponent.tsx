import * as React from "react";

function SectionFourOmega() {
  return (
    <div className="omega-two">
      <div id="team-header-holder">
        <span id="team-header-icon">Icon here</span>
        <span
          style={{
            marginLeft: "15px",
            position: "relative",
            top: "10px"
          }}
        >
          {" "}
          Team Spaces
        </span>
      </div>
      <h2 id="get-your-team">Get your team into the same space.</h2>
      <p className="get-your-team-paragraph">
        Be more productive, improve communication and diffusion of great ideas.
      </p>
    </div>
  );
}
const SectionFourComponent: React.FC = () => {
  return (
    <React.Fragment>
      <div className="alpha">
        <div className="item-provided">
          <span className="item-provided-icon">Icon </span>Chair
        </div>
        <div className="item-provided">
          <span className="item-provided-icon">Icon </span>Tables
        </div>
        <div className="item-provided">
          <span className="item-provided-icon">Icon </span>Wifi
        </div>
        <div className="item-provided">
          <span className="item-provided-icon">Icon </span>A room
        </div>
        <div className="item-provided">
          <span className="item-provided-icon">Icon </span>Light
        </div>
      </div>
      <SectionFourOmega />
    </React.Fragment>
  );
};
export default SectionFourComponent;
