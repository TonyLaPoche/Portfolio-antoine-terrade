import React from 'react';
import AutoTyping, { BlinkCursor } from 'react-auto-typing';
import PropTypes from 'prop-types';
import { HashLink } from 'react-router-hash-link';
import scrollWithOffset from '../../utilities/ScollWithOfset';

const PresentationAera = ({ id, title, picture, position }) => {
  return (
    <section
      id="home"
      className={`flex py-20 justify-center bg-gradient-to-r from-[#E6E5E3] items-center mb-10 ${
        position === 'left' ? 'bg-white' : 'bg-blue-500'
      } ${position === 'right' ? 'flex-row' : 'flex-row-reverse'}`}
    >
      <div className="md:w-full p-4 md:p-none ">
        <h3
          className="text-4xl text-left text-gray-400 font-bold "
          key={id + '-cardTitle-' + title}
        >
          Antoine Terrade
        </h3>
        <h1 className="text-[60px] font-bold mb-4">Développeur Web</h1>
        <div className="flex gap-4 justify-start">
          <div className="p-2  border-2 border-cyan-500 bg-white text-cyan-500 rounded-full">
            React
          </div>
          <div className="p-2  border-2 border-yellow-500 bg-white text-yellow-500 text-center rounded-full">
            Javascript
          </div>
          <div className="p-2  border-2 border-green-500 bg-white text-green-500 rounded-full">
            Node.js
          </div>
          <div className="p-2  border-2 border-blue-500 bg-white text-blue-500 rounded-full">
            GitHub
          </div>
        </div>

        <p className="my-5 mb-8">
          <AutoTyping
            active // <boolean>
            textRef="Ambitieux, Créatif, Curieux" // <string>
            delayToWrite={3500} // <number>
            delayToDelete={1500} // <number>
          />
          <BlinkCursor
            active // <boolean>
            blinkSpeed={500} // <number>
          />
        </p>
        <HashLink
          className="px-5 py-4 mt-4 rounded-lg text-center bg-blue-500  focus:bg-blue-500 border-2 border-solid border-blue-500 text-white font-bold"
          smooth
          to={'/#contact'}
          scroll={(el) => scrollWithOffset(el)}
        >
          Embauchez moi !
        </HashLink>
        <a
          href="../../assets/CV/Terrade antoine.pdf"
          download="CV Antoine Terrade"
          className="ml-2 px-5 py-4 rounded-lg text-center border-2 focus:bg-white border-solid border-blue-500 bg-white text-blue-500 font-bold"
        >
          Mon Cv
        </a>
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
