import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Playlist from '../Playlist';
import MusicInput from '../MusicInput';

class MainContent extends Component{
  constructor(props){
    super(props);
    this.state={
      musics: [],
      artist: '',
      title : '',
      scrollPosition : ''
    }
  }

  addMusictoPlayList = data => {
    console.log(data);
    this.setState(prevState => ({
        musics: [...prevState.musics, data]
    }))
    }

  listenSocketEvent = (socket) => {
    socket.on('new notification', this.addMusictoPlayList);
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
    this.listenSocketEvent(socket);
  }

  componentWillUnmount(){
      const { socket }= this.props;
      socket.removeAllListeners();
  }

  handleUserInputChange = (e) =>{
    let name = e.target.name;
    name === 'artist' ? 
    this.setState({artist : e.target.value})
    :
    this.setState({title : e.target.value})
  }

  onInputSubmit = (e) => {
    e.preventDefault();
    const { nickname, socket } = this.props;
    const { artist, title } = this.state;
    socket.emit('new music', {sender: nickname, artist, title, isPlayed : false});
    this.setState({
        artist: '',
        title: ''
    })
  }
 
  render(){
    const { socket, nickname } = this.props;
    const { musics, artist, title } = this.state;
    return(
    <Fragment>
      <Playlist
        me={nickname}
        socket={socket}
        musics={musics}
        onScrolled={e => console.log('the list was scrolled!')}
        onScrolledTop={e => alert('scrolled to top!')}
        />
        {
          nickname !== "DJ"?
          <MusicInput
          artist={artist}
          title={title}
          handleUserInputChange={this.handleUserInputChange}
          handleUserInputSubmit={this.onInputSubmit}/>
          :
          null
        }
      
    </Fragment>
    )
  }
}

export default MainContent;