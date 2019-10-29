import React , {Fragment} from 'react';
import {Provider} from 'react-redux';
import store from './store';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';
import Register from './components/auth/Register';
import './App.css';

const App = () => (
    <Provider store={store}>
        <Fragment>
            <Alert/>
            <Register/>
        </Fragment>
    </Provider>
);

export default App;
