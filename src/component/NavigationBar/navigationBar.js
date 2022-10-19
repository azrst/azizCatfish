/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */

import { useEffect, useState } from 'react';
import Image from 'next/image';

export const navigationBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [position, setPosition] = useState(0);
  const [navTextBlack, setNavTextBlack] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleScroll = () => {
    const positionWindow = window.pageYOffset;
    if (positionWindow > 50) setNavTextBlack(true);
    else setNavTextBlack(false);
    setPosition(positionWindow);
  };

  const togleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav
      className={`fixed top-0 bottom-0 right-0 left-0 ${
        position > 50 || showMenu
          ? `bg-header-rgba h-fit animate-fadeOut`
          : 'bg-transparent animate-fadeIn'
      } border-gray-200 px-2 py-2.5 z-10`}>
      <div className={`flex flex-wrap justify-between items-center mx-auto `}>
        <a href="/" className="flex items-center">
          <Image src={'/logo.gif'} width={40} height={40} />
          <span
            className={`self-center text-xl font-semibold whitespace-nowrap ${
              position > 50 || showMenu ? 'text-black' : 'text-white'
            } p-4`}>
            Aziz Catfish
          </span>
        </a>
        <button
          onClick={togleMenu}
          data-collapse-toggle="navbar-default"
          type="button"
          className={`inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden border border-2 ${
            navTextBlack || showMenu ? 'border-black' : 'border-white'
          } border-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600`}
          aria-controls="navbar-default"
          aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"></path>
          </svg>
        </button>
        <div
          className={`${
            showMenu ? '' : 'hidden'
          } w-full md:block md:w-auto md:h-1/2 ease-in duration-100`}
          id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 lg:bg-transparent rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
            <li>
              <a
                onClick={() => {
                  setShowMenu(false);
                }}
                // href="#"
                className={`block py-2 pr-4 pl-3 text-1xl font-semibold ${
                  navTextBlack ? 'text-black' : 'text-white'
                } rounded md:bg-transparent md:p-0 ${
                  navTextBlack ? 'hover:text-white' : 'hover:text-gray-400'
                }`}>
                Home
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setShowMenu(false);
                }}
                href="#section-about"
                className={`block py-2 pr-4 pl-3 text-1xl font-semibold ${
                  navTextBlack ? 'text-black' : 'text-white'
                } rounded md:bg-transparent md:p-0 ${
                  navTextBlack ? 'hover:text-white' : 'hover:text-gray-400'
                }`}>
                About
              </a>
              {/* </Link> */}
            </li>
            {/* <li>
              <a
                onClick={() => {
                  setShowMenu(false);
                }}
                href="#"
                className={`block py-2 pr-4 pl-3 text-1xl font-semibold ${
                  navTextBlack ? 'text-black' : 'text-white'
                } rounded md:bg-transparent md:p-0 ${
                  navTextBlack ? 'hover:text-white' : 'hover:text-gray-400'
                }`}>
                Services
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setShowMenu(false);
                }}
                href="#"
                className={`block py-2 pr-4 pl-3 text-1xl font-semibold ${
                  navTextBlack ? 'text-black' : 'text-white'
                } rounded md:bg-transparent md:p-0 ${
                  navTextBlack ? 'hover:text-white' : 'hover:text-gray-400'
                }`}>
                Pricing
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setShowMenu(false);
                  // route('https://google.com');
                }}
                href="#"
                className={`block py-2 pr-4 pl-3 text-1xl font-semibold ${
                  navTextBlack ? 'text-black' : 'text-white'
                } rounded md:bg-transparent md:p-0 ${
                  navTextBlack ? 'hover:text-white' : 'hover:text-gray-400'
                }`}>
                Contact
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default navigationBar;
