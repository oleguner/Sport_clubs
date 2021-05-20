import React from 'react';

import mainPhoto from '../img/main_photo.png';
import mainIcon1 from '../img/main_icon1.png';
import mainIcon2 from '../img/main_icon2.png';
import mainIcon3 from '../img/main_icon3.png';

function Main() {
  return (
    <main className="bg-gradient-to-br from-transparent to-green-50">
      <section className="mx-16 py-40 flex justify-between">
        <div className="">
          <img
            src={mainPhoto}
            alt="fitness girl"
            className="main-photo"
          />
        </div>

        <div className="">
          <h1 className="text-5xl font-medium text-right">
            Online booking for training
        </h1>
          <div className="text-2xl text-left">

            <div className="relative my-16">
              <img
                className="main-icon"
                src={mainIcon1}
                alt="tablet icon"
              />
              <p className="main-list-item">
                Find out the training schedule in sports clubs
            </p>
            </div>

            <div className="relative my-16">
              <img
                className="main-icon"
                src={mainIcon2}
                alt="tablet icon"
              />
              <p className="main-list-item">
                Sign up for training anytime
            </p>
            </div>

            <div className="relative my-16">
              <img
                className="main-icon"
                src={mainIcon3}
                alt="tablet icon"
              />
              <p className="main-list-item">
                Choose a subscription and pay by credit card
            </p>
            </div>

          </div>
        </div>
      </section>

      <section className="mx-16">
        <label htmlFor="clubs-choice">
          <h2 className="text-4xl font-bold my-8">
            Choose a club
          </h2>
        </label>
        <form action="#" className="relative w-96">
          <input
            id="clubs-choice"
            type="text"
            placeholder="your sport"
            className="font-bold uppercase rounded-lg w-96 py-4 pl-4 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline lg:text-sm text-xs border-2 focus:border-gray-500 pr-6"
          />

          <svg className="w-6 h-6 text-gray-500 absolute right-0.5 search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
          </svg>

        </form>
      </section>
    </main>
  );
};

export default Main;
