import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";

const initState = {
  isLoading: false,
  isError: false,
  isAuth: false,
  token: "",
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST : {
        return {...state, isLoading : true}
    }
    case LOGIN_SUCCESS : {
        return {...state, isAuth : true, isLoading : false, token : payload}
    }
    case LOGIN_FAILURE : {
        return {...state, isLoading : false, isError : true}
    }
    default:
      return state;
  }
};
