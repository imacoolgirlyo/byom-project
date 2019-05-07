import React, { Component } from 'react';
import axios from 'axios';
import PlaylistPresenter from './PlaylistPresenter';


// musics 데이터: state,  input change, submit handler 필요
export default class Container extends Component{
    constructor(props){
        super(props);
        this.state={
            musics: []
        }
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

    handleInputChange = () => {
        console.log('handleInput');
    
    }
    // socket으로 보내기
    handleSubmit = () => {
        console.log('handleSubmit');
    }

    render(){
        const { user, socket } = this.props;
        const { musics } = this.state;
        return(
            <PlaylistPresenter 
                musics={musics}
                user={user} // input을 보낼 때
                handleInputChange={this.handleInputChange}
                handleSubmit={this.handleSubmit}
                >
            </PlaylistPresenter>
            // <div className="chat-container">
            //     <PlayList 
            //     handleAddCheck = {this.handleAddCheck}
            //     handleRemoveCheck = {this.handleRemoveCheck}
            //     socket={socket} 
            //     user={user} 
            //     musics={musics} />
            //     <MusicInputForm socket={socket} user={user}/>
            // </div>
        )
    }
}

    // addMusictoPlayList(data) {
    //     this.setState(prevState => ({
    //         musics: [...prevState.musics, data]
    //     }))
    // }

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