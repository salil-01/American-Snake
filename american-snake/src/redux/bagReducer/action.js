import { ADD_TO_BAG, ADD_TO_WISHLIST } from "./actionType";

export const addToBag = (obj) => (dispatch) => {
  dispatch({ type: ADD_TO_BAG, payload: obj });
};
export const addToWishlist = (obj) => (dispatch) => {
  dispatch({ type: ADD_TO_WISHLIST, payload: obj });
};
