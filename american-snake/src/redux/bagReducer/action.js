import {
  ADD_ADDRESS,
  ADD_TO_BAG,
  ADD_TO_WISHLIST,
  UPDATE_BAG,
} from "./actionType";

export const addToBag = (obj) => (dispatch) => {
  dispatch({ type: ADD_TO_BAG, payload: obj });
};
export const addToWishlist = (obj) => (dispatch) => {
  dispatch({ type: ADD_TO_WISHLIST, payload: obj });
};
export const updateBag = (obj) => (dispatch) => {
  dispatch({ type: UPDATE_BAG, payload: obj });
};
export const addAddress = (obj) => (dispatch) => {
  dispatch({ type: ADD_ADDRESS, payload: obj });
};
