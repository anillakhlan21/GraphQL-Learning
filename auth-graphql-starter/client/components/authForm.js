import React, { Component } from "react";

class AuthForm extends Component {

    renderConfirmPasswordField() {
        return (
            <div>
                <label>Confirm Password</label>
                <input onChange={(event) => this.setState({ confirmPassword: event.target.value })} />
            </div>
        )
    }

    render() {
        return (
            <div>
                <form>
                    <label>Email</label>
                    <input onChange={(event) => this.state.email = event.target.value} />
                    <label>Password</label>
                    <input onChange={(event) => this.state.password = event.target.value} />
                    {this.props.isSignUpForm && this.renderConfirmPasswordField()}
                    <button onClick={() => this.props.onSubmit()}>{this.props.buttonName}</button>
                </form>
            </div>
        )
    }
}

export default AuthForm;