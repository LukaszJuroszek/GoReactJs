import React, { Component, FormEvent } from 'react';
import axios from 'axios';
import { IUserResponse } from '../Authorization/Authorization';

interface IUserListState {
    users: IUserResponse[];
}

export default class UserList extends Component<{}, IUserListState> {
    constructor(props: any) {
        super(props);
        this.state = { users: [] };
        this.refresh = this.refresh.bind(this);
        this.refreshUser();
    }

    refreshUser() {
        const jwt = localStorage.getItem('jwt');
        const config = {
            headers: { Authorization: `Bearer ${jwt}` },
        };

        axios
            .get<IUserResponse[]>('https://localhost:5001/api/User', config)
            .then((response) => {
                this.setState({ users: response.data });
            })
            .catch((error) => {
                console.log(error);
                this.setState({ users: [] });
            });
    }

    refresh(event: React.MouseEvent<HTMLButtonElement>) {
        this.refreshUser();
    }

    public render() {
        const users = this.state.users;
        return (
            <div data-testid="userList">
                <button className="btn btn-primary" onClick={this.refresh} data-testid="refreshButton">
                    Refresh
                </button>
                {users.map((item, key) => (
                    <div data-testid="user" key={key.toString()}>
                        <span data-testid="userId">{item.id}</span>
                        <span data-testid="userName">{item.userName}</span>
                    </div>
                ))}
            </div>
        );
    }
}
