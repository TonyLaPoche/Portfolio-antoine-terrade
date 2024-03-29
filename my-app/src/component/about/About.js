// https://www.dupuisweb.com/_next/image?url=%2Fimg%2Fbackground.jpeg&w=1080&q=75
import profilPicture from '../../assets/SVG/profil.jpeg';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { BsDiscord } from 'react-icons/bs';

const About = () => {
  return (
    <>
      <section
        id="about"
        className="h-full lg:px-10 xl:px-52  2xl:px-74 lg:py-28 py-10 flex flex-col-reverse lg:flex-row"
      >
        <div className="mx-auto bg-gradient-to-r from-[#E6E5E3] shadow-lg lg:rounded-l-lg px-5 pt-5 pb-10 text-gray-800 w-full lg:w-8/12">
          <div className="md:hidden w-full pt-1 pb-5">
            <div className=" overflow-hidden relative  rounded-full w-40 h-40 -mt-16 mx-auto shadow-lg">
              <img
                src={profilPicture}
                alt=""
                className=" absolute z-10 h-[100%] w-[100%]"
              />
            </div>
          </div>
          <div className="w-full">
            <p className="text-3xl font-bold text-center">À propos</p>
          </div>
          <div className="w-full mb-10">
            <div className="text-3xl leading-tight h-3">"</div>
            <p className="text-gray-600 text-justify px-5 mb-2 whitespace-pre-line">
              Je m'appelle Antoine Terrade, j'ai 26 ans et je suis concepteur d’application. Je suis passionné par les technologies du web, en particulier par le développement front-end et back-end avec Javascript.
            </p>
            <p className="text-gray-600 text-justify px-5 mb-2 whitespace-pre-line">
              Ayant récemment fait une reconversion professionnelle dans ce domaine, je continu chaque jour à découvrir les spécificités de ce métier et les langages qu’il comprend. J’ai obtenu au fil de mes formations et projets personnels, une solide expérience en React, Redux, et Node.js. Je continu aujourd’hui à me former en Java.
            </p>
            <p className="text-gray-600 text-justify px-5 mb-2 whitespace-pre-line">
              Je suis actuellement à la recherche d'opportunités professionnelles utilisant les technologies précédemment citées. Vous pouvez découvrir l'ensemble de mes projets sur ce portfolio en ligne.
            </p>
            <p className="text-gray-600 text-justify px-5 mb-2 whitespace-pre-line">
              Si mon profil vous intéresse, n'hésitez pas à me contacter !
            </p>
            <div className="text-3xl text-right leading-tight h-3">"</div>
            <div className="w-full">
              <p className="text-md font-extrabold text-center">
                Antoine Terrade
              </p>
            </div>
            <div className="container p-5  mx-auto lg:flex space-y-5 lg:space-y-0 items-baseline justify-center">
              <ul className="flex justify-between tracking-wider font-medium ">
                <li className="px-2">
                  <a
                    href="https://github.com/TonyLaPoche"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <AiFillGithub
                      className="w-5 h-5 transition ease-in-out fill-slate-400 hover:fill-slate-800"
                      style={{ height: 30, width: 30 }}
                    />
                  </a>
                </li>
                <li className="px-2">
                  <a
                    href="https://discord.gg/zkeCnAsByF"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <BsDiscord
                      className="w-5 h-5 transition ease-in-out fill-slate-400 hover:fill-slate-800"
                      style={{ height: 30, width: 30 }}
                    />
                  </a>
                </li>
                <li className="px-2">
                  <a
                    href="https://www.linkedin.com/in/antoine-terrade-web/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <AiFillLinkedin
                      className="w-5 h-5 transition ease-in-out fill-slate-400 hover:fill-slate-800"
                      style={{ height: 30, width: 30 }}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="relative w-full h-44 lg:h-auto lg:w-5/12 lg:shadow-lg lg:rounded-r-lg overflow-hidden">
          <img
            src="https://www.dupuisweb.com/_next/image?url=%2Fimg%2Fbackground.jpeg&w=1080&q=75"
            style={{
              position: 'absolute',
              height: '100%',
              width: '100%',
              left: '0',
              top: '0',
              right: '0',
              bottom: '0',
              objectFit: 'cover',
              color: 'transparent',
            }}
            alt=""
          />
        </div>
      </section>
    </>
  );
};

export default About;
