import React from 'react'

import { useDispatch, useSelector } from 'react-redux';

import { cities } from '../cities';
import { selectCity } from '../reducers/actions/clubsActions';

export default function CitiesDropdown() {
  const dispatch = useDispatch();
  const lang = useSelector(state => state.clubs.lang);

  const handleCitySelect = (e) => {
    dispatch(selectCity(e.target.textContent.toLowerCase()));
    if (lang === 'ENG') {
      document.getElementById('selected-city')
        .textContent = e.target.textContent === 'ALL'
          ? `${e.target.textContent} cities are selected`
          : `${e.target.textContent} city is selected`;
    } else {
      document.getElementById('selected-city')
        .textContent = e.target.textContent === 'ВСЕ'
          ? `${e.target.textContent} города выбраны`
          : `${e.target.textContent} выбран`;
    }
  };

  return (
    <div className="pt-8">

      <div className="dropdown inline-block relative">
        <button className="bg-gray-100 text-gray-700 font-semibold py-3.5 px-4 rounded-lg inline-flex items-center border-2 focus:border-gray-500 ">
          <span className="mr-1" id="selected-city">
            {lang === 'ENG' && 'Choose your city'}
            {lang === 'RU' && 'Выберите Ваш город'}
          </span>
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
        </button>
        <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
          {cities.map(city => <li className="rounded-t bg-gray-100 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap cursor-pointer" key={city.slug} onClick={handleCitySelect}>
            {lang === 'ENG' && city.slug.toUpperCase()}
            {lang === 'RU' && city.title.toUpperCase()}
          </li>
          )}
        </ul>
      </div>

    </div>
  )
}
