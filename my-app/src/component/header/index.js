// == Import

// import Nav2 from './navTailWinf';
import NavBar from './navTailWinf/navBar';

// == Composant
function Header() {
  return (
    <header id='home' className="z-20">
      {/* <Nav2 /> */}
      <NavBar />
    </header>
  );
}

// == Export
export default Header;
