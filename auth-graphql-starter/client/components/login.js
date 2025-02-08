import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import getUser from '../queries/getUser';
import AuthForm from './authForm';
class Login extends Component {

    constructor(props) {
        super(props)

        this.state = { email: "", password: "" };
    }

    onLogin() {
        const { email, password } = this.state;
        this.props.mutate({ variables: { email, password }, refetchQueries: [{ query: getUser }] }).then(() => {
            this.setState({ email: "", passowrd: "" });
        })
    }

    render() {
        return (
            <div>
                <h3>Login</h3>
                <AuthForm isSignUp={false} onSubmit={this.onLogin} buttonName="Login" />
            </div>
        )

    }
}

const mutation = gql`
    mutation Login($email: String!, $password: String!){
        login(email: $email, password: $password){
            id,
            email
        }
    }
`

export default graphql(mutation)(Login);