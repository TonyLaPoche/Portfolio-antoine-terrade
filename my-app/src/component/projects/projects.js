import Project from "./project";

import fakeProps from "../../data/fake";


const creations = fakeProps[2].content

const ProjectsGrid = () => {



    return (
        <>
            <h2 className="text-center text-6xl mb-12">Mes projets</h2>

            <div className="flex flex-row justify-center flex-wrap  border-gray-200 rounded-lg shadow-sm dark:border-gray-100 gap-4 ">
                {
                    creations.map((creation) => <Project
                        key={creation.id}
                        title={creation.title}
                        description={creation.description}
                        link={creation.link}
                        alt={creation.alt}
                        techno={creation.techno}
                        demo={creation.demo}
                        etat={creation.etat}
                        picture={creation.picture}
                    />)
                }
            </div>

        </>
    )
}
export default ProjectsGrid;