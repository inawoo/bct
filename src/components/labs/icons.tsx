import * as React from "react";
import "./icon.css";
{
  /* <style>.a{fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:2px;}</style> */
}

const CustomStyle = {
  a: {
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeMiterlimit: 10,
    strokeWidth: "2px"
  }
};

export const WifiIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="69.516"
    height="56.147"
    viewBox="0 0 69.516 56.147"
  >
    <defs />
    <g transform="translate(1 1)">
      <path
        className="wifi-a"
        d="M405,224.975s11.008-20.548,34.125-20.548,33.391,20.548,33.391,20.548"
        transform="translate(-405 -204.427)"
      />
      <path
        className="wifi-a"
        d="M428,262.676s8.5-15.858,26.336-15.858S480.1,262.676,480.1,262.676"
        transform="translate(-419.561 -231.263)"
      />
      <path
        className="wifi-a"
        d="M450,294.729s5.982-11.168,18.546-11.168,18.147,11.168,18.147,11.168"
        transform="translate(-433.488 -254.524)"
      />
      <ellipse
        className="wifi-a"
        cx="6.972"
        cy="6.972"
        rx="6.972"
        ry="6.972"
        transform="translate(27.52 40.204)"
      />
    </g>
  </svg>
);
