import * as React from "react";
import "./footer.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Footer = () => {
  return (
    <footer>
      <div
        className="menu"
        data-aos="fade-right"
        data-aos-duration="700"
        // data-aos-easing="ease-in-sine"
      >
        <div className="menu-head">Useful Links</div>

        <li>Our Blog</li>
        <li>Careers</li>
        <li>Student Community</li>
        <li>Design Lab</li>
      </div>
      <div
        className="menu"
        data-aos="fade-left"
        data-aos-duration="800"
        // data-aos-easing="ease-in-sine"
      >
        <div className="menu-head">Area of Focus</div>
        <li>Agriculture</li>
        <li>Health</li>
        <li>Fintech</li>
        <li>Security</li>
      </div>
      <div className="menu" data-aos="fade-right" data-aos-duration="700">
        <div className="menu-head">start up support</div>
        <li>Our Blog</li>
        <li>Careers</li>
        <li>Student Community</li>
        <li>Design Lab</li>
      </div>
      <div className="menu" data-aos="fade-left" data-aos-duration="800">
        <div className="menu-head">Contact Us</div>
        <div className="media-links">
          <span>
            <i className="fab fa-linkedin" />
          </span>
          <span>
            <i className="fab fa-facebook-square" />
          </span>
          <span>
            <i className="fab fa-twitter-square" />
          </span>
          <span>
            <i className="fab fa-instagram" />
          </span>
        </div>

        <div className="contact-us">
          <div className="contact-us-email">
            <div style={{ marginRight: "20px" }}>
              <i className="far fa-envelope contact-us-icon" />
            </div>
            <div style={{ float: "right", textTransform: "none" }}>
              admin@buildcodetogether.com
            </div>
          </div>

          <div className="contact-us-email">
            <div style={{ marginRight: "20px" }}>
              <i className="fas fa-phone-square-alt contact-us-icon" />
            </div>
            <div style={{ float: "right" }}>+(234)8037067051</div>
          </div>
          <div className="contact-us-email">
            <div style={{ marginRight: "20px" }}>
              <i className="fas fa-map-marker contact-us-icon" />
            </div>
            <div style={{ width: "250px" }}>
              <span>
                No 91 Sango-Ojoo road, Opposite UI conference center , Ibadan ,
                Oyo state , Nigeria.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
