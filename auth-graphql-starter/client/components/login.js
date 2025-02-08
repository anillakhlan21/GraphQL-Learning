import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import getUser from '../queries/getUser';
import AuthForm from './authForm';
import { browserHistory } from 'react-router';
import query from '../queries/getUser';
class Login extends Component {
    constructor(props){
        super(props);
        this.state = { errors: []}
    }

    onLogin(state) {
        const { email, password } = state;
        this.props.mutate({ variables: { email, password }, refetchQueries: [{ query: getUser }] }).catch((res)=>{
            const errors = res.graphQLErrors.map(err=> err.message);
            this.setState({errors})
        }).then(()=>{
            
        })
    }

    componentWillUpdate(nextProps){
        debugger
        if(!this.props.data.user && nextProps.data.user){
            browserHistory.push('/dashboard');
        }
    }

    render() {
        return (
            <div>
                <h3>Login</h3>
                <AuthForm errors={this.state.errors} isSignUp={false} onSubmit={this.onLogin.bind(this)} buttonName="Login" />
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

export default graphql(mutation)(graphql(query)(Login));