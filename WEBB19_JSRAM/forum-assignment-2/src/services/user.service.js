const BASE_URL = "https://lab.willandskill.eu";
const LOGIN_URL = `${BASE_URL}/api/v1/auth/api-token-auth/`;

const login = async (user) => {
  return fetch(LOGIN_URL, requestOptions("POST", null, user));
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

export const userService = {
  login,
  logout,
  register,
};
