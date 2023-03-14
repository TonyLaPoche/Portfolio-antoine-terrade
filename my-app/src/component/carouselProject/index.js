// == Import
import React from 'react';
import { Slider, Slide, Caption } from 'react-materialize';
import PropTypes from 'prop-types';
import SlideM from './Slide';

// == Composant

export const SliderM = ({ content }) => {
  console.log('ici', content)

  return (
    <Slider
      fullscreen={false}
      options={{
        duration: 500,
        height: 300,
        indicators: true,
        interval: 6000,
      }}
      style={{
        maxWidth: '60vw',
        margin: '0 auto',
      }}
    >
      {content.map(project => (
      <SlideM project={project} />
      ))}
    </Slider>
  );
};


SliderM.propTypes = {
  content: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
        techno: PropTypes.array.isRequired,
        link: PropTypes.string.isRequired,
        demo: PropTypes.string.isRequired,
        etat: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
      })
  )
}
// == Export
export default SliderM;
