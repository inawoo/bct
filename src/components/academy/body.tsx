import * as React from "react";
import "./workspace.css";
import { WifiIcon } from "./icons";
const Body = () => {
  return (
    <React.Fragment>
      <div className="workspace-container">
        <section className="workspace-sec-one">
          <div className="alpha">
            <div className="alpha-header">
              The best tech guides to light your technology way
            </div>
            <div className="i-need-btn-container">
              <button className="empty-box"> GET TRAINED </button>
            </div>
          </div>
          <div className="workspace-sec-one-omega" />
        </section>

        {/* SECTION TWO */}
        <section className="workspace-sec-two">
          <div className="workspace-sec-two-alpha item-provided-left ">
            <div className="workspace-item-provided">
              <span className="workspace-item-provided-icon">
                <WifiIcon />
              </span>
              <span className="item-provided-icon-text">Staff training</span>
            </div>
            <div className="workspace-item-provided">
              <span className="workspace-item-provided-icon">
                <WifiIcon />
              </span>
              <span className="item-provided-icon-text">
                Online learning materials
              </span>
            </div>
            <div className="workspace-item-provided">
              <span className="workspace-item-provided-icon">
                <WifiIcon />
              </span>
              <span className="item-provided-icon-text">
                Consultation discounts
              </span>
            </div>
            <div className="workspace-item-provided">
              <span className="workspace-item-provided-icon">
                <WifiIcon />
              </span>
              <span className="item-provided-icon-text">
                Mentorship programs
              </span>
            </div>
            <div className="workspace-item-provided">
              <span className="workspace-item-provided-icon">
                <WifiIcon />
              </span>
              <span className="item-provided-icon-text">
                Training certificate
              </span>
            </div>
          </div>

          <div className="workspace-sec-two-omega-two grey-bg">
            <div id="workspace-team-header-holder">
              {/* <span id="workspace-team-header-icon">Icon here</span> */}
              <span className="workspace-team-header"> COMPANIES</span>
            </div>
            <div className="workspace-get-your-team">
              We've trained the good, bad and ugly companies
            </div>
            <div className="workspace-get-your-team-paragraph">
              So we can definitely train you and your staff
            </div>
          </div>
        </section>

        {/* Button here */}

        <section className="i-need-space-container">
          {/* <div /> */}
          <div>
            <div className="i-need-btn-container">
              <button className="empty-box"> SEE PAST TRAININGS</button>
            </div>
          </div>
        </section>

        {/* SECTION THREE */}
        <section className="workspace-sec-two ">
          <div className="workspace-sec-two-omega-two white-bg">
            <div id="workspace-team-header-holder">
              {/* <span id="workspace-team-header-icon">Icon here</span> */}
              <span className="workspace-team-header">INDIVIDUALS</span>
            </div>
            <div className="workspace-get-your-team">
              Enthusiastic about tech? Lets teach you how to build yours
            </div>
            <div className="workspace-get-your-team-paragraph">
              With everything you need Job recommendation to build tech that
              works
            </div>
          </div>

          <div className="workspace-sec-two-alpha item-provided-right">
            <div className="workspace-item-provided ">
              <span className="workspace-item-provided-icon">
                <WifiIcon />
              </span>
              <span className="item-provided-icon-text">Tutorials</span>
            </div>
            <div className="workspace-item-provided">
              <span className="workspace-item-provided-icon">
                <WifiIcon />
              </span>
              <span className="item-provided-icon-text">Mentorship</span>
            </div>
            <div className="workspace-item-provided">
              <span className="workspace-item-provided-icon">
                <WifiIcon />
              </span>
              <span className="item-provided-icon-text">
                Live interactive classes
              </span>
            </div>
            <div className="workspace-item-provided">
              <span className="workspace-item-provided-icon">
                <WifiIcon />
              </span>
              <span className="item-provided-icon-text">
                Online learning materials
              </span>
            </div>
            <div className="workspace-item-provided">
              <span className="workspace-item-provided-icon">
                <WifiIcon />
              </span>
              <span className="item-provided-icon-text">
                Online learning materials
              </span>
            </div>
            <div className="workspace-item-provided">
              <span className="workspace-item-provided-icon">
                <WifiIcon />
              </span>
              <span className="item-provided-icon-text">
                Job recommendation
              </span>
            </div>

            <div className="workspace-item-provided">
              <span className="workspace-item-provided-icon">
                <WifiIcon />
              </span>
              <span className="item-provided-icon-text">
                Training certificate
              </span>
            </div>
          </div>
        </section>

        <section className="i-need-space-container-2">
          {/* <div /> */}
          <div>
            <div className="i-need-btn-container">
              <button className="empty-box"> SEE PAST TRAININGS </button>
            </div>
          </div>
        </section>

        {/* Section Four */}

        <section className="workspace-sec-two">
          <div className="workspace-sec-two-alpha item-provided-left">
            <div className="workspace-item-provided ">
              <span className="workspace-item-provided-icon">
                <WifiIcon />
              </span>
              <span className="item-provided-icon-text">Holiday classes</span>
            </div>
            <div className="workspace-item-provided">
              <span className="workspace-item-provided-icon">
                <WifiIcon />
              </span>
              <span className="item-provided-icon-text">Mentorship</span>
            </div>
            <div className="workspace-item-provided">
              <span className="workspace-item-provided-icon">
                <WifiIcon />
              </span>
              <span className="item-provided-icon-text">Real Projects</span>
            </div>
            <div className="workspace-item-provided">
              <span className="workspace-item-provided-icon">
                <WifiIcon />
              </span>
              <span className="item-provided-icon-text">Weekend classes</span>
            </div>
            <div className="workspace-item-provided">
              <span className="workspace-item-provided-icon">
                <WifiIcon />
              </span>
              <span className="item-provided-icon-text">
                Training certificate
              </span>
            </div>
          </div>
          <div className="workspace-sec-two-omega-two grey-bg">
            <div id="workspace-team-header-holder">
              {/* <span id="workspace-team-header-icon">Icon here</span> */}
              <span className="workspace-team-header">YOUNG CODERS</span>
            </div>
            <div className="workspace-get-your-team">
              Give your kid a head start in tech let us teach them code and
              design
            </div>
            <div className="workspace-get-your-team-paragraph">
              We've trained kids in just 6 weeks to build standard Training
              certificate websites
            </div>
          </div>
        </section>

        {/* Button here */}

        <section className="i-need-space-container">
          <div>
            <div className="i-need-btn-container">
              <button className="empty-box empty-box-black-bg">
                See Past Trainings
              </button>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default Body;
