import styled from 'styled-components'

const Wrapper = styled.div`
    margin: auto;
    width:400px;
    height:400px;
    background:white;

    padding: 10px;
    margin-top:200px;
    margin-top:50px;
`; 

const Form = styled.form`
   width: 400px;
   margin: 0 auto;
   margin-top:60px;
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
    padding-left:15%;
    height: 20px;
    text-align:left;
`;

export {
    Wrapper,
    Form,
    Input,
    SubmitButton,
    Label
}