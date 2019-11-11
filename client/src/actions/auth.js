import axios from 'axios';
import {REGISTER_FAIL, REGISTER_SUCCESS, SET_ALERT} from './types';
import {setAlert} from './alert';

export const register = ({username,email,password}) => async dispatch => {
    const config = {
        headers : {
            'Content-Type' : 'application/json',
        }
    };

    const body = JSON.stringify({username,email,password});

    try {
        const res = await axios.post('http://localhost:2000/api/user',body, config);
        console.log(res.data);
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

