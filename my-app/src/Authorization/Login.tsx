import React, { FormEvent, ChangeEvent } from 'react';

interface ILoginProps {
    onSubmit(event: FormEvent<HTMLFormElement>): void;
    onUserNameChange(event: ChangeEvent<HTMLInputElement>): void;
    onPasswordChange(event: ChangeEvent<HTMLInputElement>): void;
}

export default class Login extends React.Component<ILoginProps> {
    constructor(props: ILoginProps) {
        super(props);
    }

    public render() {
        return (
            <form onSubmit={this.props.onSubmit}>
                <div>Pleas login first:</div>
                <div className="form-group">
                    <label>
                        UserName:
                        <input type="text" onChange={this.props.onUserNameChange} />
                    </label>
                    <label>
                        Password:
                        <input type="password" onChange={this.props.onPasswordChange} />
                    </label>
                    <button type="submit" className="btn btn-primary">
                        Login
                    </button>
                </div>
            </form>
        );
    }
}
