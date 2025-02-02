import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import getUser from '../queries/getUser';
class Signup extends Component {

    constructor(props){
        super(props)

        this.state = {email: "", password: "", confirmPassword: ""};
    }
    onSignup() {
        if(this.state.password != this.state.confirmPassword){
            console.log("Wrong Password");
            return
        }

        this.props.mutate({variables: {email: this.state.email, password: this.state.password},  refetchQueries: [{ query: getUser}]}).then((res)=>{
            console.log(res, "signed up")
        });
    }

    render() {
        return (<div>
            <form>
                <label>Email</label>
                <input onChange={(event)=> this.setState({email: event.target.value})}/>
                <label>Password</label>
                <input onChange={(event)=> this.setState({password: event.target.value})}/>
                <label>Confirm Password</label>
                <input onChange={(event)=> this.setState({confirmPassword: event.target.value})}/>
                <button onClick={()=>this.onSignup()}>SignUp</button>
            </form>
        </div>)
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