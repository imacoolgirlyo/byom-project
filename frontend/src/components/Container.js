import React, { Component } from 'react';
import PlayList from './PlayList';
import axios from 'axios';
import MusicInputForm from './MusicInputForm';
import '../resource/sass/Container.scss';

export default class Container extends Component{
    constructor(props){
        super(props);
        this.state={
            musics: []
        }
        this.addMusictoPlayList = this.addMusictoPlayList.bind(this);
        this.handleAddCheck = this.handleAddCheck.bind(this);
        this.toggleMusicCheck = this.toggleMusicCheck.bind(this);
        this.handleRemoveCheck = this.handleRemoveCheck.bind(this);
    }

    componentDidMount() {
        const { socket } = this.props;
        axios.get('http://localhost:3231/playlist')
        .then(res => {
            this.setState({musics : res.data});
        })
        .catch(function(err){
            console.log(err);
        })
        socket.on('new notification', this.addMusictoPlayList);
        socket.on('music is selected', this.toggleMusicCheck);
        socket.on('check is removed', this.toggleMusicCheck);
    }

    componentWillUnmount(){
        const { socket }= this.props;
        socket.removeAllListeners();
    }

    addMusictoPlayList(data) {
        this.setState(prevState => ({
            musics: [...prevState.musics, data]
        }))
    }

    handleAddCheck (_id) {
        const { socket } = this.props;
        // callback으로 update된 music setState 해야함 
        socket.emit('selected by DJ', _id);
    }

    toggleMusicCheck(data){
        const { musics } = this.state;
        this.setState({
            musics : musics.map(music=> 
                music._id === data._id ?
                {...music, ...data}
                : music
            )
        })
    }

    handleRemoveCheck(_id){
        const { socket } = this.props;
        socket.emit('remove check', _id);
    }

    render(){
        const { user, socket } = this.props;
        const { musics } = this.state;
        return(
            <div className="chat-container">
                <PlayList 
                handleAddCheck = {this.handleAddCheck}
                handleRemoveCheck = {this.handleRemoveCheck}
                socket={socket} 
                user={user} 
                musics={musics} />
                <MusicInputForm socket={socket} user={user}/>
            </div>
        )
    }
}