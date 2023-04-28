import React from 'react';
import PropTypes from 'prop-types';
import TypeWriter from '../../utilities/TypinEffect';
const PresentationAera = ({ id, title, picture, position }) => {
  return (
    <section
      id="home"
      className={`flex pt-20 justify-center bg-gradient-to-r from-[#E6E5E3] items-center mb-10 ${position === 'left' ? 'bg-white' : 'bg-blue-500'
        } ${position === 'right' ? 'flex-row' : 'flex-row-reverse'}`}
    >
      <div className="md:w-full p-4 md:p-none ">
        <h1 className="text-[60px] font-bold mb-4">Développeur Web</h1>
        <div className="flex gap-4 justify-start">
          <div className="p-2  border-2 border-cyan-500 bg-white text-cyan-500 rounded-full">
            React
          </div>
          <div className="p-2  border-2 border-red-500 bg-white text-red-500 text-center rounded-full">
            Java
          </div>
          <div className="p-2  border-2 border-green-500 bg-white text-green-500 rounded-full">
            Node.js
          </div>
          <div className="p-2  border-2 border-blue-500 bg-white text-blue-500 rounded-full">
            GitHub
          </div>
        </div>

        <p className="my-5 mb-8 text-left">
          Je suis <TypeWriter />
        </p>
      </div>
      <div className=" hidden md:flex md:w-auto md:h-full ml-40">
        <img
          src={picture}
          alt="card"
          className={
            id === 'presentation-content-1'
              ? 'rounded-full w-[60%] ml-20'
              : 'responsive-img w-[30%]'
          }
          style={{ float: position, margin: '1rem' }}
          key={id + '-picture-' + title}
        />
      </div>
    </section>
  );
};

PresentationAera.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string,
};

export default PresentationAera;
