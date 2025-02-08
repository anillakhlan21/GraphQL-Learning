import React, { Component } from "react";
import gql from 'graphql-tag';
import { Link } from 'react-router';
import { graphql } from 'react-apollo';
import getUserQuery from '../queries/getUser';

class Header extends Component {
    renderLoginButtons() {
        return (
            this.props.data.user ?
                (
                    <li>
                        <Link onClick={this.onLogout.bind(this)}>Logout</Link>
                    </li>
                ) :
                (
                    <div>
                        <li>
                            <Link to="/login">LogIn</Link>
                        </li >
                        <li>
                            <Link to="/signup" >SignUp</Link>
                        </li>
                    </div>
                )
        )
    }

    onLogout() {
        this.props.mutate({ refetchQueries: [{ query: getUserQuery }] }).then(() => {
        })
    }

    render() {
        return (
            <nav className='nav-wrapper'>
                <Link to="/" className="brand-logo left">
                    Home
                </Link>
                <ul className="right">
                    {this.renderLoginButtons()}
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