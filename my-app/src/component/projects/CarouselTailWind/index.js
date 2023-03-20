import { useEffect, useState } from 'react';
import fakeProps from '../../../data/fake';
// console.log(fakeProps[2].content);

const data = fakeProps[2].content;

const CarouselM = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds + 1);

      if (seconds === 5) {
        setCurrentImage(
          currentImage === data.length - 1 ? 0 : currentImage + 1,
        );
        setSeconds(0);
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds, currentImage]);

  return (
    <>
      <div id="carouselExampleCaptions" className="relative max-w-xs md:max-w-[70vh] xl:max-w-[60vh] mx-auto">
        <div className="absolute right-0 bottom-0 left-0 z-[2] mb-4 flex list-none justify-center p-0 gap-x-3">
          {data.map((img, index) => {
            // console.log(index === currentImage)
            return (
              <button
                key={index + '-button'}
                type="button"
                onClick={() => setCurrentImage(index)}
                className={`${
                  index === currentImage ? 'bg-blue-900' : 'bg-white'
                } mb-4 focus:bg-blue-900 focus:ring-blue-700 rounded box-content h-[8px] w-[2%] flex-initial cursor-pointer border-1  border-solid border-transparent ring-offset-2 ring-2 ring-blue-600`}
              />
            );
          })}
        </div>
        <div className="relative overflow-hidden after:clear-both after:block after:content-['']">
          <div className="p-4 relative w-full ">
            <a href={`/projet/${data[currentImage].id}`}>
              <img
                src={data[currentImage].picture}
                className="block hover:shadow-xl  ring-4 ring-offset-4 ring-slate-500 transition-shadow rounded-lg shadow-lg w-full"
                alt={data[currentImage].alt}
              />
            </a>
            <div
              className="absolute inset-x-[15%] bottom-20 p-5 text-center text-white block bg-slate-500/30 rounded-2xl "
              style={{ textShadow: '1px 1px 1px grey' }}
            >
              <h5 className="text-3xl text-slate-800 mb-2">
                {data[currentImage].title}
              </h5>
              <p className=" truncate text-center text-gray-800 text-xl ">
                {data[currentImage].description[0]}
              </p>
            </div>
          </div>
        </div>
        <button
          className="absolute bg-transparent focus:bg-transparent top-0 bottom-0 left-0 z-[1] flex w-[20%] items-center justify-center border-0 p-0 text-center text-blue-800 opacity-80 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-blue-800 hover:no-underline hover:opacity-90 hover:outline-none focus:text-blue-800 focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          type="button"
          onClick={() => {
            currentImage > 0
              ? setCurrentImage(currentImage - 1)
              : setCurrentImage(data.length - 1);
          }}
        >
          <span className="inline-block h-8 w-8 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </span>
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Previous
          </span>
        </button>
        <button
          className="absolute bg-transparent focus:bg-transparent top-0 bottom-0 right-0 z-[1] flex w-[20%] items-center justify-center border-0 p-0 text-center text-blue-800 opacity-80 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-blue-800 hover:no-underline hover:opacity-90 hover:outline-none focus:text-blue-800 focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          type="button"
          onClick={() => {
            currentImage < data.length - 1
              ? setCurrentImage(currentImage + 1)
              : setCurrentImage(0);
          }}
        >
          <span className="inline-block h-8 w-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Next
          </span>
        </button>
      </div>
    </>
  );
};

export default CarouselM;
