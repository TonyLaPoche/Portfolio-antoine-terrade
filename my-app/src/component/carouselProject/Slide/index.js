// == Import
import { Slide, Caption } from 'react-materialize';

// == Composant
const SlideM = ({ project }) => {
  // console.log(project);
  return (
    <Slide
      image={
        <a href={`/project/${project.id}`}>
          <img
            alt={project.alt}
            src={project.picture}
            className="responsive-img"
          />
        </a>
      }
    >
      <Caption placement="center">
        <a href={`/project/${project.id}`}>
          <h3 className="blue-text dark-5">{project.title}</h3>
        </a>
      </Caption>
    </Slide>
  );
};

// == Export
export default SlideM;
