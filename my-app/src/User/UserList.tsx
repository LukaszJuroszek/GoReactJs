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
    }

    refresh(event: React.MouseEvent<HTMLButtonElement>) {
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

    render() {
        const users = this.state.users;
        return (
            <div>
                <button onClick={this.refresh}>Refresh</button>
                {users.map((item, key) => (
                    <div key={key.toString()}>
                        {item.id} {item.userName}
                    </div>
                ))}
            </div>
        );
    }
}
