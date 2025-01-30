import React, {Component} from 'react';
import { Link } from 'react-router';


class App extends Component{
    renderForNonLoggedInUser(){
        return (
            <div>
             <Link to="/login">LogIn</Link>
             <Link to="/signup" >SignUp</Link>
            </div>
        )
    }

    renderForLoggedInUser(){
        return (
            <button>Logout</button>
        )
    }
    render(){
        return (
            <div className="container">
            <header>
                <div className="header-buttons">
                    {
                        false ? this.renderForNonLoggedInUser() : this.renderForLoggedInUser()
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

export default App;
