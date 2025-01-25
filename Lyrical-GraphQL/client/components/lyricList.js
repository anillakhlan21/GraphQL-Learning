import React, {Component} from 'react';
class LyricList extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <h4>Lyric List</h4>
          <ul className='collection'>
                { 
                this.props.lyricList.map(lyric=>{
                    return <li className="collection-item" key={lyric.id}>{lyric.content}</li>
                })
                }
            </ul>
            </div>
  
        )
    }


}

export default LyricList;