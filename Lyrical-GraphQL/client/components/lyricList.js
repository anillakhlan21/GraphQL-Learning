import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import likeLyricMutation from '../queries/likeLyric';
import mutation from '../queries/likeLyric';
import { optimistic } from 'apollo-client/optimistic-data/store';
class LyricList extends Component {
    constructor(props) {
        super(props);
    }

    onLikeButtonClick(lyricId, likes) {
        this.props.mutate({ variables: { id: lyricId }, optimisticResponse: {
            __typename: "Mutation",
            likeLyric: {
                __typename: "LyricType",
                id: lyricId,
                likes: likes+1
            },

        } })
    }

    render() {
        return (
            <div>
                <h4>Lyric List</h4>
                <ul className='collection'>
                    {
                        this.props.lyricList.map(lyric => {
                            return <li className="collection-item" key={lyric.id}>
                                {lyric.content}
                                <div className="vote-box">
                                        <i className="material-icons" onClick={() => { this.onLikeButtonClick(lyric.id, lyric.likes) }}>
                                            thumb_up
                                        </i>
                                        {lyric.likes || 0}
                                    
                                </div>


                            </li>
                        })
                    }
                </ul>
            </div>
        )
    }


}

export default graphql(mutation)(LyricList);