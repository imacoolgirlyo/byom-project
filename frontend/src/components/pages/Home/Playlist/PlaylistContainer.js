import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { WindowContentWrapper } from 'components/App/components/window/Window';
import PlaylistPresenter from './PlaylistPresenter';
import MusicInputPresenter from './MusicInputPresenter';

// musics 데이터: state,  input change, submit handler 필요
export default class PlaylistContainer extends Component{
    constructor(props){
        super(props);
        this.state={
            musics: [],
            artist: '',
            title : '',
            NowPlaying: '',
            scrollPosition : 0
        }
        this.addMusictoPlayList = this.addMusictoPlayList.bind(this);
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
    }

    componentWillUnmount(){
        const { socket }= this.props;
        socket.removeAllListeners();
    }

    handleInputChange = (e) => {
        let name = e.target.name;
        name === 'artist' ? 
        this.setState({artist : e.target.value})
        :
        this.setState({title : e.target.value})
    }
    // socket으로 보내기
    handleSubmit = (e) => {
        e.preventDefault();
        const { user, socket } = this.props;
        const { artist, title, isPlayed, isPlaying } = this.state;
        socket.emit('new music', {sender: user, artist, title, isPlayed, isPlaying});
        this.setState({
            artist: '',
            title: ''
        })
    }

    addMusictoPlayList = data => {
        // data.sender와 닉네임이 동일할 때 (본인) 스크롤 가장 아래로
        // 동일하지 않으면(타인이 올림) 새로운 음악 버튼 
        console.log(data);
    this.setState(prevState => ({
        musics: [...prevState.musics, data]
    }))
    }

    checkScrollPosition = (e) => {
        let ele = e.target;
        // console.log(ele.scrollTop);
        // console.log(ele.scrollHeight)
        let b = ele.scrollHeight - ele.clientHeight;
        console.log('postion is '+ b);

    }
    // handleClick 

    render(){
        const { musics, artist, title, NowPlaying } = this.state;
        return(
            <WindowContentWrapper>
            <PlaylistPresenter 
                musics={musics}
                NowPlaying={NowPlaying}
                handleClick={this.handleClick}
                checkScrollPosition = {this.checkScrollPosition}
                >
            </PlaylistPresenter>
            <MusicInputPresenter
                artist={artist}
                title={title}
                handleInputChange={this.handleInputChange}
                handleSubmit={this.handleSubmit}
             />
            </WindowContentWrapper>
        )
    }
}

    // handleAddCheck (_id) {
    //     const { socket } = this.props;
    //     // callback으로 update된 music setState 해야함 
    //     socket.emit('selected by DJ', _id);
    // }

    // toggleMusicCheck(data){
    //     const { musics } = this.state;
    //     this.setState({
    //         musics : musics.map(music=> 
    //             music._id === data._id ?
    //             {...music, ...data}
    //             : music
    //         )
    //     })
    // }

    // handleRemoveCheck(_id){
    //     const { socket } = this.props;
    //     socket.emit('remove check', _id);
    // }