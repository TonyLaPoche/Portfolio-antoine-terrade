// == Import

import { Helmet } from 'react-helmet-async';
import img404 from '../../assets/Peugeot-404-conv-red2.webp';

// == Composant
function Page404() {
  return (
    <>
      <Helmet>
      <meta
          property="og:title"
          content="Terrade Antoine - Développeur Web  React / Node"
        />
        <meta
          property="og:description"
          content="Portfolio, Antoine Terrade développeur web, vous présente son portfolio avec ses projets et ses moyens de contact"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://terrade-antoine.web.app" />
        <meta
          property="og:image"
          content="https://terrade-antoine.web.app/static/media/profil.36f4a70f8b9d03e433ff.jpeg"
        />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:site" content="Portfolio" />
        <meta
          name="twitter:title"
          content="Terrade Antoine - Développeur Web  React / Node"
        />
        <meta
          name="twitter:description"
          content="Portfolio, Antoine Terrade développeur web, vous présente son portfolio avec ses projets et ses moyens de contact"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image:src"
          content="https://terrade-antoine.web.app/static/media/profil.36f4a70f8b9d03e433ff.jpeg"
        />
        <meta name="theme-color" content="#FD0054" />
      </Helmet>
      <section
        id="error-pages"
        className="h-full lg:px-10 xl:px-24 lg:py-28 py-10 flex flex-col lg:flex-row "
      >
        <div className="mx-auto  bg-gradient-to-r from-[#E6E5E3] shadow-lg lg:rounded-l-lg px-5 pt-5 pb-10 text-gray-800 w-full lg:w-8/12">
          <div className="w-full">
            <p className="text-3xl font-bold text-center">On s'est perdu ?</p>
          </div>
          <div className="w-full mb-10">
            <div className="text-3xl float-right leading-tight h-3">"</div>
            <div className="text-3xl float-left leading-tight h-3">"</div>
            <p className="text-gray-600 text-center px-5 my-2 whitespace-pre-line">
              Ne vous inquiétez pas ! Cela arrive même au meilleur !
            </p>
            <div className="container p-4  mx-auto ">
              <ul className="flex flex-col gap-4 items-center justify-center tracking-wider font-medium ">
                <li className="flex flex-row justify-center items-center">
                  <a
                    href="/"
                    className="w-auto text-center text-xl hover:underline underline-offset-1"
                  >
                    Retour à l'accueil
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="relative w-full h-full lg:h-auto lg:w-5/12 lg:shadow-lg lg:rounded-r-lg overflow-hidden">
          <img
            src={img404}
            style={{
              position: 'absolute',
              height: '100%',
              width: '100%',
              left: '0',
              top: '0',
              right: '0',
              bottom: '0',
              objectFit: 'cover',
              color: 'transparent',
            }}
            alt=""
          />
        </div>
      </section>
    </>
  );
}

// == Export
export default Page404;
