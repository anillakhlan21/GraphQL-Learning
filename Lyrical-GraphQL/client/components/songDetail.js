import React,{Component} from 'react';
import query from '../queries/getSongById';
import {graphql} from 'react-apollo';
import {Link} from 'react-router';
import CreateLyric from './createLyric';
import LyricList from './lyricList';
class SongDetail extends Component{
    
    render(){
        const {song} = this.props.data;
        if(!song) {return (<div>...Loading</div>)}
        return (
            <div>
                <Link to="/">Back</Link>
                <h3>{song.title}</h3>
                <CreateLyric songId={this.props.params.id}/>
                <LyricList songId={this.props.params.id}/>
            </div>
        )
    }
}



export default graphql(query, { options: (props)=> { return { variables: { id:  props.params.id}}}})(SongDetail);