import * as React from "react";
import Header from "../components/header/header";
import Body from "../components/academy/body";
import Footer from "../components/footer";

const Fix: any = {
  marginBottom: "50px"
};

const Academy: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
      <div style={Fix} />
      <Footer />
    </React.Fragment>
  );
};

export default Academy;
