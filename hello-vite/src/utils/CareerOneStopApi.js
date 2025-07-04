import { baseUrl } from "./constants";

const getHeaders = () => ({
  "Content-Type": "application/json",
  Authorization: `Bearer ${APIToken}`,
});

const APIToken =
  "hdHzTV/cG6SGUXPQXV1HK1NTe/82onzB29HqTcxwC6pSxL32cJ5k2K1SmWfB3Pg/E5TQ8QKoh0Qh1ZN1WvdjUw==";

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
}

function getYouthPrograms(zipcode) {
  const fullUrl = `${baseUrl}&location=${zipcode}`;
  console.log("API URL:", fullUrl);
  return fetch(fullUrl, {
    headers: getHeaders(),
  }).then(checkResponse);
}

export { getYouthPrograms };
