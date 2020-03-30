import React, { Component, FormEvent } from 'react';
import axios from 'axios';
import { IUserResponse } from '../Authorization/Authorization';

interface IUserRegisterState {
    userName: string;
    password: string;
}

export default class UserRegister extends Component<{}, IUserRegisterState> {
    constructor(props: any) {
        super(props);
        this.state = { userName: '', password: '' };
        this.refresh = this.refresh.bind(this);
    }

    refresh(event: React.MouseEvent<HTMLButtonElement>) {
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
    }

    render() {
        return <div data-testid="userList"></div>;
    }
}
