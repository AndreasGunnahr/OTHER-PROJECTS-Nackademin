import { useReducer, useMemo } from "react";
import GlobalReducer from "./globalReducer";
import { GlobalContext } from "./globalContext";

import { checkAuth, getSession } from "utilities/authServices";

const initialState = {
  customers: null,
  isAuthenticated: checkAuth() || false,
  user: getSession("ACTIVE_USER") || null,
  token: getSession("JWT_TOKEN") || null,
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GlobalReducer, initialState);
  const globalData = useMemo(() => ({ ...state, dispatch }), [state]);
  return (
    <GlobalContext.Provider value={globalData}>
      {children}
    </GlobalContext.Provider>
  );
};
