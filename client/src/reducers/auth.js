import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOAD_USER,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
} from '../actions/types';

const initialState = {
    token : localStorage.getItem('token'),
    isAuthenticated : null,
    loading: true,
    user : null,
};

export default function(state = initialState , action) {
    const {payload, type} = action;

    switch (type) {
        case LOAD_USER:
            return {
                ...state, 
                isAuthenticated : true,
                loading: false,
                user: payload
            }; 

        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            console.log(payload.token)
            localStorage.setItem('token', payload.token);
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading:false
            };

        case REGISTER_FAIL:
        case AUTH_ERROR:   
        case LOGIN_FAIL:  
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated:null,
                loading:false
            };

        default:
            return state;
    }

}