import { Helmet } from 'react-helmet-async';
import './styles.css';
import React from 'react';

import fakeProps from '../../data/fake';
import PresentationAera from '../../component/presentations';
import Reseaux from '../../component/reseaux';
import { motion, useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';
import { HashLink } from 'react-router-hash-link';

// import Banner from '../../component/banner';
import About from '../../component/about/About';
import Projects from '../../component/projects';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';

// console.log(fakeProps);

const presentation = fakeProps[1].content;
// console.log(presentation);

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

      <Projects />

      <Reseaux />

      {scrollTop > 100 && (
        <HashLink
          className="btn-floating btn-small blue darken-2 right pulse"
          style={{ bottom: 20, right: 20, position: 'fixed' }}
          smooth
          to="/#root"
        >
          <BsFillArrowUpCircleFill
            size="25"
            className=" animate-bounce text-blue-900"
          />
        </HashLink>
      )}
    </>
  );
};

// == Export
export default Home;
