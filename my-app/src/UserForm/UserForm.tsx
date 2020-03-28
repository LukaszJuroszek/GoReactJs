import React, { FormEvent, ChangeEvent } from 'react';
import axios from 'axios';

interface IUserState {
    firstName: string;
    lastName: string;
}

interface IUserProps {}

export default class UserForm extends React.Component<IUserProps, IUserState> {
    constructor(props: IUserProps) {
        super(props);
        this.state = { firstName: '', lastName: '' };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onFirstNameChange = this.onFirstNameChange.bind(this);
        this.onLastNameChange = this.onLastNameChange.bind(this);
    }

    onFirstNameChange(event: ChangeEvent<HTMLInputElement>) {
        this.setState({ firstName: event.target.value });
    }

    onLastNameChange(event: ChangeEvent<HTMLInputElement>) {
        this.setState({ lastName: event.target.value });
    }

    handleSubmit(event: FormEvent<HTMLFormElement>) {
        const jwt = localStorage.getItem('jwt');
        const config = {
            headers: { Authorization: `Bearer ${jwt}` },
        };
        console.log(jwt);
        axios
            .get('https://localhost:5001/api/User', config)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {});

        event.preventDefault();
    }

    public render() {
        const { firstName, lastName } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>
                        FirstName:
                        <input type="text" value={firstName} onChange={this.onFirstNameChange} />
                    </label>
                    <label>
                        LastName:
                        <input type="text" value={lastName} onChange={this.onLastNameChange} />
                    </label>
                    <button type="submit" className="btn btn-primary">
                        Wyślij
                    </button>
                </div>
            </form>
        );
    }
}
