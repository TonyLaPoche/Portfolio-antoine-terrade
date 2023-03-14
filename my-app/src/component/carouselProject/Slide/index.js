// == Import
import { Slide, Caption } from 'react-materialize';

// == Composant
const SlideM = ({ project }) => {
  return (
    <Slide
    image={
      <img
        alt={project.alt}
        src={project.picture}
        className="responsive-img"
      />
    }
  >
    <Caption placement="center">
      <h3>{project.title}</h3>
    </Caption>
  </Slide>
  );
}

// == Export
export default SlideM;