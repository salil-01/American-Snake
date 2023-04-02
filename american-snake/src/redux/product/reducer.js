import {
  GET_MEN_PRODUCT_SUCCESS,
  GET_PRODUCT_ERROR,
  GET_PRODUCT_LOADING,
  GET_WOMEN_PRODUCT_SUCCESS,
} from "./productType";

const initialState = {
  isLoading: false,
  isError: false,
  mensProduct: [],
  womensProduct: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCT_LOADING:
      return { ...state, isLoading: true, isError: false };
    case GET_MEN_PRODUCT_SUCCESS:
      return { ...state, isLoading: false, mensProduct: payload };
    case GET_WOMEN_PRODUCT_SUCCESS:
      return { ...state, isLoading: false, womensProduct: payload };
    case GET_PRODUCT_ERROR:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
