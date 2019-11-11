import axios from 'axios';
import {REGISTER_FAIL, REGISTER_SUCCESS, SET_ALERT} from './types';
import {setAlert} from './alert';

export const register = ({name,email,password}) => async dispatch => {
    const config = {
        headers : {
            'Content-Type' : 'application/json',
        }
    };

    const body = JSON.stringify({name,email,password});

    try {
        const res = await axios.post('http://localhost:5000/user', body, config);
        console.log(res);
        dispatch({type : REGISTER_SUCCESS , payload:res.data});
        console.log(res.errors)
    } catch(err){
        
        console.log(err.response.data.errors);
    }


};