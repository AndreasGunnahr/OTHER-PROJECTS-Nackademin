import decode from "jwt-decode";

export const getSession = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export const removeSession = (key) => {
  return localStorage.removeItem(key);
};

export const setSession = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const setSessions = (action) => {
  setSession("JWT_TOKEN", action.token);
  setSession("ACTIVE_USER", action.user);
}

export const removeSessions = () => {
  removeSession("JWT_TOKEN");
  removeSession("ACTIVE_USER");
} 

export const checkAuth = () => {
  let token = getSession("JWT_TOKEN");

  if (!token) return false;
  const { exp } = decode(token);

  try {
    if (exp < new Date().getTime() / 1000) return false;

    return true;
  } catch (e) {
    return false;
  }
};
