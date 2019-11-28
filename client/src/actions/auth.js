import axios from 'axios';
import {
    REGISTER_FAIL, 
    REGISTER_SUCCESS,
    SET_ALERT , 
    LOAD_USER,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL
} from './types';

import {setAlert} from './alert';
import setAuthToken from '../utils/setAuthToken'; 


export const loadUser =  () => async dispatch => {
    const token = localStorage.token;
    if(token) setAuthToken(token); 

    try {
        const res = await axios.get('/user'); 
        dispatch({type: LOAD_USER,payload: res.data});
    } catch (err) {
        dispatch({type:AUTH_ERROR}); 
    }

};

export const register = ({name,email,password}) => async dispatch => {
    const config = {
        headers : {
            'Content-Type' : 'application/json',
        }
    };

    const body = JSON.stringify({name,email,password});

    try {
        const res = await axios.post('/user', body, config);
        dispatch({type : REGISTER_SUCCESS , payload:res.data});
        await dispatch(loadUser());
    } catch(err){
        const errors = err.response.data.errors;

        if(errors) {
            errors.forEach(error => {
                dispatch(setAlert(error.msg,'error'));
            })
        }
        dispatch({type: REGISTER_FAIL});
    }

};


export const login = ({email,password}) => async dispatch => {
    const config = {
        headers : {
            'Content-Type' : 'application/json',
        }
    };

    const body = JSON.stringify({email,password});

    try {
        const res = await axios.post('/auth', body, config);
        dispatch({type : LOGIN_SUCCESS , payload:res.data});
        await dispatch(loadUser());
    } catch(err){
        const errors = err.response.data.errors;

        if(errors) {
            errors.forEach(error => {
                dispatch(setAlert(error.msg,'error'));
            })
        }
        dispatch({type: LOGIN_FAIL});
    }

};