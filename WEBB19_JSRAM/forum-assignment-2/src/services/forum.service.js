const POSTS_URL = `https://lab.willandskill.eu/api/v1/forum/posts/`;
const CATEGORIES_URL = `https://lab.willandskill.eu/api/v1/forum/categories`;
const COUNTRIES_URL = `https://lab.willandskill.eu/api/v1/countries/`;

const getAllPosts = (token) => {
  return fetch(POSTS_URL, requestOptions("GET", token))
    .then(handleResponse)
    .then((data) => {
      return data.results;
    });
};

const getSinglePost = (token, id) => {
  return fetch(POSTS_URL + `${id}/`, requestOptions("GET", token))
    .then(handleResponse)
    .then((data) => {
      return data;
    });
};

const createPost = (token, payload) => {
  return fetch(POSTS_URL, requestOptions("POST", token, payload))
    .then(handleResponse)
    .then((data) => {
      return data;
    });
};

const getAllCategories = (token) => {
  return fetch(CATEGORIES_URL, requestOptions("GET", token))
    .then(handleResponse)
    .then((data) => {
      return data.results;
    });
};

const getAllCountries = () => {
  return fetch(COUNTRIES_URL, requestOptions("GET"))
    .then(handleResponse)
    .then((data) => {
      return data.results;
    });
};

const getAllReplies = (token, id) => {
  return fetch(POSTS_URL + `${id}/replies`, requestOptions("GET", token))
    .then(handleResponse)
    .then((data) => {
      return data.results;
    });
};

const createReplies = (token, payload) => {
  return fetch(POSTS_URL, requestOptions("POST", token, payload))
    .then(handleResponse)
    .then((data) => {
      return data;
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
      const error = (data && data.message) || response.statusText;
      return Promise.reject({ message: error, code: response.status });
    }

    return data;
  });
}

export const forumService = {
  getAllPosts,
  getSinglePost,
  createPost,
  getAllReplies,
  createReplies,
  getAllCategories,
  getAllCountries,
};
