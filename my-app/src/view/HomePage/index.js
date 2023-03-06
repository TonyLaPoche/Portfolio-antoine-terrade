import { Helmet } from 'react-helmet-async';
import './styles.scss';

// == Composant
export const Home = () => {
  return (
    <>
      <Helmet>
        <title>Pocket-Folio</title>
        <meta name="description" content="Home page description" />
      </Helmet>
      <main>body</main>
    </>
  );
};

// == Export
export default Home;
