import Badge from "../badge";

const Project = ({ title, description, link, alt, techno, demo, etat, picture }) => {
    return (
        <>
            <div
                className="flex bg-white border border-gray-200 rounded-lg shadow  md:max-w-xl hover:border-gray-100"
            >

                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5
                        className="mb-2 text-3xl font-bold tracking-tight text-gray-900 text-center">{title}
                    </h5>

                    {description.map((phrase, index) => {
                        return (
                            <p className="mb-3 font-normal text-gray-800  text-justify" key={index}>
                                {phrase} <br />
                            </p>
                        )
                    }
                    )}

                    <img className="object-cover w-full rounded-lg h-86  md:h-auto md:w-2/3 md:mx-auto md:rounded-lg border border-gray-400" src={picture} alt={alt} />

                    {/* <h6 className="mt-4 text-center text-2xl text-gray-900">Techno</h6> */}
                    <div className="flex flex-wrap items-center justify-center gap-2 my-4">
                        {
                            techno.map((tech, index) => <Badge key={index + tech} techno={tech} />)
                        }
                    </div>

                    <div className="flex items-center justify-evenly mb-4">


                        {demo != null &&
                            <a
                                href={demo}
                                target="_blank"
                                rel="noreferrer"
                                className="text-white uppercase bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-3 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Démo
                            </a>
                        }

                        <a
                            href={link}
                            target="_blank" rel="noreferrer"
                            type="button"
                            className="text-white uppercase font-bold bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-3 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Repos
                        </a>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Project;