import * as React from "react";

function SectionTwoOmega() {
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
          Event Spaces
        </span>
      </div>
      <h2 id="get-your-team">Our event garage is ideal for any tech event</h2>
      <p className="get-your-team-paragraph">
        From hackatons to meet-ups to competitions, trainings and pitches plus
        any other event, our space is more than up to the task
      </p>
      {/* <div id="empty-box" /> */}
    </div>
  );
}
const SectionTwoComponent: React.FC = () => {
  return (
    <React.Fragment>
      <SectionTwoOmega />

      <div className="alpha">
        <div className="item-provided">
          <span className="item-provided-icon">Icon </span>Chairs
        </div>
        <div className="item-provided">
          <span className="item-provided-icon">Icon </span>Tables
        </div>
        <div className="item-provided">
          <span className="item-provided-icon">Icon </span>Wifi
        </div>
        <div className="item-provided">
          <span className="item-provided-icon">Icon </span>Hall
        </div>
        <div className="item-provided">
          <span className="item-provided-icon">Icon </span>Light
        </div>
      </div>
    </React.Fragment>
  );
};

export default SectionTwoComponent;
