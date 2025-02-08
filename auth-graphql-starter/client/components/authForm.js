import React, { Component } from "react";

class AuthForm extends Component {

    constructor(props) {
        super(props);
        this.state = { email: '', password: '' }
    }

    renderConfirmPasswordField() {
        return (
            <div className="input-field">
                <label>Confirm Password</label>
                <input onChange={(event) => this.setState({ confirmPassword: event.target.value })} />
            </div>
        )
    }

    render() {
        return (
            <div className="row">
                <form className="col s4">
                    <div className="input-field">
                        <label>Email</label>
                        <input onChange={(event) => this.setState({ email: this.target.value })} />
                    </div>
                    <div className="input-field">
                        <label>Password</label>
                        <input onChange={(event) => this.setState({ password: event.target.value })} />
                    </div>
                    {this.props.isSignUpForm && this.renderConfirmPasswordField()}
                    <button className="btn" onClick={() => this.props.onSubmit()}>{this.props.buttonName}</button>
                </form>
            </div>
        )
    }
}

export default AuthForm;