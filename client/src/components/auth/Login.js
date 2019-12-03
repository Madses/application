import React ,{Fragment , useState} from 'react'
import {connect} from 'react-redux';
import {setAlert} from '../../actions/alert';
import {login,loadUser} from '../../actions/auth';
import {Redirect} from 'react-router-dom';
import {Wrapper,Form,Label,Input,SubmitButton, FormImage,FormLink,SeparatorWrapper,Separator} from './StyledForm';


const Login = ({login,isAuthenticated, isLoading,user})  => {

    const [formData,setFormData] = useState({
        email : '',
        password : ''
    });

    const {email, password} = formData;
    
    const onChange = (e) => {
        setFormData({...formData , [e.target.name]: e.target.value})
    };

    const onSubmit =  (e) => {
        e.preventDefault(); 
         login({email,password});
    };

    if(isAuthenticated && !isLoading && user !== null){
        return  <Redirect to="/dashboard"/>
     }

    return (
        <Wrapper>
            <FormImage />
            <Form onSubmit = {e => onSubmit(e)}>
                <Label><span>E-mail</span></Label>
                <Input type ="text"  name="email" placeholder ="email"  value={email} onChange={e => onChange(e)}></Input>
                <Label><span>Password</span></Label>
                <Input type ="password" name="password" placeholder="password" value={password} onChange={e => onChange(e)}></Input>
                <SubmitButton type ="submit">Login</SubmitButton>
            </Form>
            <FormLink>Forgot your password?</FormLink>
            <SeparatorWrapper>   <Separator/>  Or <Separator/>  </SeparatorWrapper>
            <FormLink>Create a new account</FormLink>
        </Wrapper>
    );
};



const mapStateToProps = (state) => {
   return {isAuthenticated : state.auth.isAuthenticated , isLoading : state.auth.loading , user: state.auth.user};
};


export default connect(mapStateToProps,{setAlert,login,loadUser})(Login);
