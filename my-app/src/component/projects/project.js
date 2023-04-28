const Project = ({ title, description, link, alt, techno, demo, etat, picture }) => {
    return (
        <>
            <div
                className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:border-gray-100 "
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

                    <img className="object-cover w-full rounded-lg h-86  md:h-auto md:w-2/3 md:mx-auto md:rounded-none md:rounded-l-lg border border-gray-400" src={picture} alt={alt} />

                    <h6 className="mt-4 text-center text-2xl text-gray-900">Techno</h6>
                    <div className="flex items-center justify-evenly my-4">
                        {techno.map((techno, index) => {
                            return (
                                <p className="mb-3 text-gray-800 text-sm font-bold uppercase" key={index}>
                                    {techno} <br />
                                </p>
                            )
                        }
                        )}
                    </div>

                    <div className="flex items-center justify-evenly mb-4">

                        <a href={demo} className="text-white dark:text-black bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-300 dark:hover:bg-gray-100 dark:focus:ring-gray-400 dark:border-gray-300">
                            Demo
                        </a>
                        <a
                            href={link}
                            type="button"
                            className="text-white dark:text-black bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-300 dark:hover:bg-gray-100 dark:focus:ring-gray-400 dark:border-gray-300"
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