import axios from 'axios';
import { FormEvent, Component, ChangeEvent } from 'react';
import Login from './Login';
import React from 'react';
import Logout from './Logout';

export interface IUserResponse {
    id: number;
    firstName: string;
    lastName: string;
    userName: string;
    password: string;
    token: string;
}

interface IAuthorizationProps {
    // onSubmit(event: FormEvent<HTMLFormElement>): void;
    // userName: string;
    // password: string;
}

interface IAuthorizedState {
    userName: string;
    password: string;
}

export default class Authorization extends Component<IAuthorizationProps, IAuthorizedState> {
    constructor(props: IAuthorizationProps) {
        super(props);
        this.state = { userName: '', password: '' };
        this.handleLogout = this.handleLogout.bind(this);
        this.onUserNameChange = this.onUserNameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
    }

    handleSubmit(event: FormEvent<HTMLFormElement>) {
        console.log(this.state);
        axios
            .post<IUserResponse>('https://localhost:5001/api/User/Login', {
                UserName: this.state.userName,
                Password: this.state.password,
            })
            .then((response) => {
                localStorage.setItem('jwt', response.data.token);
                this.forceUpdate();
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                this.setState({ userName: '', password: '' });
                this.forceUpdate();
            });
        event.preventDefault();
    }

    onUserNameChange(event: ChangeEvent<HTMLInputElement>) {
        this.setState({ userName: event.target.value });
    }

    onPasswordChange(event: ChangeEvent<HTMLInputElement>) {
        this.setState({ password: event.target.value });
    }

    handleLogout(event: FormEvent<HTMLFormElement>) {
        localStorage.setItem('jwt', '');
        console.log('logout');
        this.forceUpdate();
    }

    public render() {
        var jwt = localStorage.getItem('jwt');
        if (jwt === null || jwt === '') {
            return (
                <Login
                    onSubmit={this.handleSubmit.bind(this)}
                    onPasswordChange={this.onPasswordChange.bind(this)}
                    onUserNameChange={this.onUserNameChange.bind(this)}
                ></Login>
            );
        } else {
            return <Logout onSubmit={this.handleLogout.bind(this)} />;
        }
    }
}
