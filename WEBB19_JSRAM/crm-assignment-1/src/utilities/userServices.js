import { getSession } from "utilities/authServices";

const BASE_URL = "https://frebi.willandskill.eu/";
const API_URL = `${BASE_URL}api/v1/`;
const REGISTER_URL = `${BASE_URL}auth/users/`;
const ACTIVATE_URL = `${BASE_URL}auth/users/activate/`;
const LOGIN_URL = `${BASE_URL}api-token-auth/`;
const CUSTOMERS_URL = `${API_URL}customers`;
const ME_URL = `${API_URL}me`;

let error, response;

const fetchData = async (url, method, token, payload) => {
  const body = JSON.stringify(payload);
  const options = {
    method: method,
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
      "Content-Type": "application/json",
    },
    body,
  };

  try {
    const res = await fetch(url, options);
    const json = await res.json();
    response = json;
  } catch (e) {
    error = e;
  }

  return { response, error };
};

export const onLogin = async (payload) => {
  return await fetchData(LOGIN_URL, "POST", false, payload);
};

export const onRegister = async (payload) => {
  return await fetchData(REGISTER_URL, "POST", false, payload);
};

export const onDelete = async (id, token = getSession("JWT_TOKEN")) => {
  return await fetchData(CUSTOMERS_URL + "/" + id + "/", "DELETE", token);
};

export const onEdit = async (id, payload, token = getSession("JWT_TOKEN")) => {
  return await fetchData(
    CUSTOMERS_URL + "/" + id + "/",
    "PATCH",
    token,
    payload
  );
};

export const getActiveUser = async (token) => {
  return await fetchData(ME_URL, "GET", token);
};

export const activateUser = async (payload) => {
  return await fetchData(ACTIVATE_URL, "POST", false, payload);
};

export const setNewCustomer = async (
  payload,
  token = getSession("JWT_TOKEN")
) => {
  return await fetchData(CUSTOMERS_URL, "POST", token, payload);
};
export const getCustomerList = async (token = getSession("JWT_TOKEN")) => {
  return await fetchData(CUSTOMERS_URL, "GET", token);
};
