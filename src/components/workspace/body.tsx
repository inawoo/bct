import * as React from "react";
import "./workspace.css";
// import SectionFourComponent from "./sectionFourComponent";
// import SectionTwoComponent, { SectionTwoOmega } from "./sectionTwoComponent";
// import SectionThreeComponent from "./sectionThreeComponent";
import {
  WifiIcon,
  ChairIcon,
  Table,
  NewWifi,
  LightIcon,
  HallIcon
} from "./icons";
const Body = () => {
  return (
    <React.Fragment>
      <div className="workspace-container">
        <section className="workspace-sec-one">
          <div className="alpha">
            <div className="alpha-header-workspace">
              The cheapest spaces in the most innovative environment
            </div>
            <div className="workspace-need-space-container hide-bg-onMobile">
              <button className="empty-bo"> I need One </button>
            </div>
          </div>
          <div id="workspace-sec-one-omega" />
          <div id="workspace-sec-one-omega-onMobile" />
          <div className="workspace-need-space-container hide-onBig">
            <button className="empty-bo"> I need One </button>
          </div>
        </section>

        {/* SECTION TWO */}
        <section className="workspace-sec-two">
          <div className="workspace-sec-two-alpha item-provided-left ">
            <div className="workspace-item-provided">
              <span className="workspace-item-provided-icon">
                <ChairIcon width={60} height={60} color="#444" />
              </span>
              <span id="item-provided-icon-text">Chairs</span>
            </div>
            <div className="workspace-item-provided">
              <span className="workspace-item-provided-icon">
                <Table width={60} height={60} color="#444" />
              </span>
              <span id="item-provided-icon-text">Tables</span>
            </div>
            <div className="workspace-item-provided">
              <span className="workspace-item-provided-icon">
                <NewWifi width={60} height={60} color="#444" />
              </span>
              <span id="item-provided-icon-text">Wifi</span>
            </div>
            <div className="workspace-item-provided">
              <span className="workspace-item-provided-icon">
                <HallIcon width={60} height={60} color="#444" />
              </span>
              <span id="item-provided-icon-text">Hall</span>
            </div>
            <div className="workspace-item-provided">
              <span className="workspace-item-provided-icon">
                <LightIcon width={60} height={60} color="#444" />
              </span>
              <span id="item-provided-icon-text">Light</span>
            </div>
          </div>

          <div className="workspace-sec-two-omega-two grey-bg">
            <div id="workspace-team-header-holder">
              {/* <span id="workspace-team-header-icon">Icon here</span> */}
              <span className="workspace-team-header"> Event Spaces</span>
            </div>
            <div className="workspace-get-your-team">
              Our event garage is ideal for any tech event
            </div>
            <div className="workspace-get-your-team-paragraph">
              From hackatons to meet-ups to competitions, trainings and pitches
              plus any other event, our space is more than up to the task
            </div>
          </div>
        </section>

        {/* Button here */}

        <section className="workspace-need-space-container">
          <button className="empty-bo button-right"> I need space </button>
        </section>

        {/* SECTION THREE */}
        <section className="workspace-sec-two ">
          <div className="workspace-sec-two-omega-two white-bg">
            <div id="workspace-team-header-holder">
              {/* <span id="workspace-team-header-icon">Icon here</span> */}
              <span className="workspace-team-header">WORKSPACES</span>
            </div>
            <div className="workspace-get-your-team">
              Create your tech in a tech environment
            </div>
            <div className="workspace-get-your-team-paragraph">
              With everything you need to build tech that works
            </div>
          </div>

          <div className="workspace-sec-two-alpha item-provided-right">
            <div className="workspace-item-provided ">
              <span className="workspace-item-provided-icon">
                <ChairIcon width={60} height={60} color="#444" />
              </span>
              <span id="item-provided-icon-text">Chairs</span>
            </div>
            <div className="workspace-item-provided">
              <span className="workspace-item-provided-icon">
                <Table width={60} height={60} color="#444" />
              </span>
              <span id="item-provided-icon-text">Tables</span>
            </div>
            <div className="workspace-item-provided">
              <span className="workspace-item-provided-icon">
                <NewWifi width={60} height={60} color="#444" />
              </span>
              <span id="item-provided-icon-text">Wifi</span>
            </div>
            <div className="workspace-item-provided">
              <span className="workspace-item-provided-icon">
                <HallIcon width={60} height={60} color="#444" />
              </span>
              <span id="item-provided-icon-text">Hall</span>
            </div>
            <div className="workspace-item-provided">
              <span className="workspace-item-provided-icon">
                <LightIcon width={60} height={60} color="#444" />
              </span>
              <span id="item-provided-icon-text">Light</span>
            </div>
          </div>
        </section>

        <section className="workspace-need-space-container">
          <button className="empty-bo "> I need space </button>
        </section>

        {/* Section Four */}

        <section className="workspace-sec-two">
          <div className="workspace-sec-two-alpha item-provided-left">
            <div className="workspace-item-provided ">
              <span className="workspace-item-provided-icon">
                <ChairIcon width={60} height={60} color="#444" />
              </span>
              <span id="item-provided-icon-text">Chairs</span>
            </div>
            <div className="workspace-item-provided">
              <span className="workspace-item-provided-icon">
                <Table width={60} height={60} color="#444" />
              </span>
              <span id="item-provided-icon-text">Tables</span>
            </div>
            <div className="workspace-item-provided">
              <span className="workspace-item-provided-icon">
                <NewWifi width={60} height={60} color="#444" />
              </span>
              <span id="item-provided-icon-text">Wifi</span>
            </div>
            <div className="workspace-item-provided">
              <span className="workspace-item-provided-icon">
                <HallIcon width={60} height={60} color="#444" />
              </span>
              <span id="item-provided-icon-text">Hall</span>
            </div>
            <div className="workspace-item-provided">
              <span className="workspace-item-provided-icon">
                <LightIcon width={60} height={60} color="#444" />
              </span>
              <span id="item-provided-icon-text">Light</span>
            </div>
          </div>
          <div className="workspace-sec-two-omega-two grey-bg">
            <div id="workspace-team-header-holder">
              {/* <span id="workspace-team-header-icon">Icon here</span> */}
              <span className="workspace-team-header">TEAMSPACES</span>
            </div>
            <div className="workspace-get-your-team">
              Get your team into the same space
            </div>
            <div className="workspace-get-your-team-paragraph">
              Be more productive, improve communication Light and diffusion of
              great ideas.
            </div>
          </div>
        </section>

        {/* Button here */}

        <section className="workspace-need-space-container">
          <button className="empty-bo button-right">I need space</button>
        </section>
      </div>
    </React.Fragment>
  );
};

export default Body;
