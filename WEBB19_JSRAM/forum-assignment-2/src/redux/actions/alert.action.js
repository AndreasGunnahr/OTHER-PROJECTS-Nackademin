import { ALERT_SUCCESS, ALERT_ERROR, ALERT_CLEAR } from "../types";

const success = (message, code) => {
 
  return { type: ALERT_SUCCESS, message, code };
};

const error = ({ message, code }) => {
  return { type: ALERT_ERROR, message, code };
};

const clear = () => {
  return { type: ALERT_CLEAR };
};

export const alertActions = {
  success,
  error,
  clear,
};
