import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchClubs, sortClubs } from '../reducers/actions/clubsActions';

import mainPhoto from '../img/main_photo.png';
import mainIcon1 from '../img/main_icon1.png';
import mainIcon2 from '../img/main_icon2.png';
import mainIcon3 from '../img/main_icon3.png';
import ClubsList from './ClubsList';
import ClubsSlider from './ClubsSlider';
import CitiesDropdown from './CitiesDropdown';

import { filtersEng } from '../activities';

function Main() {
  const dispatch = useDispatch();
  const clubs = useSelector(state => state.clubs.items);
  const sortedClubs = useSelector(state => state.clubs.sortedClubs);
  const city = useSelector(state => state.clubs.city);
  const cities = useSelector(state => state);
  // console.log(clubs, 'clubs');
  console.log(city, 'city');
  console.log(cities, 'cities');

  const [isListActive, setListActive] = useState(true);
  const [isSladerActive, setSliderActive] = useState(false);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    dispatch(fetchClubs());
  }, [dispatch]);

  useEffect(() => {
    if (inputValue.length === 0) {
      dispatch(sortClubs(clubs));
    }
  }, [inputValue, dispatch]);

  const handleClubsDisplay = (e) => {
    if (e.target.textContent === 'BY LIST') {
      setListActive(true);
      setSliderActive(false);
    }

    if (e.target.textContent === 'BY SLIDER') {
      setSliderActive(true);
      setListActive(false);
    }
  };

  const handleSearch = (e) => {
    setInputValue(e.target.value);
    const filtredClubs = clubs.filter(club => club.activity.find(el =>
      el.title.includes(e.target.value)
      || el.slug.includes(e.target.value)));
    dispatch(sortClubs(filtredClubs));
  };

  const handleClubsActivitiesDisplay = (e) => {
    const buttondsDiv = document.getElementById('activities-buttons');
    if (e.target.textContent === 'Hide') {
      e.target.textContent = 'Show';
      buttondsDiv.classList = 'hidden';
    } else {
      e.target.textContent = 'Hide';
      buttondsDiv.classList = 'block';
    }
  };

  const handleClickFilter = (e) => {
    setInputValue('');
    document.querySelectorAll('.sport-button').forEach(button => {
      console.log(button);
      // button.classlist.remove('bg-red-500');
    })
    if (e.target.textContent === 'All') {
      // e.target.classlist.add('bg-red-500');
      console.log(e.target, 'e.target');
      dispatch(sortClubs(clubs));
      return;
    }

    const handleText = e.target.textContent.toLowerCase()
      .replace(/ /g, '');
    const filtredClubs = clubs.filter(club => club.activity.find(el => {
      const lowerCaseActivity1 = el.title.toLowerCase();
      const lowerCaseActivity2 = el.slug.toLowerCase();

      return lowerCaseActivity1.includes(handleText)
        || lowerCaseActivity2.includes(handleText)
    }));
    dispatch(sortClubs(filtredClubs));
  };

  const filterByCity = (clubList) => {
    if (city === 'all') {
      return clubList;
    } else {
      return clubList.filter(club => {
        if (city === 'all') {
          return club;
        } else {
          return club.city.slug === city;
        }
      });
    }
  };

  return (
    <main className="bg-gradient-to-br from-transparent to-green-50 pb-16 overflow-hidden">
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
        <form
          action="#"
          className="relative w-96 pb-8"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            id="clubs-choice"
            type="text"
            placeholder="your sport"
            value={inputValue}
            onChange={handleSearch}
            className="font-bold uppercase rounded-lg w-96 py-4 pl-4 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline lg:text-sm text-xs border-2 focus:border-gray-500 pr-6"
          />

          <svg className="w-6 h-6 text-gray-500 absolute right-0.5 search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
          </svg>

          <CitiesDropdown />

        </form>
      </section>

      <section className="mx-16 mb-8">
        <span className="text-lg font-bold">Activities:</span>
        <button
          className="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-1 px-2 border border-gray-500 hover:border-transparent rounded ml-4"
          onClick={handleClubsActivitiesDisplay}
        >
          Hide
        </button>
        <br />
        <div id="activities-buttons">
          {filtersEng.map(sport =>
            <button
              className="sport-button bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded mr-2 my-2"
              onClick={handleClickFilter}
              key={sport}
            >
              {sport}
            </button>
          )}
        </div>
      </section>

      <section className="overflow-hidden">
        <div className="mx-16 mb-16">
          <span className="text-lg font-bold"> Show clubs:</span>

          <button
            className="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded mx-8"
            onClick={handleClubsDisplay}
          >
            BY LIST
          </button>

          <button
            className="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded"
            onClick={handleClubsDisplay}
          >
            BY SLIDER
          </button>
        </div>

        {sortedClubs.length > 0 && isListActive
          && <ClubsList clubs={filterByCity(sortedClubs)} />}

        {sortedClubs.length > 0 && isSladerActive
          && <ClubsSlider clubs={filterByCity(sortedClubs)} />}
      </section>
    </main>
  )
};

export default Main;
