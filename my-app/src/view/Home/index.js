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
        <meta
          property="og:title"
          content="Terrade Antoine - Développeur Web  React / Node"
        />
        <meta
          property="og:description"
          content="Portfolio, Antoine Terrade développeur web, vous présente son portfolio avec ses projets et ses moyens de contact"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://terrade-antoine.web.app" />
        <meta
          property="og:image"
          content="https://terrade-antoine.web.app/static/media/profil.36f4a70f8b9d03e433ff.jpeg"
        />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:site" content="Portfolio" />
        <meta
          name="twitter:title"
          content="Terrade Antoine - Développeur Web  React / Node"
        />
        <meta
          name="twitter:description"
          content="Portfolio, Antoine Terrade développeur web, vous présente son portfolio avec ses projets et ses moyens de contact"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image:src"
          content="https://terrade-antoine.web.app/static/media/profil.36f4a70f8b9d03e433ff.jpeg"
        />
        <meta name="theme-color" content="#FD0054" />
      </Helmet>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="w-full">
        {presentation.map((elt, index) => (
          <PresentationAera
            key={`${elt.id} - ${index}`}
            id={elt.id}
            title={elt.title}
            picture={elt.picture}
            position={elt.position}
          />
        ))}
      </div>
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
