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
import { createGlobalStyle } from 'styled-components'; 

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";


const GlobalStyle = createGlobalStyle`
  body {
    background: #f4f4f4;
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
    margin:0;
  }
`;


if(localStorage.token) setAuthToken(localStorage.token); 


const App = () => {

    useEffect(() => {
        store.dispatch(loadUser());
    },[]);

    return (
        <>
        <Provider store={store}>
        <GlobalStyle />
            <Alert/>
            <Router>
                <Switch>
                    <Route exact path="/register" component={Register}/>
                    <Route exact path="/login" component={Login} />
                    <PrivateRoute exact path="/dashboard" component={Dashboard} />
                </Switch>
            </Router>
        </Provider>
        </>
)};

export default App;
