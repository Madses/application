import styled from 'styled-components'; 


const Header = styled.div`
    width:100%;
    height:50px;
    background: #00ccbc;
    position:fixed;
    top:0;
    -webkit-box-shadow: 1px 2px 5px 0px rgba(0,0,0,0.62);
    -moz-box-shadow: 1px 2px 5px 0px rgba(0,0,0,0.62);
    box-shadow: 1px 2px 5px 0px rgba(0,0,0,0.62);
`; 




const NavMenuVisible = styled.div`
    width: 150px; 
    float:left;
    padding-top:80px;
    float:left;
    background:white;
    height: 100%;
    display:inline-block;
    transition:0.2s;
`; 

const NavItem = styled.div`
    width: 100%; 
    height:30px;
    padding-top:16px;
    color: #00ccbc;
    border-bottom:0.5px solid #ececec;
    cursor:pointer;
    font-size:10px;
        :hover{
            color:white;
            transition:0.3s;
            background:#00ccbc;
        }
`; 


const Icon = styled.div`
    width: 30px; 
    height:30px;
    font-size:15px;
    text-align:center;
    display:inline-block;
    float:left;
    margin-top:-5px;
    margin-left:20px;
    margin-right: 3px;
`; 





export {
    Header,
    NavMenuVisible,
    NavItem,
    Icon
}