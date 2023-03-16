import React from 'react';
import AutoTyping, { BlinkCursor } from 'react-auto-typing';
import PropTypes from 'prop-types';
import { HashLink } from 'react-router-hash-link';
import scrollWithOffset from '../../utilities/ScollWithOfset';

const PresentationAera = ({ id, title, description, picture, position }) => {
  return (
    <div
      className={`flex py-20 justify-center bg-gradient-to-r from-[#E6E5E3] items-center mb-10 ${
        position === 'left' ? 'bg-white' : 'bg-blue-500'
      } ${position === 'right' ? 'flex-row' : 'flex-row-reverse'}`}
    >
      <div className="md:w-full p-4 md:p-none">
        <h3
          className="text-4xl text-left text-gray-400 font-bold "
          key={id + '-cardTitle-' + title}
        >
          Antoine Terrade
        </h3>
        <h1 className="text-[60px] font-bold">Développeur Web</h1>
        <div className="flex justify-evenly md:justify-start">
          <div className="p-2 md:mr-2 border-2 border-cyan-700 bg-cyan-500 rounded-full">
            React
          </div>
          <div className="p-2 md:mr-2 border-2 border-yellow-500 bg-yellow-300 rounded-full">
            Javascript
          </div>
          <div className="p-2 md:mr-2 border-2 border-green-800 bg-green-600 rounded-full">
            Node.js
          </div>
          <div className="p-2 md:mr-2 border-2 border-blue-400 bg-blue-200 rounded-full">
            GitHub
          </div>
        </div>
        <p className="my-5">
          <AutoTyping
            active // <boolean>
            textRef="Ambitieux, Créatif, Curieux" // <string>
            // writeSpeed={350} // <number>
            // deleteSpeed={150} // <number>
            delayToWrite={3500} // <number>
            delayToDelete={1500} // <number>
          />
          <BlinkCursor
            active // <boolean>
            blinkSpeed={500} // <number>
          />
        </p>
        <HashLink
          className="px-5 py-4 rounded-lg text-center bg-blue-500  focus:bg-blue-500 border-2 border-solid border-blue-500 text-white font-bold"
          smooth
          to={'/#contact'}
          scroll={(el) => scrollWithOffset(el)}
        >
          Embauchez moi !
        </HashLink>
        {/* // TODO Demandé si download un fichier de cette manière est une bonne pratique */}
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
    </div>
  );
};

PresentationAera.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  picture: PropTypes.string,
};

export default PresentationAera;
