import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import './App.css';
import UserForm from './UserForm/UserForm';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <UserForm />
            </header>
        </div>
    );
}

export default App;
