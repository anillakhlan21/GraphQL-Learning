import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import likeLyricMutation from '../queries/likeLyric';
import mutation from '../queries/likeLyric';
class LyricList extends Component {
    constructor(props) {
        super(props);
    }

    onLikeButtonClick(lyricId) {
        this.props.mutate({ variables: { id: lyricId } })
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
                                        <i className="material-icons" onClick={() => { this.onLikeButtonClick(lyric.id) }}>
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