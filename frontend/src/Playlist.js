import React, {Component, Fragment } from 'react';
import styled from 'styled-components';
import Music from './Music';

const PlaylistPresenter = styled.div`
  overflow-y : scroll;
  height : ${props => props.me==="DJ"? `100%` : `300px`}
  border : 0;
  background-color : black;
  color : white;
`;

class Playlist extends Component{
  constructor(props){
    super(props);
    this.state={
      NowPlaying : ''
    }
  }

  handleNowPlaying(data){
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

  listenSocketEvent = (socket) => {
    socket.on('music clicked', this.handleNowPlaying);
    socket.on('music canceld', this.cancelNowPlaying);
  }

  componentDidMount(){
    const {socket} = this.props;
    this.listenSocketEvent(socket);
  } 

  componentWillUnmount(){
      const { socket }= this.props;
      socket.removeAllListeners();
  }

  render(){
    const { me, musics, socket } = this.props;
    const { NowPlaying  } = this.state;
    let playlist = musics.map( music => {
      return <Music
      me={me}
      music={music}
      socket={socket}
      NowPlaying={NowPlaying}
      />
    })
    return(
      <PlaylistPresenter me={me}>
        {playlist}
      </PlaylistPresenter>
    )
  }
}

export default Playlist;

