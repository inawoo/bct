import * as React from "react";
import "./body.css";
import BulbIconComponent, { BulbIconComponent2 } from "./icons/bulbIcon";
// import IhaveAnIdeaButton from "./ihaveAndIdea";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Body = () => {
  return (
    <div className="homepage-container">
      <div className="homepage-section-one">
        <div
          className="section-one-item-one"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          <div className="section-one-item-one-header">
            We turn ideas to <br /> useful tech products
          </div>

          <div
            className="section-one-item-one-content"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            From Ideas to drawing board to programmes/designs and to the final
            output, we provide resources and services that facilitate and
            realise great innovations.
          </div>
        </div>
        <div className="section-one-item-two ">
          <div
            className="bulb-holder"
            data-aos="fade-left"
            data-aos-duration="800"
          >
            <BulbIconComponent />
          </div>
        </div>
      </div>
      <div className="homepage-section-two">
        <div className="section-two-item-one">
          <button className="idea-button"> I have an idea </button>
        </div>
        <div className="section-two-item-two">
          <div>
            We love a good challenge I D E A whether to create something, to
            solve a problem or to revolutionize an invention, we're always your
            best option.
          </div>
        </div>
      </div>

      {/**SEction three */}

      <div className="homepage-section-three">
        <div className="section-three-item-one">
          <div className="section-three-item-one-header">
            We don't just build tech, we build experiences and outcomes
          </div>

          <div className="section-three-item-one-content">
            With the best tech skills, frameworks and tools that exist
          </div>
        </div>
        <div className="section-three-item-two">
          {/* <div>
            We love a good challenge I D E A whether to create something, to
            solve a problem or to revolutionize an invention, we're always your
            best option.
          </div> */}
        </div>
      </div>

      {/**Section Four */}

      <div>
        <div className="homepage-section-four">
          <div className="section-four-item-one">
            <div
              className="black-card bg-color-black"
              data-aos-duration="800"
              data-aos="zoom-in-right"
            >
              <div>Product design</div>
            </div>
            <div
              className="black-card bg-color-white"
              data-aos-duration="800"
              data-aos="zoom-in-left"
            >
              <div>User experience design</div>
            </div>
            <div
              className="black-card bg-color-black"
              data-aos-duration="800"
              data-aos="zoom-in-right"
            >
              <div>User interface design</div>
            </div>
            <div
              className="black-card bg-color-white"
              data-aos-duration="800"
              data-aos="zoom-in-left"
            >
              <div>Software engineering</div>
            </div>

            <div
              className="black-card bg-color-black"
              data-aos-duration="800"
              data-aos="zoom-in-right"
            >
              <div>Machine learning</div>
            </div>

            <div
              className="black-card bg-color-white"
              data-aos-duration="800"
              data-aos="zoom-in-left"
            >
              <div>Data science</div>
            </div>

            <div
              className="black-card bg-color-black"
              data-aos-duration="800"
              data-aos="zoom-in-right"
            >
              <div>Hardware design</div>
            </div>

            <div
              className="black-card bg-color-white"
              data-aos-duration="800"
              data-aos="zoom-in-left"
            >
              <div>DevOps</div>
            </div>
          </div>
          <div className="section-four-item-two">
            {/* <div>
            We love a good challenge I D E A whether to create something, to
            solve a problem or to revolutionize an invention, we're always your
            best option.
          </div> */}
          </div>
        </div>
      </div>

      {/* Section FIve */}
      <div
        data-aos="fade-right"
        data-aos-duration="800"
        className="homepage-section-five aos-init aos-animate"
      >
        <div className="section-five-item-one">{/*  */}</div>
        <div className="section-five-item-one ">
          <div className="section-five-item-one-header">
            We evolve and digitize 'old' companies and their processes
          </div>

          <div className="section-five-item-one-content">
            We don't just make your company better, we make it 10 times better
            <div className="section-five-button">
              <button className="company-button"> I have a company</button>
            </div>
          </div>
        </div>
      </div>

      {/* Section Six */}

      <div
        data-aos="fade-left"
        data-aos-duration="600"
        className="homepage-section-five"
      >
        <div className="section-five-item-one">
          <div className="section-five-item-one-header">
            We let our work speak for us.
          </div>

          <div className="section-five-item-one-content">
            See the work we've done in the past.
            {/* <div className="section-five-button">
              <button className="company-button"> I have a company</button>
            </div> */}
          </div>
        </div>
        <div className="section-five-item-one ">
          {/* <div className="section-five-item-one-header">
            We evolve and digitize 'old' companies and their processes
          </div>

          <div className="section-five-item-one-content">
            We don't just make your company better, we make it 10 times better
            <div className="section-five-button">
              <button className="company-button"> I have a company</button>
            </div>
          </div> */}
        </div>
      </div>

      {/* SECTION 6 */}
      <section className="homepage-section-six">
        {/* <div>helow</div> */}
        <div className="project-card-container">
          <div className="project-card">
            <div className="project-image" />

            <div className="project-name project-name-background-white">
              Hinder App
            </div>

            <div className="project-content">
              A web platform that for tracking, scheduling and connects printing
              immunization different artisans
            </div>
          </div>
          <div className="project-card">
            <div className="project-image " />

            <div className="project-name project-name-background-white">
              Shoge Africa
            </div>

            <div className="project-content">
              A web platform that connects different artisans
            </div>
          </div>
          <div className="project-card">
            <div className="project-image " />

            <div className="project-name project-name-background-white">
              PROJECT EARTH
            </div>

            <div className="project-content">
              An app that uses machine An app for getting learning and computer
              vision to photographers for recognize different soil samples
            </div>
          </div>

          <div className="project-card">
            <div className="project-image" />

            <div className="project-name project-name-background-white">
              Hat App
            </div>

            <div className="project-content">
              An app for getting learning and computer vision to photographers
              for recognize different soil samples events and shoots
            </div>
          </div>

          <div className="project-card">
            <div className="project-image" />

            <div className="project-name project-name-background-white">
              THishouse
            </div>

            <div className="project-content">
              A web platform that connects houses to those looking for them.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Body;
