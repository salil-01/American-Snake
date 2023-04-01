import { LOGIN_SUCCESS } from "./actionTypes";

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
        isAdminAuth:true,
      };
    }
    
    default:
      return state;
  }
};
