const LOGIN_URL = `https://lab.willandskill.eu/api/v1/auth/api-token-auth/`;
const REGISTER_URL = `https://lab.willandskill.eu/api/v1/auth/users/`;
const ME_URL = `https://lab.willandskill.eu/api/v1/me/`;

const login = (user) => {
  return fetch(LOGIN_URL, requestOptions("POST", null, user))
    .then(handleResponse)
    .then((token) => {
      return token;
    });
};

const register = (user) => {
  return fetch(REGISTER_URL, requestOptions("POST", null, user))
    .then(handleResponse)
    .then((user) => {
      return user;
    });
};

const getMe = (token) => {
  return fetch(ME_URL, requestOptions("GET", token))
    .then(handleResponse)
    .then((user) => {
      return user;
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
  return response.text().then((text) => {
    const data = text && JSON.parse(text);

    if (!response.ok) {
      const error =
        (data?.nonFieldErrors[0] &&
          "Unable to log in with provided credentials.") ||
        response.statusText;

      return Promise.reject({ message: error, code: response.status });
    }

    return data;
  });
}

export const userService = {
  login,
  register,
  getMe,
};
