export const getApi = () => {
  fetch('https://instasport.co/dashboard/api/v1/clubs/')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
};
