import styled from 'styled-components'
import logo from '../../img/formLogo.png'; 

const Wrapper = styled.div`
    margin: auto;
    width:330px;
    min-height:400px;
    background:white;
    height:auto;
    padding: 10px;
    margin-top:10%;
    text-align:center;
`; 

const Form = styled.form`
   width: 330px;
   margin: 0 auto;
   margin-top:-5%;
   background: orange;
   text-align:center
   padding-top:20px;
   padding-bottom:20px;
   background:white;
`;

const Input = styled.input`
    width: 275px;
    height: 25px;
    outline: none;
    margin-bottom:10px;
    padding-left:5px;
    border-radius: 5px;
    border:none;
    border:1px solid #d3d3d3;
`;


const SubmitButton = styled.button`
    width: 275px;
    font-size: 15px;
    padding: 8px 12px;
    border: none;
    color:white;
    background-color: #00ccbc;
    margin: 8px 0 8px 0;
    -webkit-border-radius: 5px;
    border-radius: 5px;
`;

const Label = styled.div`
    width: 100%;
    font-size: 15px;
    margin: 0 auto; 
    color:#00ccbc;
    padding-left:8%;
    height: 20px;
    text-align:left;
`;


const FormImage = styled.div`
    width: 200px;
    height:200px;
    margin: 0 auto;
    margin-top: -25%;
    background-image: url(${logo});
    background-size:cover;
    background-repeat:no-repeat;
`;

const FormLink = styled.a`
    text-align:center;
    color:#00ccbc;
    font-size:13px;
    cursor:pointer;
`;

const SeparatorWrapper = styled.div`=
    width:100%;
    margin-top:10px;
    color:#dcdcdc;
    font-size:12px;
    margin-bottom: 10px;
`;
const Separator = styled.div`
    width:30%;
    border-bottom:0.5px solid #dcdcdc;
    display:inline-block;
`;

export {
    Wrapper,
    Form,
    Input,
    SubmitButton,
    Label,
    FormImage,
    FormLink,
    SeparatorWrapper,
    Separator
}