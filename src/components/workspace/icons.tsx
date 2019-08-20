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

export const ChairIcon = ({ width, height, color }: any) => (
  <svg style={{ width, height }} viewBox="0 0 24 24">
    <path
      fill={color}
      d="M22 10V13H19V10H22M2 13H5V10H2V13M17 5C17 3.9 16.1 3 15 3H9C7.9 3 7 3.9 7 5V13H17V5M7 15H6V17H11V18L7 22H9.8L12 19.8L14.2 22H17L13 18V17H18V15H7Z"
    />
  </svg>
);

export const Table = ({ width, height, color }: any) => (
  <svg style={{ width, height }} viewBox="0 0 24 24">
    <path
      fill={color}
      d="M21,19A1,1 0 0,1 20,20H19V18H21V19M15,20V18H17V20H15M11,20V18H13V20H11M7,20V18H9V20H7M4,20A1,1 0 0,1 3,19V18H5V20H4M19,4H5A2,2 0 0,0 3,6V8H5L11,8H13L19,8H21V6C21,4.89 20.11,4 19,4M5,14H3V16H5V14M5,10H3V12H5V10M21,10H19V12H21V10M21,14H19V16H21V14M11,16V14H13V16H11M11,12V10H13V12H11"
    />
  </svg>
);

export const NewWifi = ({ width, height, color }: any) => (
  <svg style={{ width, height }} viewBox="0 0 24 24">
    <path
      fill={color}
      d="M12,6C8.6,6 5.5,7.1 3,9L1.2,6.6C4.2,4.3 8,3 12,3C16,3 19.8,4.3 22.8,6.6L21,9C18.5,7.1 15.4,6 12,6M13,19C13,17.7 13.4,16.4 14.2,15.4C13.5,15.2 12.8,15 12,15C10.7,15 9.4,15.5 8.4,16.2L12,21L13,19.6C13,19.4 13,19.2 13,19M16.8,13.4C17.1,13.3 17.5,13.2 17.9,13.1L19.2,11.4C17.2,9.9 14.7,9 12,9C9.3,9 6.8,9.9 4.8,11.4L6.6,13.8C8.1,12.7 10,12 12,12C13.8,12 15.4,12.5 16.8,13.4M16.5,22.6L17.2,19.8L15,17.9L17.9,17.7L19,15L20.1,17.6L23,17.8L20.8,19.7L21.5,22.5L19,21.1L16.5,22.6Z"
    />
  </svg>
);

export const LightIcon = ({ width, height, color }: any) => (
  <svg style={{ width, height }} viewBox="0 0 24 24">
    <path
      fill={color}
      d="M20,11H23V13H20V11M1,11H4V13H1V11M13,1V4H11V1H13M4.92,3.5L7.05,5.64L5.63,7.05L3.5,4.93L4.92,3.5M16.95,5.63L19.07,3.5L20.5,4.93L18.37,7.05L16.95,5.63M12,6A6,6 0 0,1 18,12C18,14.22 16.79,16.16 15,17.2V19A1,1 0 0,1 14,20H10A1,1 0 0,1 9,19V17.2C7.21,16.16 6,14.22 6,12A6,6 0 0,1 12,6M14,21V22A1,1 0 0,1 13,23H11A1,1 0 0,1 10,22V21H14M11,18H13V15.87C14.73,15.43 16,13.86 16,12A4,4 0 0,0 12,8A4,4 0 0,0 8,12C8,13.86 9.27,15.43 11,15.87V18Z"
    />
  </svg>
);

export const HallIcon = ({ width, height, color }: any) => (
  <svg style={{ width, height }} viewBox="0 0 24 24">
    <path
      fill={color}
      d="M23,2H1A1,1 0 0,0 0,3V21A1,1 0 0,0 1,22H23A1,1 0 0,0 24,21V3A1,1 0 0,0 23,2M22,20H20V19H15V20H2V4H22V20M10.29,9.71A1.71,1.71 0 0,1 12,8C12.95,8 13.71,8.77 13.71,9.71C13.71,10.66 12.95,11.43 12,11.43C11.05,11.43 10.29,10.66 10.29,9.71M5.71,11.29C5.71,10.58 6.29,10 7,10A1.29,1.29 0 0,1 8.29,11.29C8.29,12 7.71,12.57 7,12.57C6.29,12.57 5.71,12 5.71,11.29M15.71,11.29A1.29,1.29 0 0,1 17,10A1.29,1.29 0 0,1 18.29,11.29C18.29,12 17.71,12.57 17,12.57C16.29,12.57 15.71,12 15.71,11.29M20,15.14V16H16L14,16H10L8,16H4V15.14C4,14.2 5.55,13.43 7,13.43C7.55,13.43 8.11,13.54 8.6,13.73C9.35,13.04 10.7,12.57 12,12.57C13.3,12.57 14.65,13.04 15.4,13.73C15.89,13.54 16.45,13.43 17,13.43C18.45,13.43 20,14.2 20,15.14Z"
    />
  </svg>
);
