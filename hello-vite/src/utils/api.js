import { baseUrl } from "./constants";

const getHeaders = () => ({
  "Content-Type": "application/json",
  APIkey:
    "hdHzTV/cG6SGUXPQXV1HK1NTe/82onzB29HqTcxwC6pSxL32cJ5k2K1SmWfB3Pg/E5TQ8QKoh0Qh1ZN1WvdjUw==",
});

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
}
export { checkResponse };

function getYouthPrograms(zipcode) {
  return fetch(`${baseUrl}&location=${zipcode}`, {
    headers: getHeaders(),
  }).then(checkResponse);
}

export { getYouthPrograms };

// export const filterProgramData = (data) => {
//   //   const result = {};
//   //   result.zipcode = data.zipcode;
//   if ((data.city = "San Antonio")) {
//     return data;
//   }
//   return "not found";
// };
