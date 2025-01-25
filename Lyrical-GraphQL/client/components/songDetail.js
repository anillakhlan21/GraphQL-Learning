import React,{Component} from 'react';
import query from '../queries/getSongById';
import {graphql} from 'react-apollo';
import {Link} from 'react-router';
import CreateLyric from './createLyric';
import LyricList from './lyricList';
class SongDetail extends Component{
    
    render(){
        const {song} = this.props.data;
        console.log(this.props);
        if(!song) {return (<div>...Loading</div>)}
        return (
            <div>
                <Link to="/">Back</Link>
                <h3>{song.title}</h3>
                <CreateLyric songId={this.props.params.id}/>
                <LyricList lyricList={this.props.data.song.lyrics}/>
            </div>
        )
    }
}



export default graphql(query, { options: (props)=> { 
    console.log(props)
    return { variables: { id:  props.params.id}}}})(SongDetail);