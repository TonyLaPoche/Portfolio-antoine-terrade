// == Import

import Nav from './nav';
import Nav2 from './navTailWinf';

const navElements = [
  {
    id: 1,
    name: 'présentation',
    path: '#presentation',
  },
  {
    id: 2,
    name: 'Mes créations',
    path: '#projets',
  },
  {
    id: 3,
    name: 'Mes réseaux',
    path: '#contact',
  },
];

// == Composant
function Header() {
  return (
    <header>
      {/* <Nav navElements={navElements} /> */}
      <Nav2 />
    </header>
  );
}

// == Export
export default Header;
