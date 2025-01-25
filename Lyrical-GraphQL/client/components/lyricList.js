import React, {Component} from 'react';
import { graphql } from 'react-apollo';
import query from '../queries/getLyricList';
class LyricList extends Component{
    constructor(props){
        super(props);

    }

    render(){
        if(this.props.data.loading){
            return <div>...Loading</div>
        }
        return (
            <div>
                <h4>Lyric List</h4>
          <ul>
                { 
                this.props.data.song.lyrics.map(lyric=>{
                    return <li key={lyric.id}>{lyric.content}</li>
                })
                }
            </ul>
            </div>
  
        )
    }


}

export default graphql(query, {options: (props)=>{ return {variables: {id: props.songId}}}})(LyricList);