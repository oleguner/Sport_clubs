import {
  FETCH_CLUBS, SORT_CLUBS, SELECT_CITY
} from './actions/type';

const initialState = {
  items: [],
  sortedClubs: [],
  city: 'All'
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
        // items: state.clubs.items.map(club => club.city === state.clubs.city),
        sortedClubs: action.payload
      }

    case SELECT_CITY:
      return {
        ...state,
        city: action.payload
      }

    default: return state;
  };
};
