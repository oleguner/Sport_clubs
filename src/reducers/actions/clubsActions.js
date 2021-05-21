import {
  FETCH_CLUBS, SORT_CLUBS_BY_INPUT, SORT_CLUBS_BY_TAGS
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
