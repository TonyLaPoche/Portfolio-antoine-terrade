// == Import

import { Helmet } from 'react-helmet-async';

// == Composant
function Page404() {
  return (
    <>
      <Helmet>
        <title>Pocket-Error</title>
        <meta name="description" content="Error page 404" />
      </Helmet>
      <div>Error 404</div>
    </>
  );
}

// == Export
export default Page404;
