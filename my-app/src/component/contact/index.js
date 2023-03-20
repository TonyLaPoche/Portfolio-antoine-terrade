// == Import
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

// == Composant
const Contact = () => {
  const form = useRef();
  const [onSubmit, setOnSubmit] = useState(false)
  const [isSubmit, setIsSubmit] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();
    // console.log(e);
    const data = {
      name: e.target[0].value,
      firstName: e.target[1].value,
      email: e.target[2].value,
      subject: e.target[3].value,
      message: e.target[4].value,
    };
    console.log(data);
    emailjs
      .sendForm(
        'portfolio',
        'template_jj2aouc',
        form.current,
        '4V0LgwT25oMKXfNOZ',
      )
      .then(
        (result) => {
          setOnSubmit(false)
          setIsSubmit(true)
          toast("Votre message à bien été envoyé.")
        },
        (error) => {
          setOnSubmit(false)
          toast("Votre message n'a pas été envoyé.")
        },
      );
  };
  return (
    <section className="bg-white ">
      <ToastContainer />
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 ">
          Contact
        </h2>
        <form ref={form} className="space-y-8" onSubmit={sendEmail}>
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Nom
            </label>
            <input
              type="name"
              name="name"
              className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
              placeholder="Votre Nom"
              required
            />
          </div>
          <div>
            <label
              htmlFor="firstName"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Prénom
            </label>
            <input
              type="firstName"
              name="firstName"
              className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
              placeholder="Votre Prénom"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
              placeholder="john@doe.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Sujet
            </label>
            <input
              type="text"
              name="subject"
              className="block p-3 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
              placeholder="Comment puis-je vous aider ?"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Votre message
            </label>
            <textarea
              name="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-900 white rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
              placeholder="Bonjour Antoine, ..."
            ></textarea>
          </div>
          <button
            type="submit"
            value="Send"
            onClick={() => {setOnSubmit(submit => !submit)}}
            className={`py-3 px-5 text-sm font-medium text-center text-white rounded-lg ${isSubmit ? 'bg-green-500' : 'bg-blue-500'} sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 `}
          >
            {onSubmit && 
            <svg aria-hidden="true" role="status" className="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
            </svg>
            }
            {isSubmit ? 'Message envoyé !' : 'Envoyer'}
          </button>
        </form>
      </div>
    </section>
  );
};

// == Export
export default Contact;
