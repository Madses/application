import React , {Fragment ,useEffect} from 'react';
import {connect} from 'react-redux';
import {loadUser} from '../../actions/auth';
import store from '../../store';
import {Header,NavMenuVisible,NavItem,Separato,Icon} from './StyledDashboard'; 
import { FaAdn ,FaHome,FaDiceD6,FaRegPaperPlane,FaBriefcase} from "react-icons/fa";

const Dashboard = ({user}) => {
    return (
        <>
            <Header />
    
                <NavMenuVisible>
                    <NavItem><Icon><FaHome /></Icon>Dashboard</NavItem>
               
                    <NavItem><Icon><FaRegPaperPlane /></Icon>Companies</NavItem>
                
                    <NavItem><Icon><FaBriefcase /></Icon> Sales</NavItem>
                
                    <NavItem><Icon>< FaDiceD6/></Icon>Projects</NavItem>
                   
                </NavMenuVisible>

        </>
    )

};

const mapStateToProps = (state) => {
    return {user : state.auth.user};
};


export default connect(mapStateToProps,{loadUser})(Dashboard);
