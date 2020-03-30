import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';
import Authorization from './Authorization/Authorization';
import UserList from './User/UserList';
import UserRegister from './User/UserRegister';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <Link to="/Login">Login</Link>
                        <Link to="/UserRegister">Register user</Link>
                        <Link to="/UserList">User List</Link>
                    </header>
                    <Route path="/Login" component={Authorization} />
                    <Route path="/UserList" component={UserList} />
                    <Route path="/UserRegister" component={UserRegister} />
                </div>
            </Router>
        );
    }
}
