import React ,{Fragment , useState} from 'react'
import {connect} from 'react-redux';
import {setAlert} from '../../actions/alert';
import {register} from '../../actions/auth';
import {Redirect} from "react-router-dom";
import {Wrapper,Form,Label,Input,SubmitButton, FormImage,FormLink,SeparatorWrapper,Separator} from './StyledForm';

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
        <Wrapper>
            <FormImage />
            <Form onSubmit = {e => onSubmit(e)}>
                <Label> Name </Label>
                <Input type ="text"  name="name" placeholder ="name"  value={name} onChange={e => onChange(e)}></Input>
                <Label> E-mail </Label>
                <Input type ="text"  name="email" placeholder ="email"  value={email} onChange={e => onChange(e)}></Input>
                <Label> Password </Label>
                <Input type ="password" name="password" placeholder="password" value={password} onChange={e => onChange(e)}></Input>
                <Label> Repeat your password </Label>
                <Input type ="password" name="password2" placeholder="confirm your password" value={password2} onChange={e => onChange(e)}></Input>
                <SubmitButton type ="submit">Register</SubmitButton>

                <div><FormLink>Already an account?</FormLink></div>
            </Form>
        </Wrapper>
    );
};

const mapStateToProps = (state) => {
    return {isAuthenticated : state.auth.isAuthenticated}; 
 };

 
export default connect(mapStateToProps,{setAlert,register})(Register);