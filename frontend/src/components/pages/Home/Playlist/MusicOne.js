import React, {Component, Fragment} from 'react';
import cd from 'resource/image/cd.png'
import { FaPlay } from 'react-icons/fa';
import classNames from 'classnames';
import './Music.scss';

const MusicLogo = () => {
    // Import result is the URL of your image
    return <img className="logo" src={cd} alt="cd"/>
  }

// 각각 Music마다 socket이 있는게 괜찮나? 아님 위에서 관리하는게 더 좋나?
class Music extends Component{
  constructor(props){
    super(props);
    this.state={
      isPlayed : false,
      isPlaying : false,
      playingID : ''
    }
    this.handlePlayBtn = this.handlePlayBtn.bind(this);
  }

  handlePlayBtn(e){
    const {isPlaying, isPlayed} = this.state;
    const {handleNowPlaying, id, socket} = this.props;

    socket.emit('SELECT_MUSIC', id, (data)=> {
      console.log(data._id);
      if(id=== data._id && isPlayed === false){
        this.setState({isPlaying : true});
      }
    })
  }
  
  render(){
    const { id, artist, title, sender, user, isPlaying, NowPlaying} = this.props;
    const musicClass = classNames({
      playBtn : true,
      'isPlaying' : isPlaying,
      'isPlayed' : this.state.isPlayed
    })

    return(
        <div className={musicClass}>
          <div className="music-column">
            <MusicLogo/>
          </div>
          <div className="music-column">
            <div className="music-info"> {artist} - {title}.mp3</div>
            <div className="music-sender"> by {sender}</div>
          </div>
          {
            user.nickname === "DJ"?
            <FaPlay onClick={this.handlePlayBtn}/>
            :
            null
          }
        </div>
    )
  }
  
  componentDidUpdate(prevProps){
    if(this.props.id === prevProps.NowPlaying && this.state.isPlaying === true){
      this.setState({isPlaying : false, isPlayed : true});
    }
  }
}

export default Music;