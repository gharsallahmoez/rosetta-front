import axios from 'axios';
import {GET_ERRORS, GET_BACKLOG, GET_SHOE, DELETE_SHOE} from "./types";
import {axiosInstance_baseURL} from "../webConfig"

export const addShoe = (backlog_id, shoe, history)=> async dispatch => {
    try{
        await axios.post(`${axiosInstance_baseURL}/api/backlog/${backlog_id}`, shoe);
        history.push(`/collectionBoard/${backlog_id}`);
        dispatch({
            type:GET_ERRORS,
            payload:{}
        })
    } catch(err){
        dispatch({
            type:GET_ERRORS,
            payload:err.response.data
        })
    }
};

export const getBacklog = backlog_id => async dispatch => {
    try {
        const res = await axios.get(`${axiosInstance_baseURL}/api/backlog/${backlog_id}`)
        dispatch({
            type : GET_BACKLOG,
            payload : res.data
        })
    }catch(err){
        dispatch({
            type:GET_ERRORS,
            payload:err.response.data
        })
    }
};

export const getShoe = (backlog_id, pt_id, history) => async dispatch => {
    try{
        const res = await axios.get(`${axiosInstance_baseURL}/api/backlog/${backlog_id}/${pt_id}`);
        dispatch({
            type : GET_SHOE ,
            payload : res.data
        })
    }catch(err){
        history.push("/dashboard");
    }
}

export const updateShoe = (backlog_id, pt_id, shoe, history)=>async dispatch=>{
    try{
        await axios.patch(`${axiosInstance_baseURL}/api/backlog/${backlog_id}/${pt_id}`,shoe);
        history.push(`/collectionBoard/${backlog_id}`)
        dispatch({
            type : GET_ERRORS,
            payload : {}
        })
    }catch(err){

        dispatch({
            type:GET_ERRORS,
            payload:err.response.data
        })

    }
}

export const deleteShoe = (backlog_id , pt_id)=> async dispatch =>{
    if(window.confirm(`êtes-vous sûr de vouloir supprimer la chaussure ${pt_id} ?`)){
        await axios.delete(`${axiosInstance_baseURL}/api/backlog/${backlog_id}/${pt_id}`);
        dispatch({
            type: DELETE_SHOE,
            payload: pt_id,
        })
    }
}