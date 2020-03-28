import React, { FormEvent, ChangeEvent } from 'react';
import axios from 'axios';

interface IUserResponse {
    id: number;
    firstName: string;
    lastName: string;
    userName: string;
    password: string;
    token: string;
}

interface IAuthorizationState {
    userName: string;
    password: string;
}

interface IAuthorizationProps {}

export default class Authorization extends React.Component<IAuthorizationProps, IAuthorizationState> {
    constructor(props: IAuthorizationProps) {
        super(props);
        this.state = { userName: '', password: '' };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onUserNameChange = this.onUserNameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onLogOut = this.onLogOut.bind(this);
    }

    onUserNameChange(event: ChangeEvent<HTMLInputElement>) {
        this.setState({ userName: event.target.value });
    }

    onPasswordChange(event: ChangeEvent<HTMLInputElement>) {
        this.setState({ password: event.target.value });
    }

    onLogOut(event: React.MouseEvent<HTMLElement>) {
        localStorage.setItem('jwt', '');
        console.log('logout');
        this.forceUpdate();
    }

    handleSubmit(event: FormEvent<HTMLFormElement>) {
        console.log();
        axios
            .post<IUserResponse>('https://localhost:5001/api/User', {
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
                this.state = { userName: '', password: '' };
            });
        event.preventDefault();
    }

    public render() {
        var jwt = localStorage.getItem('jwt');
        if (jwt == null || jwt == '') {
            return (
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>
                            UserName:
                            <input type="text" onChange={this.onUserNameChange} />
                        </label>
                        <label>
                            Password:
                            <input type="password" onChange={this.onPasswordChange} />
                        </label>
                        <button type="submit" className="btn btn-primary">
                            Login
                        </button>
                    </div>
                </form>
            );
        } else {
            return (
                <button type="button" className="btn btn-primary" onClick={this.onLogOut}>
                    LogOut
                </button>
            );
        }
    }
}
