import * as React from "react";
import Header from "../components/header/header";
import Body from "../components/body/body";
import Footer from "../components/footer";
import LandingPage from "../components/LandingPage/LandingPage";
const Fix: any = {
  marginBottom: "50px"
};

const Homepage: React.FC = () => {
  return (
    <React.Fragment>
      {/* <Header /> */}
      <LandingPage />
      {/* <Body />
      <div style={Fix} />
      <Footer /> */}
    </React.Fragment>
  );
};

export default Homepage;
