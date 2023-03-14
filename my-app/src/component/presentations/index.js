import React from 'react';
import { Card, Col, Row } from 'react-materialize';
import PropTypes from 'prop-types';

function PresentationAera({ id, title, description, picture, position }) {
  return (
    <Card key={id + '-container-' + title} >
        <Row key={id + '-row-' + title}>
          <Col s={12} key={id + '-col-' + title} className="center">
            <h3 className="center" key={id + '-cardTitle-' + title}>
              {title}
            </h3>
          </Col>
          <Col s={12} m={12} key={id + '-col1-' + title}>
            <div key={id + '-description-' + title}>
              <img
                src={picture}
                alt="card"
                className={id === "presentation-content-1" ? "circle responsive-img" :  "responsive-img" }
                style={{ float: position, margin:"1rem",width:"30%" }}
                key={id + '-picture-' + title}
              />
              {description.map(elt => (
               
               <p key={elt} style={{marginBottom:"1rem"}}>{elt} </p>
               
              ))}
            </div>
          </Col>
        </Row>
    </Card>
  );
}

PresentationAera.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  picture: PropTypes.string,
};

export default PresentationAera;
