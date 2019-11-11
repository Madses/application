import axios from 'axios';
import {REGISTER_FAIL, REGISTER_SUCCESS, SET_ALERT} from './types';
import {setAlert} from './alert';

export const register = ({username,email,password}) => async dispatch => {
    const config = {
        headers : {
            'content-type' : 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    };

    const body = JSON.stringify({username,email,password});

    try {
        const res = axios.post('http://localhost:2000/user',body, config);
        console.log(res);
        dispatch({type : REGISTER_SUCCESS , payload:res.data});
    } catch(err){
        console.log(err);
        // if(errors){
        //     errors.forEach(error=>{
        //         dispatch(setAlert(error.msg,error));
        //     })
        // }

        dispatch({type: REGISTER_FAIL})
    }


};

