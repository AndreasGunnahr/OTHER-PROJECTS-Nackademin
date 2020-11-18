const BASE_URL = "https://lab.willandskill.eu";
const LOGIN_URL = `${BASE_URL}/api/v1/auth/api-token-auth/`;
const POSTS_URL = `${BASE_URL}/api/v1/forum/posts/`;

const login = async (user) => {
  return fetch(LOGIN_URL, requestOptions("POST", null, user))
    .then(handleResponse)
    .then((token) => {
      return token;
    });
};

const register = () => {};

const getAll = () => {
  return fetch(POSTS_URL, requestOptions("GET", null, null))
    .then(handleResponse)
    .then((data) => {
      return data.results;
    });
};

const requestOptions = (method, token, payload) => {
  const body = JSON.stringify(payload);
  const options = {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : "",
    },
    body,
  };
  return options;
};

function handleResponse(response) {
  console.log(response);
  return response.text().then((text) => {
    console.log(text);
    const data = text && JSON.parse(text);
    if (!response.ok) {
      const error = (data && data.message) || response.statusText;
      return Promise.reject({ message: error, code: response.status });
    }

    return data;
  });
}

export const userService = {
  login,
  register,
  getAll,
};
