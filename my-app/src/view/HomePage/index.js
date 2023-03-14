import { Helmet } from 'react-helmet-async';
import './styles.scss';
import React from 'react';
import { SliderM } from '../../component/carouselProject';

import fakeProps from '../../data/fake';
import PresentationAera from '../../component/presentations';
import Contact from '../../component/contact';
import Reseaux from '../../component/reseaux';

console.log(fakeProps);

const presentation = fakeProps[1].content;
console.log(presentation);

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
      <SliderM />
      <div className="divider" style={{ margin: '3rem 0' }}></div>
      <h2 id="reseaux" className="center">
        mes réseaux
      </h2>
      {/* <p>Lorem ipsum dolor sit.</p>
        <p>Impedit est dignissimos itaque!</p>
        <p>Sequi, fugit. Distinctio, cum.</p>
        <p>Odit ab suscipit sit.</p>
        <p>Officia repellendus delectus voluptate?</p> */}
      <Reseaux />
      <div className="divider" />
      <h2 id="contact" className="center">
        Contacter moi !
      </h2>
      {/* <form action="" method="post">
          <label htmlFor="name">name</label>
          <input type="text" name="name" id="name" placeholder='name' />
          <label htmlFor="lastname">lastname</label>
          <input type="text" name="lastname" id="lastname" placeholder='lastname' />
          <label htmlFor="email">email</label>
          <input type="email" name="mail" id="mail" placeholder='email' />
          <label htmlFor="message">message</label>
          <textarea name="message" id="message" cols="30" rows="10" placeholder='insert your message'></textarea>
        </form> */}
      <Contact />
    </>
  );
};

// == Export
export default Home;
