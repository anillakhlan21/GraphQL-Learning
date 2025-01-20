import React, {Component} from 'react';

export default class CreateSong extends Component{
    constructor(props){
        super(props)
        this.state = { title: ''};
    }
    render(){
        return <div>
            <h3>Create New Song</h3>
            <form>
                <label>Title</label>
                <input 
                onChange={event => this.setState({title: event.target.value})}
                value = {this.state.title}
                />
            </form>
        </div>
    }
}

