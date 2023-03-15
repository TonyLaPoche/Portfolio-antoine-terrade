// == Import
// TODO - liens utiles , CV , Page Site-map

import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import scrollWithOffset from '../../utilities/ScollWithOfset';

// == Composant
const Footer = () => {
  return (
    <footer className="page-footer light-blue">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Déjà fini ?</h5>
            <p className="grey-text text-lighten-4">
              Retrouver tout les liens utiles dans cette section
            </p>
            <p>
              Espèrent que ce portefolio vous aura permit de mieux me connaitre.
            </p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Lien utiles</h5>
            <ul>
              <li>
                <Link className="grey-text text-lighten-3" to="/site-map">
                  Site map
                </Link>
              </li>
              <li>
                <HashLink
                  className="grey-text text-lighten-3"
                  smooth
                  to="/#projets"
                  scroll={(el) => scrollWithOffset(el)}
                >
                  Projets
                </HashLink>
              </li>
              <li>
                <Link
                  className="grey-text text-lighten-3"
                  to="https://github.com/TonyLaPoche"
                >
                  Github
                </Link>
              </li>
              <li>
                <HashLink
                  className="grey-text text-lighten-3"
                  smooth
                  to="/#projets"
                  scroll={(el) => scrollWithOffset(el)}
                >
                  Contact
                </HashLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">© 2023 Terrade Antoine</div>
      </div>
    </footer>
  );
};

// == Export
export default Footer;
