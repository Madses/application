import styled from 'styled-components'; 


const Header = styled.div`
    width:100%;
    height:50px;
    background: #00ccbc;
    position:fixed;
    top:0;
`; 

const MainContent = styled.div`
    width:60%;
    height:800px;
    background: #fff;
    margin:0 auto;
    margin-top:70px;
    color: black;
    text-align:center;
    padding-top:10px;
`; 


const SideNav = styled.div`
    width:120px;
    height:100%;
    position:fixed;
    background: #fff;
    float:left;
    top:0;
    padding-top:80px;

`; 

const SideNavLink = styled.a`
    width:100%;
    height:20px;
    color: #828282;
    padding-left:20px;
    cursor:pointer;
    font-size:12px;
    display: block;
    padding-top:8px;
    :hover{
        color:#00ccbc;
    }
`; 

export {
    Header,
    MainContent,
    SideNav,
    SideNavLink

}