import {  GET_MEN_PRODUCT_SUCCESS, GET_PRODUCT_ERROR, GET_PRODUCT_LOADING, GET_WOMEN_PRODUCT_SUCCESS } from "./productType"


export const getMenProduct = ()=>async(dispatch)=>{

    dispatch({type: GET_PRODUCT_LOADING})
    return await axios.get("http://localhost:8080/mens")
    .then((res)=>{
        dispatch({type: GET_MEN_PRODUCT_SUCCESS, payload: res.data})
    })
    .catch((err)=>{
        dispatch({type: GET_PRODUCT_ERROR, payload: err})
    })

}

export const getWomenProduct =  ()=>async(dispatch)=>{

    dispatch({type: GET_PRODUCT_LOADING})
    return await axios.get("http://localhost:8080/womens")
    .then((res)=>{
        dispatch({type: GET_WOMEN_PRODUCT_SUCCESS, payload: res.data})
    })
    .catch((err)=>{
        dispatch({type: GET_PRODUCT_ERROR, payload: err})
    })

}