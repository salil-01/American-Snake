import {
  GET_MEN_PRODUCT_SUCCESS,
  GET_PRODUCT_ERROR,
  GET_PRODUCT_LOADING,
  GET_WOMEN_PRODUCT_SUCCESS,
} from "./productType";
import axios from "axios";

export const getMenProduct = (params) => async (dispatch) => {
  dispatch({ type: GET_PRODUCT_LOADING });
  await axios
    .get("https://american-eagle-mock-server.onrender.com/men", params)
    .then((res) => {
      dispatch({ type: GET_MEN_PRODUCT_SUCCESS, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: GET_PRODUCT_ERROR });
    });
};

export const getWomenProduct = (params) => async (dispatch) => {
  dispatch({ type: GET_PRODUCT_LOADING });
  await axios
    .get("https://american-eagle-mock-server.onrender.com/women", params)
    .then((res) => {
      console.log(res);
      dispatch({ type: GET_WOMEN_PRODUCT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: GET_PRODUCT_ERROR, payload: err });
    });
};
