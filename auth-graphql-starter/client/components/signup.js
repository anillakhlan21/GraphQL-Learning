import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import getUser from '../queries/getUser';
import AuthForm from './authForm';
class Signup extends Component {

    constructor(props) {
        super(props)
        this.state = { errors: [] };
    }

    onSignup(state) {
        if (state.password != state.confirmPassword) {
            this.setState({ errors: ['Password Mismatch'] })
            return
        }

        this.props.mutate({ variables: { email: state.email, password: state.password }, refetchQueries: [{ query: getUser }] }).then((res) => {
            this.setState({ errors: [] })
        }).catch(res => {
            const errors = res.graphQLErrors.map(err => err.message);
            this.setState({ errors });
        })
    }

    render() {
        return (
            <div>
                <h3>Sign Up</h3>
                <AuthForm errors={this.state.errors} isSignUp={true} onSubmit={this.onSignup.bind(this)} buttonName="Sign Up" />
            </div>
        )

    }
}

const mutation = gql`
    mutation Signup($email: String!, $password: String!){
        signup(email: $email, password: $password){
            id,
            email
        }
    }
`

export default graphql(mutation)(Signup);