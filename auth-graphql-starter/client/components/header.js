import React, { Component } from "react";
import gql from 'graphql-tag';
import { Link } from 'react-router';
import { graphql } from 'react-apollo';
import getUserQuery from '../queries/getUser';

class Header extends Component {
    renderForNonLoggedInUser() {
        return (
            <div className="right">
                <li>
                    <Link to="/login">LogIn</Link>
                </li>
                <li>
                    <Link to="/signup" >SignUp</Link>
                </li>
            </div>
        )
    }

    onLogout() {
        this.props.mutate({ refetchQueries: [{ query: getUserQuery }] }).then(() => {
            console.log("Logout", this)
        })
    }

    renderForLoggedInUser() {
        return (
            <button onClick={() => this.onLogout()}>Logout</button>
        )
    }

    render() {
        return (
            <nav className='nav-wrapper'>
                <Link to="/" className="brand-logo left">
                    Home
                </Link>
                <ul className="right">
                    {
                        this.props.data.user ? this.renderForLoggedInUser() : this.renderForNonLoggedInUser()
                    }
                </ul>

            </nav>
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

export default graphql(mutate)(graphql(getUserQuery)(Header));