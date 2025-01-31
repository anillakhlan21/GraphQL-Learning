import gql from 'graphql-tag';
import React, {Component} from 'react';
import { Link } from 'react-router';
import { graphql } from 'react-apollo';

class App extends Component{
    renderForNonLoggedInUser(){
        return (
            <div>
             <Link to="/login">LogIn</Link>
             <Link to="/signup" >SignUp</Link>
            </div>
        )
    }

    onLogout(){
        this.props.mutate().then(()=>{
            console.log("Logout")
        })
    }

    renderForLoggedInUser(){
        return (
            <button onClick={()=>this.onLogout()}>Logout</button>
        )
    }
    render(){
        return (
            <div className="container">
            <header>
                <div className="header-buttons">
                    {
                       this.props.data.user ? this.renderForLoggedInUser() : this.renderForNonLoggedInUser()
                    }
                </div>
    
            </header>
            <hr />
            <div>
                {this.props.children}
            </div>
        </div>
        )
    }
}

const query = gql`
    query GetUser{
    user{
        _id,
        email
    }
    }
`;

const mutate = gql`
    mutation Logout{
        logout{
            _id
        }
    }
`

export default graphql(mutate)(graphql(query)(App));
