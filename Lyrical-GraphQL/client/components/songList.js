import React, { Component } from 'react';
import gql from 'graphql-tag'
import { graphql } from 'react-apollo';
import { divide } from 'lodash';
import { Link } from 'react-router';
import query from '../queries/getSongs';

class SongList extends Component {
    onDelete(id){
        this.props.mutate({variables: {id}}).then(()=>{
            this.props.data.refetch();
        })
    }

    renderSongs() {
        return this.props.data.songs.map(({id, title}) =>
            <li key={id} className="collection-item">
                {title}
                <i className="material-icons" onClick={()=> this.onDelete(id)}>delete</i>
            </li>
        )
    }
    render() {
        if (this.props.data.loading) return <div> Loading...</div>

        return (
            <div>
            <ul className="collection">
                {this.renderSongs()}
            </ul>
            <Link to="/songs/create" className="btn-floating btn-large red right">
                <i className="material-icons">add</i>
            </Link>
        </div>
        )


    }
}

const mutation = gql`
mutation DeleteSong($id: ID){
    deleteSong(id: $id){
        id
    }    
}
`



export default graphql(mutation)(graphql(query)(SongList));

