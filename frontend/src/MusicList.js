import React, {Component, Fragment, PureComponent } from 'react';
import autoscroll from 'autoscroll-react';
import styled from 'styled-components';
import Music from './Music';

const MusicListPresenter = styled.div`
  overflow-y : scroll;
  height : ${props => props.me==="DJ"? `100%` : `300px`}
  border : 0;
  background-color : black;
  color : white;
`;

class MusicList extends Component{
  constructor(props){
    super(props);
    this.state={
      NowPlaying : ''
    }
  }

  shouldComponentUpdate(nextProps, nextState){
    return (this.props.musics !== nextProps.musics || this.state.NowPlaying !== nextState.NowPlaying );
  }


  handleNowPlaying = data =>{
    const { NowPlaying } = this.state;
    this.setState({
        NowPlaying : data._id
    })
  }

  cancelNowPlaying = data => {
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
    // this.scrollToBottom();
  } 
  // componentDidUpdate(){
  //   this.scrollToBottom();
  // }

  componentWillUnmount(){
      const { socket }= this.props;
      socket.removeAllListeners();
  }

  // scrollToBottom = () => {
  //   this.messagesEnd.scrollIntoView({ behavior : "smooth"});
  // }

  render(){
    const { me, musics, socket, ...props } = this.props;
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
      <MusicListPresenter {...props} me={me}>
        {playlist}
        {/* <div style={{float:"left", clear: "both" }}
          ref={(el) => {this.messagesEnd= el;}}> </div> */}
      </MusicListPresenter>
    )
  }
}

export default autoscroll(MusicList);

