import React , {Fragment ,useEffect} from 'react';
import {connect} from 'react-redux';
import {loadUser} from '../../actions/auth';
import store from '../../store';


const Dashboard = ({user}) => {
    return (<div>
        <h1>{user ? (<div>{user.name}</div>) : (<div>loading...</div>)}</h1>
    </div>)

};

const mapStateToProps = (state) => {
    return {user : state.auth.user};
};


export default connect(mapStateToProps,{loadUser})(Dashboard);
