import React from "react";

const CustomeStyle = {
  triangle: {
    fill: "#fff",
    stroke: "#ae76df",
    strokeWidth: "5px"
  },
  rectangle: {
    a: {
      fill: "none",
      stroke: "#ae76df",
      strokeWidth: "5px"
    },
    b: {
      stroke: "none"
    },
    c: {
      fill: "none"
    }
  },

  circle: {
    a: {
      stroke: "#dc8bdc",
      strokeWidth: "5px",
      fill: "none"
    },
    c: {
      fill: "none"
    },
    b: {
      stroke: "none"
    }
    //   <style>.a,.c{fill:none;}.a{stroke:#dc8bdc;stroke-width:5px;}.b{stroke:none;}</style>
  }
};
export const TriangleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="23.816"
    height="22.003"
    viewBox="0 0 24.816 22.003"
  >
    <defs>
      {/* <style>.a{fill:#fff;stroke:#ae76df;stroke-width:5px;}</style> */}
    </defs>
    <path
      style={CustomeStyle.triangle}
      className="a"
      d="M1423.607-7l-7.7,14.412h16.255Z"
      transform="translate(-1411.74 12.091)"
    />
  </svg>
);

export const RectangleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22.383"
    height="22.383"
    viewBox="0 0 22.383 22.383"
  >
    <defs />
    <g className="a" style={CustomeStyle.rectangle.a}>
      <rect
        style={CustomeStyle.rectangle.b}
        className="b"
        width="22.383"
        height="22.383"
      />
      <rect
        style={CustomeStyle.rectangle.c}
        className="c"
        x="2.5"
        y="2.5"
        width="17.383"
        height="17.383"
      />
    </g>
  </svg>
);

export const CircleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25.649"
    height="23.649"
    viewBox="0 0 25.649 25.649"
  >
    <defs />
    <g className="a" style={CustomeStyle.circle.a}>
      <circle
        style={CustomeStyle.circle.b}
        className="b"
        cx="12.824"
        cy="12.824"
        r="12.824"
      />
      <circle
        style={CustomeStyle.circle.c}
        className="c"
        cx="12.824"
        cy="12.824"
        r="10.324"
      />
    </g>
  </svg>
);
