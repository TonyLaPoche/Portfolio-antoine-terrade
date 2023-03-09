import { Helmet } from 'react-helmet-async';
import './styles.scss';
import React from 'react';
import {SliderM, CarouselM} from '../../component/carouselProject';

// == Composant
export const Home = () => {

  return (
    <>
      <Helmet>
        <title>Pocket-Folio</title>
        <meta name="description" content="Home page description" />
      </Helmet>
      <main>
        <h2>titre 2</h2>
        <div className='divider' />
        <h4 className='center'>Mes projets</h4>

        <SliderM />
        <div className='divider' style={{margin:"3rem 0" }}></div>
        {/* <CarouselM /> */}
        {/* <div className='divider' style={{margin:"3rem 0" }}></div> */}
      </main>
    </>
  );
};

// == Export
export default Home;
