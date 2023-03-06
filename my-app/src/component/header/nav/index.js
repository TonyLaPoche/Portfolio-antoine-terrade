import React, { useState } from "react";
import useWindowSize from "../../../hooks";
import { HashLink } from 'react-router-hash-link';

export default function SideNav({...props}) {
  const [slider, setSlider] = useState(false);
  const size = useWindowSize();

  console.log(props);
console.log('url courante : ',window.location.hash);
const { location } = window
  const { navElements } = props

  return (
    <>
      <nav className="nav-wrapper light-blue">
        <p>Porte folio du Tony</p>
        <div
          className="btn-floating btn-large waves-effect waves-light red"  
          onClick={() => setSlider(s => !s)}
        >
          <i className="material-icons">menu</i>
        </div>
      </nav>
      <div
        className="sidenav-overlay"
        onClick={() => setSlider(s => !s)}
        style={{
          display: slider && size.width < 600 ? "block" : "none",
          opacity: "1"
        }}
      />
      <ul
        id="slide-out"
        className="sidenav"
        style={{
          transform: slider || size.width > 600 ? "translateX(0%)" : "",
          transitionProperty: "transform",
          transitionDuration: ".75s"
        }}
      >
        <li>
          <img src="https://fakeimg.pl/100/" alt="fakeimg" />
          <h4>Terrade Antoine</h4>
        </li>
        {navElements.map(elt => (
          <li key={elt.name} onClick={() => setSlider(s => !s)}>
            <HashLink 
              key={elt.id}
              className={`${location.hash}` === elt.path ? "waves-effect red-text" : "waves-effect"}
              to={elt.path}
            >
              {elt.name}
            </HashLink>
          </li>
        ))}
      </ul>
    </>
  );
}
