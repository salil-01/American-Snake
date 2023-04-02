import { ADD_TO_BAG, ADD_TO_WISHLIST } from "./actionType";

const initialState = {
  bag: [],
  wishlist: [],
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
        wishlist: [...state.wishlist, payload],
      };
    }
    
    default:
      return state;
  }
};
