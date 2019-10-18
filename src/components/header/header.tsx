import * as React from "react";
import "./header.css";
import { TriangleIcon, RectangleIcon, CircleIcon } from "./icons/icon";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const HeaderComponent = (props: any) => {
  const [openMenu, setOpen] = React.useState(false);
  return (
    <>
      <header className="topnav" id="myTopnav">
        <Link to="/">
          <a href="#news" className="logo-image" />
        </Link>

        <div style={{ float: "right" }}>
          {/* <Link to="#consult">
            <a href="#news" className="consulting">
              <span className="icon-style">
                <RectangleIcon />
              </span>
              Consulting
            </a>
          </Link> */}
          {/* 
          <Link to="#projects">
            <a href="#projects">
              <span className="icon-style">
                <TriangleIcon />
              </span>
              Projects
            </a>
          </Link> */}
          {/* <Link to="/workspaces">
            <a href="#about">
              <span className="icon-style">
                <CircleIcon />
              </span>
              Workspaces
            </a>
          </Link> */}

          {/* <Link to="/academy">
            <a>
              <span className="icon-style">
                <CircleIcon />
              </span>
              Academy
            </a>
          </Link> */}

          {/* <Link to="/labs">
            <a href="#about">
              <span className="icon-style">
                <CircleIcon />
              </span>
              Labs
            </a>
          </Link> */}

          <a
            href="javascript:void(0)"
            className="icon"
            onClick={() => setOpen(!openMenu)}
            // style={{ fontSize: "25px" }}
          >
            &#9776;
          </a>
        </div>
      </header>

      {openMenu && (
        <div className="mobile-menu">
          <div id="myLinks">
            <Link to="/consult">
              <a href="#news">Consulting</a>
            </Link>

            <Link to="/projects">
              <a href="#contact">Projects</a>
            </Link>

            <Link to="/workspaces">
              <a href="#about">Workspaces</a>
            </Link>

            <Link to="/academy">
              <a href="#about">Academy</a>
            </Link>

            <Link to="/labs">
              <a href="#about">Labs</a>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderComponent;
