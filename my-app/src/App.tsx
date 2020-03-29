import 'bootstrap/dist/css/bootstrap.css';
import React, { Component, FormEvent } from 'react';
import './App.css';
import Authorization from './Authorization/Authorization';
import UserList from './User/UserList';

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Authorization />
                </header>
                <div>
                    <UserList />
                </div>
            </div>
        );
    }
}
