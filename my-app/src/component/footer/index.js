// == Import
// TODO - liens utiles , CV , Page Site-map

import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import scrollWithOffset from '../../utilities/ScollWithOfset';

// == Composant
const Footer = () => {
  return (
    <footer className=" bg-white dark:bg-gray-900 border-gray-200 border-t block">
      <div className="container p-4">
        <div className="mb-5 mx-auto flex flex-col md:flex-row md:justify-between">
          <div className="flex flex-col justify-between">
            <h5 className="dark:text-white text-xl my-4">Déjà fini ?</h5>
            <p className=" dark:text-white ml-5">
              Retrouvez tous les liens utiles dans cette section.
            </p>
            <p className=" dark:text-white ml-5">
              J'espère que ce portefolio vous aura permis de mieux me connaître.
            </p>
          </div>
          <div className="flex flex-col justify-between mt-4 md:mt-0">
            <h5 className="dark:text-white text-xl my-4">Liens utiles</h5>
            <ul className=" dark:text-white ml-5">
              {/* <li> //TODO - a mettre en route
                <Link
                  className="text-white hover:underline underline-offset-1 italic"
                  to="/site-map"
                >
                  Site map
                </Link>
              </li> */}
              <li>
                <HashLink
                  className="dark:text-white hover:underline underline-offset-1 italic"
                  smooth
                  to="/#projets"
                  scroll={(el) => scrollWithOffset(el)}
                >
                  Projets
                </HashLink>
              </li>
              <li>
                <Link
                  className="dark:text-white hover:underline underline-offset-1 italic"
                  to="https://github.com/TonyLaPoche"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </Link>
              </li>
              <li>
                <HashLink
                  className="dark:text-white hover:underline underline-offset-1 italic"
                  smooth
                  to="/#contact"
                  scroll={(el) => scrollWithOffset(el)}
                >
                  Contact
                </HashLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t-2 ">
        <div className="dark:text-slate-300 m-2">© 2023 Terrade Antoine</div>
      </div>
    </footer>
  );
};

// == Export
export default Footer;
