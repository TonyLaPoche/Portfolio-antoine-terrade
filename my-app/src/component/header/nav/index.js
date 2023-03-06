import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import useWindowSize from "../../../hooks";

export default function SideNav(props) {
  const [slider, setSlider] = useState(false);
  const size = useWindowSize();
  const fakeProps = [
    {
      name: "Home",
      path: "/"
    },
    {
      name: "About",
      path: "/about"
    }
  ];
  return (
    <>
      <nav className="light-blue">
        <a
          href="#test"
          className="sidenav-trigger"
          onClick={() => setSlider(s => !s)}
        >
          <i className="material-icons">menu</i>
        </a>
      </nav>
      <div
        className="sidenav-overlay"
        onClick={() => setSlider(s => !s)}
        style={{
          display: slider && size.width < 980 ? "block" : "none",
          opacity: "1"
        }}
      />
      <ul
        id="slide-out"
        className="sidenav"
        style={{
          transform: slider || size.width > 980 ? "translateX(0%)" : "",
          transitionProperty: "transform",
          transitionDuration: ".25s"
        }}
      >
        <li>
          <h4>title h4</h4>
        </li>
        {fakeProps.map(elt => (
          <li onClick={() => setSlider(s => !s)}>
            <Link className="waves-effect" to={elt.path}>
              {elt.name}
            </Link>
          </li>
        ))}
        <li>
          <div className="divider" />
        </li>
        <li>
          <a className="subheader">Subheader</a>
        </li>
        <li>
          <a className="waves-effect" href="#!">
            Third Link With Waves
          </a>
        </li>
      </ul>
    </>
  );
}
