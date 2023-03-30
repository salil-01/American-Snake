import {  GET_MEN_PRODUCT_SUCCESS, GET_PRODUCT_ERROR, GET_PRODUCT_LOADING, GET_WOMEN_PRODUCT_SUCCESS } from "./productType"
import axios from "axios"

export const getMenProduct = (paramObj)=>async(dispatch)=>{

    dispatch({type: GET_PRODUCT_LOADING})
    return await axios.get("https://american-eagle-mock-server.onrender.com/men",paramObj)
    .then((res)=>{
        dispatch({type: GET_MEN_PRODUCT_SUCCESS, payload: res.data})
    })
    .catch((err)=>{
        dispatch({type: GET_PRODUCT_ERROR, payload: err})
    })

}

export const getWomenProduct =  (paramObj)=>async(dispatch)=>{

    dispatch({type: GET_PRODUCT_LOADING})
    return await axios.get("https://american-eagle-mock-server.onrender.com/women",paramObj)
    .then((res)=>{
        dispatch({type: GET_WOMEN_PRODUCT_SUCCESS, payload: res.data})
    })
    .catch((err)=>{
        dispatch({type: GET_PRODUCT_ERROR, payload: err})
    })
}