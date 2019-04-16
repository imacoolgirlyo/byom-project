import React, { Component } from 'react';
import PlayList from './PlayList';
import axios from 'axios';
import MusicInputForm from './MusicInputForm';

export default class Container extends Component{
    constructor(props){
        super(props);

        this.state={
            musics: []
        }
    }

    componentDidMount() {
        const { socket } = this.props;
        // 기존에 가지고 있던 musics 들 가져와서 setState
        // 서버에서 보내는 새로운 music들 socket.on으로 기다리고, callback 함수 만들기
        axios.get('http://localhost:3231/playlist')
        .then(res => {
            console.log(res.data);
            this.setState({musics : res.data});
        })
        .catch(function(err){
            console.log(err);
        })
        socket.on('new notification', this.addMusictoPlayList);
    }

    componentWillUnmount(){
        const { socket }= this.props;
        socket.removeAllListeners();
    }

    addMusictoPlayList = (data) => {
        const { musics } = this.state;
        console.log(musics);
        this.setState(prevState => ({
            musics: [...prevState.musics, data]
        }))
    }
    
    render(){
        const { user, socket } = this.props;
        const { musics } = this.state;
        return(
            <div>
                <PlayList socket={socket} user={user} musics={musics} />
                <MusicInputForm socket={socket} user={user}/>
            </div>
        )
    }
}