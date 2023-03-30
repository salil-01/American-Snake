import axios from "axios";
import {
  GET_PRODUCT_SUCCESS,
  PATCH_PRODUCT_SUCCESS,
  POST_PRODUCT_SUCCESS,
  PRODUCT_FAILURE,
  PRODUCT_REQUEST,
} from "./actionTypes";
const url = `https://american-eagle-mock-server.onrender.com`;

//posting product data(adding a single product)
export const addProductMen = (productData) => async (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  await axios
    .post(`${url}/men`, productData)
    .then(() => {
      dispatch({ type: POST_PRODUCT_SUCCESS });
    })
    .catch(() => {
      dispatch({ type: PRODUCT_FAILURE });
    });
};
export const addProductWomen = (productData) => async (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  await axios
    .post(`${url}/women`, productData)
    .then(() => {
      dispatch({ type: POST_PRODUCT_SUCCESS });
    })
    .catch(() => {
      dispatch({ type: PRODUCT_FAILURE });
    });
};

//getting data from server and populating on dom
export const getProduct = (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  axios
    .get(url)
    .then((res) => {
      dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: PRODUCT_FAILURE });
    });
};

//patching data
export const editProduct = (dataobj, id) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  axios
    .patch(`${url}/${id}`, dataobj)
    .then(() => {
      dispatch({ type: PATCH_PRODUCT_SUCCESS });
    })
    .catch(() => {
      dispatch({ type: PRODUCT_FAILURE });
    });
};
