import React, { Component } from 'react';

export default class MusicInputForm extends Component{
    constructor(props){
        super(props);
        this.state={
            artist: '',
            title : '',
            selected : false
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const { socket, user } = this.props;
        const { artist, title, selected } = this.state;
        console.log(`artist : ${this.state.artist}, title : ${this.state.title}`);
        // sender와 artist, title 모두 서버에 전송
        socket.emit('new music', {sender: user, artist, title, selected});
        this.setState({
            artist: '',
            title: ''
        })
        
    }
    // input focus에 벗어났을 때 validation 추가, 둘다 적어야함
    artistInputChange = (e) => {
        this.setState({
            artist : e.target.value
        })

    }
    titleInputChange = (e) => {
        this.setState({
            title : e.target.value
        })

    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                    type="text"
                    placeholder="Artist"
                    value={this.state.artist}
                    onChange={this.artistInputChange}/>
                    <input 
                    type="text"
                    placeholder="Title"
                    value={this.state.title}
                    onChange={this.titleInputChange}/>
                    <input
                    type="submit"
                    value="Submit"
                    />
                </form>
            </div>
        )
    }
}