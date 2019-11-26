import React ,{Fragment , useState} from 'react'
import {connect} from 'react-redux';
import {setAlert} from '../../actions/alert';
import {login} from '../../actions/auth';
import { Redirect} from "react-router-dom";
import '../../App.css';

const Login = ({login,isAuthenticated}) => {
    const [formData,setFormData] = useState({
        email : '',
        password : ''
    });

    const {email, password} = formData;
    
    const onChange = (e) => {
        setFormData({...formData , [e.target.name]: e.target.value})
    };

    const onSubmit = (e) => {
        e.preventDefault(); 
        login({email,password});
    };

    if(isAuthenticated){
       return  <Redirect to="/dashboard"/>
    }


    return (
        <Fragment>
            <h1>Login</h1>
            <form className="authForm" onSubmit = {e => onSubmit(e)}>
                <input type ="text"  name="email" placeholder ="email"  value={email} onChange={e => onChange(e)}></input>
                <input type ="password" name="password" placeholder="password" value={password} onChange={e => onChange(e)}></input>
                <input type ="submit"></input>
            </form>
        </Fragment>
    );
};



const mapStateToProps = (state) => {
   return {isAuthenticated : state.auth.isAuthenticated}; 
};


export default connect(mapStateToProps,{setAlert,login})(Login);
