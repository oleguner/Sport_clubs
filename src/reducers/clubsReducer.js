import {
  FETCH_CLUBS, SORT_CLUBS_BY_INPUT, SORT_CLUBS_BY_TAGS
} from './actions/type';

const initialState = {
  items: []
};

export const clubsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CLUBS:
      return {
        ...state,
        items: action.payload
      }

    case SORT_CLUBS_BY_INPUT:
      break;

    case SORT_CLUBS_BY_TAGS:
      break;

    default: return state;
  };
};
