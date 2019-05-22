import React, { Component } from 'react';
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
        this.handleNowPlaying = this.handleNowPlaying.bind(this);
        this.cancelNowPlaying = this.cancelNowPlaying.bind(this);
    }
    componentDidMount() {
        const { socket } = this.props;
        axios.get('http://localhost:3231/playlist')
        .then(res => {
            this.setState({musics : res.data});
            console.log(this.state.musics);
        })
        .catch(function(err){
            console.log(err);
        })
        socket.on('new notification', this.addMusictoPlayList);
        socket.on('music clicked', this.handleNowPlaying);
        socket.on('music canceld', this.cancelNowPlaying);
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
        const { artist, title, isPlayed } = this.state;
        socket.emit('new music', {sender: user.nickname, artist, title, isPlayed : false});
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
        let b = ele.scrollHeight - ele.clientHeight;
        console.log('postion is '+ b);

    }
    handleNowPlaying(data){
        // const {musics} = this.state;
        // this.setState({
        //     musics: musics.map(music => 
        //         music._id === data._id ?
        //         {...music, ...data}
        //         : music
        //     )
        // })
        const { NowPlaying } = this.state;
        this.setState({
            NowPlaying : data._id
        })
    }

    cancelNowPlaying(data){
        const { NowPlaying } = this.state;
        if(NowPlaying === data._id){
            this.setState({
                NowPlaying : ""
            })
        }
    }

    render(){
        const { user, socket } = this.props;
        const { musics, artist, title, NowPlaying } = this.state;
        return(
            <WindowContentWrapper>
            <PlaylistPresenter
                socket={socket}
                user={user}
                musics={musics}
                NowPlaying={NowPlaying}
                handleClick={this.handleClick}
                checkScrollPosition = {this.checkScrollPosition}
                handleNowPlaying={this.handleNowPlaying}
                >
            </PlaylistPresenter>
            {
            user.nickname !== "DJ" ?
                <MusicInputPresenter
                artist={artist}
                title={title}
                handleInputChange={this.handleInputChange}
                handleSubmit={this.handleSubmit}
                />
            :
            null
            }
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