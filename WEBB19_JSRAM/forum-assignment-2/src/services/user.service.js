const BASE_URL = "https://lab.willandskill.eu";
const LOGIN_URL = `${BASE_URL}/api/v1/auth/api-token-auth/`;

const login = async (user) => {
  return fetch(LOGIN_URL, requestOptions("POST", null, user))
    .then(handleResponse)
    .then((token) => {
      return token;
    });
};

const logout = () => {};

const register = () => {};

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
      //   if (response.status === 401) {
      //     // auto logout if 401 response returned from api
      //     logout();
      //     // location.reload(true);

      //   }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}

export const userService = {
  login,
  logout,
  register,
};
