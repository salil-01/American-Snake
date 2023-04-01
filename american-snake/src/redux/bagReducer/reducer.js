import {
  ADD_ADDRESS,
  ADD_TO_BAG,
  ADD_TO_WISHLIST,
  UPDATE_BAG,
} from "./actionType";

const initialState = {
  bag: [],
  wishlist: [],
  address: [],
};
export const reducer = (state = initialState, { type, payload }) => {
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
        wishlist: [state.wishlist, payload],
      };
    }
    case UPDATE_BAG: {
      return {
        ...state,
        bag: payload,
      };
    }
    case ADD_ADDRESS: {
      return {
        ...state,
        address: payload,
      };
    }
    default:
      return state;
  }
};
