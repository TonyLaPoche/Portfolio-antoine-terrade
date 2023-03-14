import { Helmet } from 'react-helmet-async';
import './styles.scss';
import React from 'react';
import { SliderM } from '../../component/carouselProject';

import fakeProps from '../../data/fake';
import PresentationAera from '../../component/presentations';
import Contact from '../../component/contact';
import Reseaux from '../../component/reseaux';

// console.log(fakeProps);

const presentation = fakeProps[1].content;
// console.log(presentation);

const { content } = fakeProps[2];

// == Composant
export const Home = () => {
  return (
    <>
      <Helmet>
        <title>Pocket-Folio</title>
        <meta name="description" content="Home page description" />
      </Helmet>
      <h2 id="presentation" className="center">
        présentation
      </h2>

      {presentation.map((elt) => PresentationAera({ ...elt }))}

      <div className="divider" />
      <h4 className="center" id="projets">
        Mes projets
      </h4>

      <SliderM content={content}/>
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
    </>
  );
};

// == Export
export default Home;
