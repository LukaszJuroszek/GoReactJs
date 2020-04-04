import React, { Component, FormEvent, ChangeEvent } from 'react';
import axios from 'axios';

interface IUserRegisterResponse {
    FirstName: string;
    LastName: string;
    userName: string;
    password: string;
}

interface IUserRegisterState {
    firstName: string;
    lastName: string;
    userName: string;
    password: string;
}

export default class UserRegister extends Component<{}, IUserRegisterState> {
    constructor(props: any) {
        super(props);
        this.state = { userName: '', password: '', firstName: '', lastName: '' };
        this.onSubmit = this.onSubmit.bind(this);
        this.onUserNameChange = this.onUserNameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onLastNameChange = this.onLastNameChange.bind(this);
        this.onFirstNameChange = this.onFirstNameChange.bind(this);
    }

    onSubmit(event: FormEvent<HTMLFormElement>) {
        axios
            .post<IUserRegisterResponse>('https://localhost:5001/api/User/Register', {
                UserName: this.state.userName,
                Password: this.state.password,
                FirstName: this.state.firstName,
                LastName: this.state.lastName,
            })
            .then((response) => {
                console.log(response.status == 200);
                this.forceUpdate();
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                this.setState({ userName: '', password: '', firstName: '', lastName: '' });
                this.forceUpdate();
            });
    }

    onUserNameChange(event: ChangeEvent<HTMLInputElement>) {
        this.setState({ userName: event.target.value });
    }

    onPasswordChange(event: ChangeEvent<HTMLInputElement>) {
        this.setState({ password: event.target.value });
    }

    onLastNameChange(event: ChangeEvent<HTMLInputElement>) {
        this.setState({ lastName: event.target.value });
    }

    onFirstNameChange(event: ChangeEvent<HTMLInputElement>) {
        this.setState({ firstName: event.target.value });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div>Register new user:</div>
                <div className="form-group">
                    <label>
                        First name:
                        <input type="text" data-testid="firstNameInput" onChange={this.onFirstNameChange} />
                    </label>
                    <label>
                        Last name:
                        <input type="text" data-testid="lastNameInput" onChange={this.onLastNameChange} />
                    </label>
                    <label>
                        UserName:
                        <input type="text" data-testid="userNameInput" onChange={this.onUserNameChange} />
                    </label>
                    <label>
                        Password:
                        <input type="password" data-testid="passwordInput" onChange={this.onPasswordChange} />
                    </label>
                    <button type="submit" data-testid="registerButton" className="btn btn-primary">
                        Register
                    </button>
                </div>
            </form>
        );
    }
}
