import {
  FETCH_CLUBS, SORT_CLUBS, SELECT_CITY, SELECT_LANG
} from './actions/type';
import cities from '../cities';

const initialState = {
  items: [],
  sortedClubs: [],
  city: 'All',
  lang: 'ENG'
};

export const clubsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CLUBS:
      return {
        ...state,
        items: action.payload,
        sortedClubs: action.payload,
      }

    case SORT_CLUBS:
      return {
        ...state,
        sortedClubs: action.payload
      }

    case SELECT_CITY:
      return {
        ...state,
        city: action.payload
      }

      case SELECT_LANG:
        const city = state.city;
        console.log(city);
      return {
        ...state,
        lang: action.payload
      }

    default: return state;
  };
};
