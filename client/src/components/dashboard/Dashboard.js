import React from 'react'
import {connect} from 'react-redux';
import {loadUser} from '../../actions/auth';

const Dashboard = ({auth,loadUser}) => {
    loadUser();
    return(
        <div>
            {auth.user.name}
        </div>
    )
}



const mapStateToProps = (state) => {
    return {auth : state.auth}; 
 };
 

 export default connect(mapStateToProps, {loadUser})(Dashboard);