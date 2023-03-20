// == Import
// import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import fakeProps from '../../data/fake.js';
import Techno from './techno';
import BadgeM from './badge';

const projects = fakeProps[2].content;
// == Composant
const Project = () => {
  const location = useLocation();
  const slug = location.pathname.split('/projet/').pop();
  const data = projects.filter((proj) => proj.id === slug)[0];

  return (
    <div id="projects" className="container md:pt-5">
      <h2 className="center text-3xl my-3 uppercase">{data.title}</h2>
      <div className="flex justify-center">
        {data.techno.map((t, index) => (
          <Techno key={t + '' + index} techno={t} />
        ))}
      </div>
      <div className="mx-auto mb-5">
        <div className="w-full ">
          <div className="relative flex flex-col md:flex-row m-4 border-2 border-solid">
            <div className="relative md:w-full">
              <img src={data.picture} alt={data.alt} className="w-full" />
              <BadgeM etat={data.etat} />
            </div>
            <div className="p-4 flex flex-col justify-between divide-y">
              <div className="leading-5">
                {data.description.map((speech, index) => (
                  <p className="mb-2 text-justify" key={`${index}-speech`}>
                    {speech}
                  </p>
                ))}
              </div>
              <div className="flex justify-evenly pt-2">
                <a
                  href={data.link}
                  className="text-blue-700 hover:text-blue-500 text-xl hover:underline underline-offset-1"
                  target="_blank"
                  rel="noreferrer"
                >
                  {' '}
                  Repos
                </a>
                <a
                  href={data.demo}
                  className="text-blue-700 hover:text-blue-500 text-xl hover:underline underline-offset-1"
                  target="_blank"
                  rel="noreferrer"
                >
                  {' '}
                  Démo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// == Export

Project.propTypes = {
  //   data: PropTypes.array,
};

export default Project;
