import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { isMobile } from 'react-device-detect';
import { BsDiscord } from 'react-icons/bs';

const Nav2 = () => {
  return (
    <>
      <div className="h-16">
        <nav className=" fixed ">
          <div className="relative h-full">
            <a href="/#root" className=" left-1/2 -translate-x-1/2">
              Antoine Terrade
            </a>
          </div>
          <div
            style={{
              position: 'absolute',
              right: 10,
              display: isMobile ? 'none' : 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              width: 200,
              height: '100%',
            }}
          >
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
    </>
  );
};

export default Nav2;
