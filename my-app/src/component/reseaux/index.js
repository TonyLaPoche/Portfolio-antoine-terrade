// == Import
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { BsDiscord } from 'react-icons/bs';
import Contact from '../contact';

// == Composant
const Reseaux = () => {
  return (
    <section
      id="contact-reseaux"
      className="h-full lg:px-10 xl:px-52  2xl:px-74 lg:py-28 py-10 flex flex-col lg:flex-row "
    >
      <div className="mx-auto  bg-gradient-to-r from-[#E6E5E3] shadow-lg lg:rounded-l-lg px-5 pt-5 pb-10 text-gray-800 w-full lg:w-8/12">
        <div className="w-full">
          <p className="text-3xl font-bold text-center">Où me contacter ?</p>
        </div>
        <div className="w-full mb-10">
          <div className="text-3xl text-left leading-tight h-3">"</div>
          <p className="text-gray-600 text-center px-5 mb-2 whitespace-pre-line">
            Vous pourrez me retrouver sur bon nombre de réseaux sociaux, voici une petite liste :
          </p>
          <div className="text-3xl text-right leading-tight h-3">"</div>
          <div className="container p-4  mx-auto ">
            <ul className="flex flex-col gap-4 items-start justify-center tracking-wider font-medium ">
              <li className="flex flex-row gap-2 justify-center items-center">
                <a
                  href="https://www.linkedin.com/in/antoine-terrade-web/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <AiFillLinkedin className="w-10 h-10 transition-colors ease delay-50  fill-sky-500  hover:fill-slate-800" />
                </a>
                <p className="w-auto text-center text-sm">
                  Job board mais aussi lieu d'échange entre professionnels.
                </p>
              </li>
              <li className="gap-2 flex flex-row justify-center items-center">
                <a
                  href="https://github.com/TonyLaPoche"
                  rel="noreferrer"
                  target="_blank"
                >
                  <AiFillGithub className="w-10 h-10 transition ease-in-out fill-slate-700  hover:fill-slate-900" />
                </a>
                <p className="w-auto  text-center text-sm">
                  N'hésitez pas à explorer mes projets.
                </p>
              </li>
              <li className="gap-2 flex flex-row justify-center items-center">
                <a
                  href="https://discord.gg/zkeCnAsByF"
                  rel="noreferrer"
                  target="_blank"
                >
                  <BsDiscord className="w-10 h-10 transition ease-in-out fill-blue-800  hover:fill-slate-800" />
                </a>
                <p className="w-auto text-center text-sm">
                  Retrouvez moi sur ma plateforme préférée, j'y suis connecté très souvent.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="relative w-full  lg:h-auto lg:w-5/12 lg:shadow-lg lg:rounded-r-lg overflow-hidden">
        <Contact />
      </div>
    </section>
  );
};

// == Export
export default Reseaux;
