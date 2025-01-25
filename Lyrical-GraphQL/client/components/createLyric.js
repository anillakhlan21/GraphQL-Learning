import React, {Component} from 'react';
import {Link} from 'react-router';
import mutate from '../queries/addLyricToSong';
import { graphql} from 'react-apollo';

class CreateLyric extends Component{

    constructor(props){
        super(props);
        this.state = {content: '' };
    }

    onSubmit(event){
        event.preventDefault()
        const {songId} = this.props;
        this.props.mutate({variables: {content: this.state.content, songId}}).then(()=>{
            this.setState({content: ''})
        })
    }

    render(){
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <label>Create Lyric</label>
                <input value={this.state.content} onChange={(event)=> this.setState({content: event.target.value})} />
            </form>
        )
    }
}

export default graphql(mutate)(CreateLyric);