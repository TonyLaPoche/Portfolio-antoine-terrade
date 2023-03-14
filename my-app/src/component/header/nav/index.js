import React, { useState } from 'react';
import useWindowSize from '../../../hooks';
import { HashLink } from 'react-router-hash-link';

import fakeProps from '../../../data/fake';
import { Link, useLocation } from 'react-router-dom';

export default function SideNav({ ...props }) {
  const [slider, setSlider] = useState(false);
  const [subSlider, setSubSlider] = useState(false);
  const size = useWindowSize();

  const location = useLocation();
  // const { navElements } = props

  const nav = fakeProps.slice(1);
  console.groupCollapsed('nav');
  console.log(nav);
  console.groupEnd();
  // console.log(window);

  // console.log(window);

  // TODO - A déplacé
  const isActiveLink = (link) => {
    return location.pathname === `/${link}` ? 'red-text' : 'waves-effect ';
  };

  // TODO - A déplacé
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  };

  // TODO - A déplacé
  const navGenerator = () => {
    const NavElt = nav.map((elt) => {
      if (
        elt.name === 'présentation' ||
        elt.name === 'mes réseaux' ||
        elt.name === 'contact'
      ) {
        return (
          <li key={elt.name} onClick={() => setSlider((s) => !s)}>
            <HashLink
              key={'nav-' + elt.id + elt.name}
              className={
                `${location.hash}` === elt.path
                  ? 'waves-effect red-text'
                  : 'waves-effect'
              }
              smooth
              to={'/' + elt.path}
              scroll={(el) => scrollWithOffset(el)}
            >
              {elt.name}
            </HashLink>
          </li>
        );
      }
      if (elt.name === 'mes créations') {
        return (
          <li key={elt.name}>
            <ul
              key={elt.name + '-collapsible-accordion'}
              className="collapsible collapsible-accordion"
            >
              <li key={elt.name + '-collapsible-header'}>
                <HashLink
                  key={elt.name + '-collapsible-header-link'}
                  className="collapsible"
                  smooth
                  to="/#projets"
                  onClick={() => setSubSlider((s) => !s)}
                  scroll={(el) => scrollWithOffset(el)}
                >
                  {elt.name}
                  <i
                    key={elt.name + '-collapsible-projets-link-icon'}
                    className="material-icons right"
                  >
                    {subSlider ? 'expand_more' : 'expand_less'}
                  </i>
                </HashLink>

                <div
                  key={elt.name + '-collapsible-body'}
                  className="collapsible-body"
                  style={{
                    display: subSlider ? 'block' : 'none',
                  }}
                >
                  <ul key={elt.name + '-callapsible-body-ul'}>
                    {elt.content.map((content) => (
                      <li key={'li' + content.id}>
                        <Link
                          key={content.id + content.title}
                          to={content.link}
                          style={{ marginLeft: '15px', fontSize: '1rem' }}
                          className={`${isActiveLink(
                            content.link,
                          )} animate__animated animate__backInLeft`}
                        >
                          <i
                            key={'icon-' + content.id + content.title}
                            className="material-icons"
                            style={{ marginRight: '15px' }}
                          >
                            arrow_forward
                          </i>{' '}
                          {content.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          </li>
        );
      }
      return null;
    });

    return NavElt;
  };

  const elementsJSX = navGenerator();

  console.log();

  // console.groupCollapsed("présentation");
  // console.log(fakeProps[1]);
  // console.groupEnd();

  // console.groupCollapsed("mes créations");
  // console.log(fakeProps[2]);
  // console.groupEnd();

  // console.groupCollapsed("Mes réseaux");
  // console.log(fakeProps[3]);
  // console.groupEnd();

  // console.groupCollapsed("contact");
  // console.log(fakeProps[4]);
  // console.groupEnd();

  return (
    <>
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper light-blue">
            <a className="brand-logo center" href="/#root">
              {fakeProps[0].titre}
            </a>
            <div
              className="btn-floating btn-small blue darken-2 center-left pulse"
              style={{ marginLeft: '15px' }}
              onClick={() => setSlider((s) => !s)}
            >
              <i className="material-icons">menu</i>
            </div>
          </div>
        </nav>
      </div>
      <div
        className="sidenav-overlay"
        onClick={() => setSlider((s) => !s)}
        style={{
          display: slider && size.width > 250 ? 'block' : 'none',
          opacity: '.5',
        }}
      />
      <ul
        id="slide-out"
        className="sidenav"
        style={{
          transform: slider && size.width > 250 ? 'translateX(0%)' : '',
          transitionProperty: 'transform',
          transitionDuration: '500ms',
        }}
      >
        <li>
          <div className="user-view">
            <div className="background">
              <img
                src="	https://materializecss.com/images/office.jpg"
                alt="background sidenav"
              />
            </div>
            <div
              className="btn-floating btn-small blue darken-2 right pulse"
              // style={{ marginLeft: '15px' }}
              onClick={() => setSlider(false)}
            >
              <i className="material-icons">close</i>
            </div>
            <a href="#user">
              <img
                src="https://fakeimg.pl/220/"
                alt="img profil tony"
                className="circle responsive-img"
                style={{ margin: '0 auto' }}
              />
            </a>
            <a href="#presentation">
              <span className="white-text name">Tony La Poche</span>
            </a>
            <a href="#title">
              <span className="white-text name">
                Développeur Web Full-stack
              </span>
            </a>
          </div>
        </li>

        <li>
          <a href="/" className="title" onClick={() => setSlider((s) => !s)}>
            <span className="center">Accueil</span>
          </a>
        </li>
        <li>
          <div className="divider"></div>
        </li>
        {elementsJSX}
      </ul>
    </>
  );
}
