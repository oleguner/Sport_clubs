import React, { useState } from 'react';
import logo from '../img/logo.png';

import { useDispatch, useSelector } from 'react-redux';
import { selectLang } from '../reducers/actions/clubsActions';

import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
};

const Header = () => {
  const dispatch = useDispatch();
  const lang = useSelector(state => state.clubs.lang);
  const [buttonText, setButtonText] = useState('RU');

  const handleLang = (e) => {
    const mainLangBtn = document.querySelector('#main-lang-button');
    const btnText = mainLangBtn.firstElementChild.textContent;
    mainLangBtn.firstElementChild.textContent = e.target.textContent;
    setButtonText(btnText);
    dispatch(selectLang(e.target.textContent));
  };

  return (
    <header className="shadow h-16 flex bg-skin-header-main fixed right-0 left-0 top-0 opacity-25 hover:opacity-100 transition duration-300 ease-in-out z-10">
      <div className="flex-auto flex justify-between items-center mx-16 ">
        <div>
          <img src={logo} alt="logo" />
        </div>

        <div className="inline-flex justify-center items-center">
          <div className="px-4">
            <Menu as="div" className="relative inline-block text-left">
              {({ open }) => (
                <>
                  <div className="w-16" id="main-lang-button">
                    <Menu.Button
                      className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-300 "
                    >
                      ENG
                    </Menu.Button>
                  </div>

                  <Transition
                    show={open}
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items
                      static
                      className="inline-flex justify-center origin-top-right absolute right-0 mt-2 w-16 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none font-medium"
                    >
                      <div className="w-full">
                        {/* <Menu.Item>
                          {({ active }) => (
                            <button
                              className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block px-4 py-2 text-sm w-full'
                              )}
                            >
                              UA
                            </button>
                          )}
                        </Menu.Item> */}
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              id="ru-lang-button"
                              className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block px-4 py-2 text-sm w-full'
                              )}
                              onClick={handleLang}
                            >
                              {buttonText}
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </>
              )}
            </Menu>
          </div>

          <div
            className="relative inline-block w-10 mr-2 align-middle select-none transition duration-300 ease-in w-10 h-10 mx-4"
          >

            <label
              htmlFor="toggle"
              className="transform -translate-x-1 block text-base text-skin-base cursor-pointer "
            >
              {lang === 'ENG' && 'THEME'}
              {lang === 'RU' && 'ГАММА'}
            </label>

            <input
              type="checkbox"
              name="toggle"
              id="toggle"
              className="toggle-checkbox absolute block w-4 h-4 rounded-full bg-white border-2 appearance-none cursor-pointer"
            />
            <label
              htmlFor="toggle"
              className="toggle-label block overflow-hidden h-4 rounded-full bg-skin-theme-toggle cursor-pointer"
            ></label>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
