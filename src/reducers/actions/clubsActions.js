import {
  FETCH_CLUBS, SORT_CLUBS_BY_INPUT, SORT_CLUBS_BY_TAGS
} from './type';

export const fetchClubs = () => (dispatch) => {
  fetch('https://instasport.co/dashboard/api/v1/clubs/')
    .then((response) => response.json())
    .then((clubs) => {
      console.log(clubs, 'fetchClubs - clubactions');
      dispatch({
        type: FETCH_CLUBS,
        payload: clubs,
      })
    });
}
