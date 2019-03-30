import axios from 'axios'
import {GET_ERRORS, GET_COLLECTION, GET_COLLECTIONS , DELETE_COLLECTION} from "./types";
import {axiosInstance_baseURL} from "../webConfig"


export const createCollection = (collection, history) => async dispatch => {
    try {
        await axios.post(`${axiosInstance_baseURL}/api/collection`,collection)
        history.push("/dashboard");
        dispatch({
            type:GET_ERRORS,
            payload:{}
        })
    }catch(err){
    dispatch({
        type:GET_ERRORS,
        payload:err.response.data
    })
    }
}

export const getCollections = () => async dispatch => {
    const res = await axios.get(`${axiosInstance_baseURL}/api/collection/all`);
    dispatch({
        type: GET_COLLECTIONS,
        payload: res.data
    });
};


export const getCollection = (id, history)  => async dispatch => {
    try {
        const res = await axios.get(`${axiosInstance_baseURL}/api/collection/${id}`);
        dispatch({
            type: GET_COLLECTION,
            payload: res.data
        })
    } catch {
        history.push("/dashboard")
    }
}
    export const deleteCollection = id => async dispatch =>{
    if(window.confirm("vous ete sure de supprimer cette collection ?"))
    {
        await axios.delete(`${axiosInstance_baseURL}/api/collection/${id}`);
        dispatch({
            type : DELETE_COLLECTION,
            payload : id
        })
    }
    }