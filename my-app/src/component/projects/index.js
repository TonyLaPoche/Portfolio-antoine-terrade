// == Import
import React from 'react';
import CarouselM from './CarouselTailWind';
// import PropTypes from 'prop-types';

// == Composant
export const Projects = () => {
  return (
    <section
      id="projets"
      className=" md:px-24 lg:px-56 py-6 xl:px-96 "
    >
      <h4 className="text-center text-4xl mb-1">Mes projets</h4>
      <CarouselM />
    </section>
  );
};
// == Export
export default Projects;
