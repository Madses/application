import React ,{Fragment , useState} from 'react'
import {connect} from 'react-redux';
import {setAlert} from '../../actions/alert';
import {register} from '../../actions/auth';
import {Redirect} from "react-router-dom";
import '../../App.css';

const Register = ({setAlert ,register,isAuthenticated}) => {

    const [formData,setFormData] = useState({
        name : '',
        email : '',
        password : '',
        password2 : ''
    });

    if(isAuthenticated){
        return  <Redirect to="/dashboard"/>
     }

    const {name , email, password , password2} = formData;
    
    const onChange = (e) => setFormData({...formData , [e.target.name]: e.target.value});

    const onSubmit = (e) => {
        e.preventDefault();
        if(password !== password2) setAlert('Make sure your password is correct', 'error');
        register({name,email,password});
    };



    return (
        <Fragment>
            <h1>Register</h1>
            <form className="authForm" onSubmit = {e => onSubmit(e)}>
                <input type ="text"  name="name" placeholder ="name"  value={name} onChange={e => onChange(e)}></input>
                <input type ="text"  name="email" placeholder ="email"  value={email} onChange={e => onChange(e)}></input>
                <input type ="password" name="password" placeholder="password" value={password} onChange={e => onChange(e)}></input>
                <input type ="password" name="password2" placeholder="confirm your password" value={password2} onChange={e => onChange(e)}></input>
                <input type ="submit"></input>
            </form>
        </Fragment>
    );
};

const mapStateToProps = (state) => {
    return {isAuthenticated : state.auth.isAuthenticated}; 
 };

 
export default connect(mapStateToProps,{setAlert,register})(Register);