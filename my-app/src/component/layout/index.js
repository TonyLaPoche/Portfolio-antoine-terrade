// == Import
import { Outlet } from 'react-router-dom';
import Footer from '../footer';
import Header from '../header';
// == Composant
function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

// == Export
export default Layout;
