import { useReducer } from "react";
import GlobalReducer from "./globalReducer";
import { GlobalContext, useGlobalContext } from "./globalContext";

import { getCookie, checkAuth } from "utilities/authServices";
import Router from "next/router";

const initialState = {
  customers: null,
  activeUser: null,
  token: getCookie() || null,
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GlobalReducer, initialState);
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const ProtectRoute = ({ children }) => {
  // const { token } = useGlobalContext();
  // console.log(checkAuth() && window.location.pathname !== "/login");
  // console.log(checkAuth());
  // console.log(window.location.pathname);
  // if (token || (!checkAuth() && window.location.pathname !== "/login")) {
  return children;
  // }
  // retunrn children;
};
