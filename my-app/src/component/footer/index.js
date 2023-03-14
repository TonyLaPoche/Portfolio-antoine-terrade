// == Import
import { HashLink } from 'react-router-hash-link';

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
            <h5 className="white-text">Links</h5>
            <ul>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  Site-map
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  Projets
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  Github
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          © 2023 Terrade Antoine
          <HashLink
            className="btn-floating btn-small blue darken-2 right pulse"
            style={{ marginLeft: '15px' }}
            smooth
            to="/#root"
          >
            <i className="material-icons">arrow_upward</i>
            {/* // Todo géré haslink de l'arrow qui remonte en haut de page */}
          </HashLink>
        </div>
      </div>
    </footer>
  );
};

// == Export
export default Footer;
