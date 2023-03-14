// == Import
import PropTypes from 'prop-types';

// == Composant
function PresentationAera({ id, title, description, picture }) {
  return (
    <div className="section" key={id + '-container-' + title}>
      <h4 key={id + '-title-' + title} className="center">
        {title}
      </h4>
      <div
        className="col s12 m8 offset-m2 l6 offset-l3"
        key={id + '-container-' + title}
      >
        <div
          className="card-panel grey lighten-5 z-depth-1"
          key={id + '-card-' + title}
        >
          <div className="row valign-wrapper" key={id + '-wrapper-' + title}>
            <div className="col s5 center" key={id + '-div-img-' + title}>
              <img
                src={picture}
                alt=""
                className="circle responsive-img"
                key={id + '-img-' + title}
              />
            </div>
            <div className="col s7" key={id + '-description-' + title}>
              <span
                className="black-text"
                key={id + '-description-span' + title}
              >
                {description}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti nulla reprehenderit reiciendis, dolorum voluptatem
                quidem aspernatur nostrum vel ipsam, quam est. Incidunt, ab
                expedita.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

PresentationAera.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  picture: PropTypes.string,
};

// == Export
export default PresentationAera;
