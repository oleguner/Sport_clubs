import React from 'react'

import { useDispatch } from 'react-redux';

import { cities } from '../cities';
import { selectCity } from '../reducers/actions/clubsActions';

export default function CitiesDropdown() {
  const dispatch = useDispatch();

  const handleCitySelect = (e) => {
    dispatch(selectCity(e.target.textContent.toLowerCase()));
    document.getElementById('selected-city')
      .textContent = e.target.textContent;
  };

  return (
    <div className="pt-8">

      <div className="dropdown inline-block relative">
        <button className="bg-gray-100 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center border-2 focus:border-gray-500">
          <span className="mr-1" id="selected-city">Choose your city</span>
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
        </button>
        <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
          {cities.map(city => <li className="rounded-t bg-gray-100 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap cursor-pointer" key={city.slug} onClick={handleCitySelect}>
            {city.slug.toUpperCase()}
          </li>
          )}
        </ul>
      </div>

    </div>
  )
}
