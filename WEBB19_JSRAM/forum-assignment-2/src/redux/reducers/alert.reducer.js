import { ALERT_SUCCESS, ALERT_ERROR, ALERT_CLEAR } from "../types";

export default function alert(state = null, action) {
  switch (action.type) {
    case ALERT_SUCCESS:
      return {
        code: action.code,
        message: action.message,
      };
    case ALERT_ERROR:
      return {
        code: action.code,
        message: action.message,
      };
    case ALERT_CLEAR:
      return {};
    default:
      return state;
  }
}
