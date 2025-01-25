import React,{Component} from 'react';
import query from '../queries/getSongById';
import {graphql} from 'react-apollo';
import {Link} from 'react-router';

class SongDetail extends Component{
    
    render(){
        console.log(this.props)
        const {song} = this.props.data;
        if(!song) {return (<div>...Loading</div>)}
        return (
            <div>
                <Link to="/">Back</Link>
                <h3>{song.title}</h3>
            </div>
        )
    }
}



export default graphql(query, { options: (props)=> { return { variables: { id:  props.params.id}}}})(SongDetail);