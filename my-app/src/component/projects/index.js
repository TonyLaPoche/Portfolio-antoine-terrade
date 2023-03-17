// == Import
import React from 'react';
import CarouselM from './CarouselTailWind';
// import PropTypes from 'prop-types';

// == Composant
export const Projects = () => {
  return (
    <section
      id="projects"
      className="scroll-mt-[80px] lg:px-10 xl:px-24 lg:py-28 py-10"
    >
      <h4 className="text-center text-4xl mb-1">Mes projets</h4>
      <CarouselM />
    </section>
  );
};
// == Export
export default Projects;
