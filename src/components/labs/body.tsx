import * as React from "react";
import "./workspace.css";
import SectionFourComponent from "./sectionFourComponent";
import SectionTwoComponent from "./sectionTwoComponent";
import SectionThreeComponent from "./sectionThreeComponent";
const Body: React.FC = () => {
  return (
    <React.Fragment>
      <div id="workspace-container">
        <section className="sec-one">
          <div className="alpha">
            <h1 className="labs-h1">
              Research, design and development uninhibited
            </h1>

            <div id="empty-box" />
          </div>
          <div className="omega">HELO</div>
        </section>

        <section className="sec-one">
          <SectionTwoComponent />
        </section>

        <section className="sec-one">
          <SectionThreeComponent />
        </section>
        <section className="sec-one">
          <SectionFourComponent />
        </section>
      </div>
    </React.Fragment>
  );
};

export default Body;
