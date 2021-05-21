import {
  FETCH_CLUBS, SORT_CLUBS, SELECT_CITY, SELECT_LANG
} from './type';

export const fetchClubs = () => (dispatch) => {
  fetch('https://instasport.co/dashboard/api/v1/clubs/')
    .then((response) => response.json())
    .then((clubs) => {
      const clubsWithId = clubs.map((club, index) => {
        return {
          ...club,
          id: club.title.replace(/ /g, '') + index
        }
      })
      dispatch({
        type: FETCH_CLUBS,
        payload: clubsWithId,
      })
    });
}

export const sortClubs = (sortedClubs) => (dispatch) => {
  dispatch({
    type: SORT_CLUBS,
    payload: sortedClubs,
  })
}

export const selectCity = (city) => (dispatch) => {
  dispatch({
    type: SELECT_CITY,
    payload: city,
  })
}

export const selectLang = (lang) => (dispatch) => {
  dispatch({
    type: SELECT_LANG,
    payload: lang,
  })
}
