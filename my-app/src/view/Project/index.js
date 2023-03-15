// == Import
// import PropTypes from 'prop-types';
import Techno from './techno';
import fakeProps from '../../data/fake.js';
import { useLocation } from 'react-router-dom';
import { Card, CardTitle, Col, Row } from 'react-materialize';
import BadgeM from './badge';
import { isMobile } from 'react-device-detect';

// console.log(fakeProps);
const projects = fakeProps[2].content;
// == Composant
const Project = () => {
  const location = useLocation();
  const slug = location.pathname.split('/').pop();
  const data = projects.filter((proj) => proj.id === slug)[0];
  //   console.log(data.techno);

  return (
    <div id="projects" className="container">
      <h2 className="center">MON PROJET DE TEST</h2>

      <div className="center">
        {data.techno.map((t) => (
          <Techno key={t} techno={t} />
        ))}
      </div>
      <Row>
        <Col m={12} s={12}>
          <Card
            horizontal={!isMobile}
            actions={[
              <a key="repos" href={data.link} target="_blank" rel="noreferrer">
                Repos
              </a>,
              <a key="demo" href={data.demo} target="_blank" rel="noreferrer">
                Démo
              </a>,
            ]}
            header={
              <CardTitle image={data.picture}>
                <BadgeM etat={'terminé'} />
              </CardTitle>
            }
          >
            {data.description}
          </Card>
        </Col>
      </Row>
    </div>
  );
};

// == Export

Project.propTypes = {
  //   data: PropTypes.array,
};

export default Project;
