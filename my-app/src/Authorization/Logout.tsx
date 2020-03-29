import React, { FormEvent } from 'react';

interface ILogoutProps {
    onSubmit(event: FormEvent<HTMLFormElement>): void;
}

export default class Logout extends React.Component<ILogoutProps> {
    constructor(props: ILogoutProps) {
        super(props);
    }

    public render() {
        return (
            <form onSubmit={this.props.onSubmit}>
                <div className="form-group">
                    <button type="submit" data-testid="logoutButton" className="btn btn-primary">
                        Logout
                    </button>
                </div>
            </form>
        );
    }
}
