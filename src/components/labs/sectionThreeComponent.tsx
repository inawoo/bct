import * as React from "react";

function SectionThreeOmega() {
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
          WORKSPACES
        </span>
      </div>
      <h2 id="get-your-team">Create your tech in a tech environment</h2>
      <p className="get-your-team-paragraph">
        With everything you need to build tech that works.
      </p>
    </div>
  );
}
const SectionThreeComponent: React.FC = () => {
  return (
    <React.Fragment>
      <SectionThreeOmega />
      <div className="alpha">
        <div className="item-provided">
          <span className="item-provided-icon">Icon </span>Chair
        </div>
        <div className="item-provided">
          <span className="item-provided-icon">Icon </span>Table
        </div>
        <div className="item-provided">
          <span className="item-provided-icon">Icon </span>Wifi
        </div>
        {/* <div className="item-provided">
          <span className="item-provided-icon">Icon </span>A room
        </div> */}
        <div className="item-provided">
          <span className="item-provided-icon">Icon </span>Light
        </div>
      </div>
    </React.Fragment>
  );
};

export default SectionThreeComponent;
