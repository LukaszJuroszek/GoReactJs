import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import './App.css';
import UserForm from './UserForm/UserForm';
import Authorization from './Authorization/Authorization';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Authorization />
                <UserForm />
            </header>
        </div>
    );
}

export default App;
