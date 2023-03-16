import { useState } from 'react';
import { Transition } from '@headlessui/react';
import {FiChevronUp, FiChevronDown} from 'react-icons/fi'
const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const projects = ['projet 1', 'projet 2', 'projet 3'];

  return (
    <div className="relative">
      <button
        type="button"
        className="flex items-center gap-2  focus:bg-transparent font-bold text-gray-700 "
        id="options-menu"
        aria-haspopup="true"
        aria-expanded="true"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>Projects</span>
       {isOpen ? <FiChevronUp /> : <FiChevronDown />}
      </button>

      <Transition
        show={isOpen}
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <div className="origin-top-right absolute right-0 mt-0 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {projects.map((project, index) => (
              <a
                key={index}
                href="#!"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                {project}
              </a>
            ))}
          </div>
        </div>
      </Transition>
    </div>
  );
}

export default DropdownMenu
