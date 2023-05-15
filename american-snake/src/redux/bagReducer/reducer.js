import {
  ADD_ADDRESS,
  ADD_TO_BAG,
  ADD_TO_WISHLIST,
  POST_ORDER_FAILURE,
  POST_ORDER_REQUEST,
  POST_ORDER_SUCCESS,
  UPDATE_BAG,
  UPDATE_WISHLIST,
} from "./actionType";

const initialState = {
  isLoading: false,
  isError: false,
  bag: [],
  wishlist: [],
  address: [],
};
export const reducer = (state = initialState, { type, payload }) => {
  // console.log(state.bag);
  switch (type) {
    case ADD_TO_BAG: {
      return {
        ...state,
        bag: [...state.bag, payload],
      };
    }
    case ADD_TO_WISHLIST: {
      return {
        ...state,
        wishlist: [...state.wishlist, payload],
      };
    }
    case UPDATE_BAG: {
      return {
        ...state,
        bag: payload,
      };
    }
    case UPDATE_WISHLIST: {
      return {
        ...state,
        wishlist: payload,
      };
    }
    case ADD_ADDRESS: {
      return {
        ...state,
        address: payload,
      };
    }
    case POST_ORDER_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case POST_ORDER_FAILURE: {
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    }
    case POST_ORDER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    }

    default:
      return state;
  }
};
