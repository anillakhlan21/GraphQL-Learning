import gql from 'graphql-tag';
import React, {Component} from 'react';
import { Link } from 'react-router';
import { graphql } from 'react-apollo';
import getUserQuery  from '../queries/getUser';
class App extends Component{
    renderForNonLoggedInUser(){
        return (
            <span className="right">
             <Link to="/login">LogIn</Link>
             <Link to="/signup" >SignUp</Link>
            </span>
        )
    }

    onLogout(){
        this.props.mutate({ refetchQueries: [{ query: getUserQuery}]}).then(()=>{
            console.log("Logout", this)
        })
    }

    renderForLoggedInUser(){
        return (
            <button onClick={()=>this.onLogout()}>Logout</button>
        )
    }
    render(){
        return (
            <div>
            <nav className='nav-wrapper'>
                <Link to="/" className="brand-logo left">
                    Home
                </Link>
                    {
                       this.props.data.user ? this.renderForLoggedInUser() : this.renderForNonLoggedInUser()
                    }
            </nav>
            <hr />
            <div>
                {this.props.children}
            </div>
        </div>
        )
    }
}


const mutate = gql`
    mutation Logout{
        logout{
            id,
            email
        }
    }
`

export default graphql(mutate)(graphql(getUserQuery)(App));
