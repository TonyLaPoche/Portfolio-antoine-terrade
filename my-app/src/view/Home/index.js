import { Helmet } from 'react-helmet-async';
import './styles.css';
import React from 'react';
import { SliderM } from '../../component/carouselProject';

import fakeProps from '../../data/fake';
import PresentationAera from '../../component/presentations';
import Contact from '../../component/contact';
import Reseaux from '../../component/reseaux';
import { motion, useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';
import { HashLink } from 'react-router-hash-link';
// import Banner from '../../component/banner';
import About from '../../component/about/About';
import CarouselM from '../../component/carouselProject/CarouselTailWind';

// console.log(fakeProps);

const presentation = fakeProps[1].content;
// console.log(presentation);

const { content } = fakeProps[2];

// == Composant
export const Home = () => {
  const { scrollYProgress } = useScroll();
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Antoine Terrade Portfolio - Développeur React / Node</title>
        <meta name="description" content="Home page description" />
      </Helmet>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="w-full">
        {presentation.map((elt) => PresentationAera({ ...elt }))}
      </div>
      {/* <Banner/> */}
      <div className="divider" />
      <About />
      <h4 className="text-center text-4xl mb-10" id="projets">
        Mes projets
      </h4>

      {/* <SliderM content={content} /> */}

      <CarouselM />

      <div className="divider" style={{ margin: '3rem 0' }}></div>
      <h2 id="reseaux" className="center">
        mes réseaux
      </h2>

      <Reseaux />
      <div className="divider" />
      <h2 id="contact" className="center">
        Contacter moi !
      </h2>
      <Contact />
      {scrollTop > 100 && (
        <HashLink
          className="btn-floating btn-small blue darken-2 right pulse"
          style={{ bottom: 20, right: 20, position: 'fixed' }}
          smooth
          to="/#root"
        >
          <i className="material-icons">arrow_upward</i>
        </HashLink>
      )}
    </>
  );
};

// == Export
export default Home;
