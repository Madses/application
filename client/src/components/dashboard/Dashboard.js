import React , {Fragment ,useEffect} from 'react';
import {connect} from 'react-redux';
import {loadUser} from '../../actions/auth';
import store from '../../store';
import {Header ,MainContent,SideNav,SideNavLink} from './StyledDashboard'; 


const Dashboard = ({user}) => {
    return (
        
        <>
            <SideNav>
                <SideNavLink>Dashboard</SideNavLink>
                <SideNavLink>Modules</SideNavLink>
                <SideNavLink>Views</SideNavLink>
                <SideNavLink>Routing</SideNavLink>
                <SideNavLink>Another</SideNavLink>
                <SideNavLink>Settings</SideNavLink>
            </SideNav>

            <Header/>
            <MainContent>
                <h1>{user ? (` Hi, ${user.name}`) : ('loading...')}</h1> 
            </MainContent>
        </>
    )

};

const mapStateToProps = (state) => {
    return {user : state.auth.user};
};


export default connect(mapStateToProps,{loadUser})(Dashboard);
