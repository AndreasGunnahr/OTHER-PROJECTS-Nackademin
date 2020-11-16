import { removeSessions, setSessions } from "utilities/authServices";


const GlobalReducer = (state, action) => {
  switch (action.type) {
    case "SIGN_IN":
      setSessions(action);
      return {
        ...state,
        token: action.token,
        user: action.user,
        isAuthenticated: true,
      };

    case "SIGN_OUT":
      removeSessions();
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
      };

    case "SET_CUSTOMER_LIST":
      return {
        ...state,
        customers: action.customers,
      };

    case "ADD_CUSTOMER":
      return { ...state, customers: [...state.customers, action.customer] };

    case "DELETE_CUSTOMER":
      return {
        ...state,
        customers: state.customers.filter(
          (customer) => customer.id !== action.customerId
        ),
      };

    case "EDIT_CUSTOMER":
      const index = state.customers.findIndex(
        (customer) => customer.id === action.editCustomer.id
      );

      const copy = [...state.customers];
      copy[index] = action.editCustomer;

      return {
        ...state,
        customers: [...copy],
      };

    default:
      return state;
  }
};

export default GlobalReducer;
