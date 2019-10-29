import React ,{Fragment , useState} from 'react'
import '../../App.css';

const Login = () => {
    const [formData,setFormData] = useState({
        username : '',
        password : ''
    });

    const onChange = (e) => {
        setFormData({...formData , [e.target.name]: e.target.value})
    };

    const onSubmit = (e) => {
        e.preventDefault(); 
        console.log('Working')
    };

    const {username , password} = formData; 

    return (
        <Fragment>
            <h1>Login</h1>
            <form className="authForm" onSubmit = {e => onSubmit(e)}>
                <input type ="text"  name="username" placeholder ="username"  value={username} onChange={e => onChange(e)}></input>
                <input type ="password" name="password" placeholder="password" value={password} onChange={e => onChange(e)}></input>
                <input type ="submit"></input>
            </form>
        </Fragment>
    );
};

export default Login
