import { AiFillGithub, AiFillLinkedin, AiOutlineMenu } from 'react-icons/ai';
import { BsDiscord } from 'react-icons/bs';
import { VscChromeClose } from 'react-icons/vsc'
import { useState } from 'react';
import profilPicture from '../../../assets/SVG/profil.jpeg';
import DropdownMenu from './dropDownMenu';

const Nav2 = () => {
  const [asideNav, setAsideNav] = useState(false);
  const [showProjects, setShowProjects] = useState(false);

  return (
    <>
      <div className="h-16 relative">
        <nav
          className=" fixed p-3 bg-blue-500 flex justify-between items-center"
        //   style={{ zIndex: '990' }}
        >
          <button
            onClick={() => setAsideNav((s) => !s)}
            className="p-1 border-2 border-solid border-blue-700  focus:bg-blue-500"
          >
            <AiOutlineMenu style={{ height: 30, width: 30 }} />
          </button>
          <div className="flex justify-center">
            <a href="/#root" className="font-bold text-4xl">
              Antoine Terrade
            </a>
          </div>
          <div className="flex justify-between ">
            <a
              style={{ display: 'flex', alignItems: 'center' }}
              href="https://github.com/TonyLaPoche"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub style={{ height: 30, width: 30 }} />
            </a>
            <a
              style={{ display: 'flex', alignItems: 'center' }}
              href="https://www.linkedin.com/in/antoine-terrade-web/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin style={{ height: 30, width: 30 }} />
            </a>
            <a
              style={{ display: 'flex', alignItems: 'center' }}
              href="https://discord.gg/zkeCnAsByF"
              target="_blank"
              rel="noreferrer"
            >
              <BsDiscord style={{ height: 30, width: 30 }} />
            </a>
          </div>
        </nav>
      </div>
      <div
        id="sidenav-overlay"
        className={`${
          asideNav ? 'block' : 'hidden'
        } bg-black opacity-50 h-screen w-screen fixed`}
        style={{ zIndex: '1' }}
        onClick={() => setAsideNav((s) => !s)}
      />

      <aside
        className={`fixed top-0 h-screen w-[80vw] md:w-[40vw] bg-slate-200 left-0 transition-transform  duration-500 transform ${asideNav ? 'translate-x-0' : '-translate-x-full'} ${asideNav ? '' : 'pointer-events-none'}
        `}
        style={{
          zIndex: '991',
          boxShadow: '0 2px 2px 0 rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.12),0 1px 5px 0 rgba(0,0,0,0.2)'
        }}
      >
        <div id='asider-head' className='w-full h-[330px] bg-cover bg-no-repeat bg-center bg-[url(https://materializecss.com/images/office.jpg)] flex flex-col justify-center items-center  '>
            <div className='absolute right-4 top-4'>
            <button 
            style={{ color:"white"}}
            className='p-2 bg-blue-600 focus:bg-blue-500 rounded-full '
            onClick={() => {setAsideNav((s) => !s)}}
            >
                <VscChromeClose color='white' style={{ height: 30, width: 30 }} />
            </button>
            </div>
            <div className='w-[125px] h-[125px] rounded-full  bg-slate-500'>
                <img src={profilPicture} alt="" className='rounded-full' />
            </div>
            <p className='text-2xl font-bold shadow-slate-800 mt-4'>Développeur Web</p>
        </div>
        <div id="aside-body">
        <div className="flex flex-col divide-y-2 divide-solid divide-slate-500">
          <a href="/">Accueil</a>
          <a href="/">About</a>
          
          <DropdownMenu />
        </div>
      </div>

      </aside>
    </>
  );
};

export default Nav2;
