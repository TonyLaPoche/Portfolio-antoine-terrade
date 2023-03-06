// == Import

import Nav from "./nav";

const navElements = [
  {
    id:1,
    name:"présentation",
    link:"presentation" 
  },
  {
    id:2,
    name:"Mes créations",
    link:"projets" 
  },
  {
    id:3,
    name:"Mes réseaux",
    link:"contact" 
  },
]

// == Composant
function Header() {
  return (
  <header>
    <Nav navElements={navElements} />
  </header>
  );
}

// == Export
export default Header;
