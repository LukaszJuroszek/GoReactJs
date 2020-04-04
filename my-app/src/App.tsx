import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';

import './App.css';
import Authorization from './Authorization/Authorization';
import UserList from './User/UserList';
import UserRegister from './User/UserRegister';

export default class App extends Component {
    render() {
        var isAuth = localStorage.getItem('jwt') !== null && localStorage.getItem('jwt') !== '';
        console.log(isAuth);
        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <NavLink to="/Login">Login</NavLink>
                        <NavLink to="/UserRegister">Register user</NavLink>
                        <NavLink to="/UserList">User List</NavLink>
                    </header>
                    <Route path="/Login" component={Authorization} />
                    <Route path="/UserList" component={UserList} />
                    <Route path="/UserRegister" component={UserRegister} />
                </div>
            </Router>
        );
    }
}
