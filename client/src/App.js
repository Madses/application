import React , {Fragment ,useEffect} from 'react';
import {Provider} from 'react-redux';
import store from './store';
import Login from './components/auth/Login';
import Dashboard from './components/dashboard/Dashboard';
import Alert from './components/layout/Alert';
import Register from './components/auth/Register';
import PrivateRoute from './components/routing/PrivateRoute';
import setAuthToken from './utils/setAuthToken';
import {loadUser} from './actions/auth'; 

import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";



if(localStorage.token) setAuthToken(localStorage.token); 


const App = () => {

    useEffect(() => {
        store.dispatch(loadUser());
    },[]);

    return (
        <Provider store={store}>
            <Alert/>
            <Router>
                <Switch>
                    <Route exact path="/register" component={Register}/>
                    <Route exact path="/login" component={Login} />
                    <PrivateRoute exact path="/dashboard" component={Dashboard} />
                </Switch>
            </Router>
        </Provider>
)};

export default App;
