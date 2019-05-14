import React, {Component, Fragment} from 'react';
import cd from 'resource/image/cd.png'
import { FaPlay } from 'react-icons/fa';
import classNames from 'classnames';
import './Music.scss';

const MusicLogo = () => {
    // Import result is the URL of your image
    return <img className="logo" src={cd} alt="cd"/>
  }

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
    const {isPlaying} = this.state;
    const {handleNowPlaying, id} = this.props;
    console.log(isPlaying);
    if(isPlaying === false){
      this.setState(
        {isPlaying : true,
         playingID : id
        });
      handleNowPlaying(id);
    }
  }

  render(){
    const { id, artist, title, sender, user, NowPlaying} = this.props;
    const playBtnClass = classNames({
      playBtn : true,
      'isPlaying' : this.state.isPlaying,
      'isPlayed' : this.state.isPlayed
    })

    return(
        <div>
          <div className="music-column">
            <MusicLogo/>
          </div>
          <div className="music-column">
            <div className="music-info"> {artist} - {title}.mp3</div>
            <div className="music-sender"> by {sender}</div>
          </div>
          {
            user.nickname === "DJ"?
            <FaPlay className={playBtnClass} onClick={this.handlePlayBtn}/>
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