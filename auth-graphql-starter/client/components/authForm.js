import React, { Component } from "react";

class AuthForm extends Component {

    constructor(props) {
        super(props);
        this.state = { email: '', password: '', confirmPassword: '' }
    }

    renderConfirmPasswordField() {
        return (
            <div className="input-field">
                <input type="password" placeholder="Confirm Password" onChange={(event) => this.setState({ confirmPassword: event.target.value })} />
            </div>
        )
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(this.state);
    }

    render() {
        return (
            <div className="row">
                <form className="col s6" onSubmit={this.onSubmit.bind(this)}>
                    <div className="input-field">
                        <input placeholder="Email" onChange={(event) => this.setState({ email: event.target.value })} />
                    </div>
                    <div className="input-field">
                        <input type="password" placeholder="Password" onChange={(event) => this.setState({ password: event.target.value })} />
                    </div>
                    {this.props.isSignUp && this.renderConfirmPasswordField()}

                    <div className="errors">
                        {
                            this.props.errors.map(error => {
                                return (
                                    <div>
                                        {error}
                                    </div>
                                )
                            })
                        }
                    </div>
                    <button className="btn">{this.props.buttonName}</button>
                </form>
            </div>
        )
    }
}

export default AuthForm;