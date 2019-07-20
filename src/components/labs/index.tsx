import * as React from "react";
import Header from "../header/header";
import Body from "./body";
import Footer from "../footer";

const Fix: any = {
  marginBottom: "50px"
};
export default () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
      <div style={Fix} />
      <Footer />
    </React.Fragment>
  );
};
