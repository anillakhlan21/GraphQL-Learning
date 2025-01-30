import React, { Component } from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';

class Login extends Component{

    constructor(props){
        super(props)

        this.state = {email: "", password: ""};
    }

    onLogin(){
        this.props.mutate({variables: {email: "anil@gmail.com", password: "123"}})
    }

    render(){
        return (<div>
            <form>
                <label>Email</label>
                <input onChange={(event)=> this.state.email = event.target.value}/>
                <label>Password</label>
                <input onChange={(event)=> this.state.password = event.target.value}/>
                <button onClick={()=>this.onLogin()}>Login</button>
            </form>
        </div>)
    }
}

const mutation = gql`
    mutation Login($email: String!, $password: String!){
        login(email: $email, password: $password){
            email
        }
    }
`

export default graphql(mutation)(Login);