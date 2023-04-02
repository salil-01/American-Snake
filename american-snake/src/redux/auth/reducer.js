import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./actionTypes";

const initialState = {
  isAdminAuth: false,
  isAuth: false,
};
export const reducer = (state = initialState, { type }) => {
  switch (type) {
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isAuth: true,
        isAdminAuth: true,
      };
    }
    case LOGOUT_SUCCESS: {
      return {
        ...state,
        isAdminAuth: false,
        isAuth: false,
      };
    }
    default:
      return state;
  }
};
