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
      isPlaying : false
    }
    this.handlePlayBtn = this.handlePlayBtn.bind(this);
  }

  handlePlayBtn(e){
    const {isPlaying, isPlayed} = this.state;
    const {handleNowPlaying, id, socket} = this.props;
    socket.emit('SELECT_MUSIC', id, (data)=> {
      console.log(`callback at MusicOne, ${data._id}`);
    })
  }
  
  render(){
    const { id, artist, title, sender, user, NowPlaying} = this.props;
    const musicClass = classNames({
      'isPlaying' : this.state.isPlaying,
      'isPlayed' : !this.state.isPlaying
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
  
  // props로 받은 NowPlaying이 바꼈을 때, 렌더링 다시 적용
  componentDidUpdate(prevProps){ 
    // this.props.NowPlaying이랑 내 id랑 같으면 this.state.isPlaying : true
    if(this.props.NowPlaying !== prevProps.NowPlaying ){
      if(this.props.NowPlaying === this.props.id){
        this.setState({isPlaying : true})
      }
      if(this.props.NowPlaying !== this.props.id){
        this.setState({isPlaying : false})
      }
    }
  }
}

export default Music;