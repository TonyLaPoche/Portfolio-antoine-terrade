// == Import

import { Helmet } from 'react-helmet-async';
import { Card, Col, Icon, Row } from 'react-materialize';

// == Composant
function Page404() {
  return (
    <>
      <Helmet>
        <title>Pocket-Error</title>
        <meta name="description" content="Error page 404" />
      </Helmet>
      <div id="errorPage" className="container">
        <Row className="center">
          <Col m={12} s={12}>
            <Card
              actions={[
                <a key="1" href="/">
                  Retour à l'acceuil
                </a>,
              ]}
              className="blue darken-5"
              closeIcon={<Icon>close</Icon>}
              revealIcon={<Icon>more_vert</Icon>}
              textClassName="white-text"
              title="ERROR 404"
            >
              Bah alors.. on s'est perdu ?
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

// == Export
export default Page404;
