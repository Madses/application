import React ,{Fragment , useState} from 'react'
import {connect} from 'react-redux';
import {setAlert} from '../../actions/alert';
import {register} from '../../actions/auth';
import '../../App.css';

const Register = ({setAlert , register}) => {

    const [formData,setFormData] = useState({
        username : '',
        email : '',
        password : '',
        password2 : ''
    });

    const {username , email, password , password2} = formData;


    const onChange = (e) => {
        setFormData({...formData , [e.target.name]: e.target.value})
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if(password !== password2) setAlert('Excuse me, but your password does not match', 'error');
        register({username,email,password});
    };



    return (
        <Fragment>
            <h1>Register</h1>
            <form className="authForm" onSubmit = {e => onSubmit(e)}>
                <input type ="text"  name="username" placeholder ="username"  value={username} onChange={e => onChange(e)}></input>
                <input type ="text"  name="email" placeholder ="email"  value={email} onChange={e => onChange(e)}></input>
                <input type ="password" name="password" placeholder="password" value={password} onChange={e => onChange(e)}></input>
                <input type ="password" name="password2" placeholder="confirm your password" value={password2} onChange={e => onChange(e)}></input>
                <input type ="submit"></input>
            </form>
        </Fragment>
    );
};

export default connect(null,{setAlert,register})(Register);
