import React, {Component} from 'react';
import gql from 'graphql-tag'
import { graphql } from 'react-apollo';
class CreateSong extends Component{
    constructor(props){
        super(props)
        this.state = { title: ''};
    }

    onSubmit(event){
        event.preventDefault();
        this.props.mutate({
            variables: {
                title: this.state.title
            }
        }).then(() => {
            console.log("Song created successfully!");
            this.setState({ title: '' }); // Clear the input field after submission
        }).catch(err => {
            console.error("Error creating song:", err);
        });
    }

    render(){
        return <div>
            <h3>Create New Song</h3>
            <form onSubmit={this.onSubmit.bind(this)}>
                <label>Title</label>
                <input 
                onChange={event => this.setState({title: event.target.value})}
                value = {this.state.title}
                />
            </form>
        </div>
    }
}

const mutation = gql`
        mutation AddSong($title: String!){
            addSong(title: $title){
                title
            }
        }
`

export default graphql(mutation)(CreateSong);

