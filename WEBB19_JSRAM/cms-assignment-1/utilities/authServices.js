import Cookie from "js-cookie";
import decode from "jwt-decode";

export const getCookie = () => {
  return Cookie.get("JWT_TOKEN");
};

export const setCookie = (token) => {
  Cookie.set("JWT_APP", token);
};

export const checkAuth = () => {
  let token = getCookie();

  if (!token) return false;
  const { id, username, email, exp } = decode(token);
  try {
    if (exp < new Date().getTime() / 1000) return false;

    return {
      user: { token, id, username, email },
    };
  } catch (e) {
    return false;
  }
};
