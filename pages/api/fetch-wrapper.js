// import getConfig from 'next/config';

// export const fetchWrapper = {
//   get,
// };

// async function get(url) {
//   const requestOptions = {
//     method: 'GET',

//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     },
//   };

//   const response = await fetch(url, requestOptions);
//   return handleResponse(response);
// }

// async function handleResponse(response) {
//   return response.text().then((text) => {
//     const data = text && JSON.parse(text);

//     console.log('apicall11', data);

//     if (!response.ok) {
//       if ([401, 403].includes(response.status)) {
//         // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
//         // userService.logout();
//       }

//       const error = (data && data.message) || response.statusText;
//       return Promise.reject(error);
//     }

//     return data;
//   });
// }
