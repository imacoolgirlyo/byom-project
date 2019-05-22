import React, {Component, Fragment} from 'react';
import cd from 'resource/image/cd.png'
import { FaPlay } from 'react-icons/fa';
import classNames from 'classnames';
import './Music.scss';

const MusicLogo = () => {
    return <img className="logo" src={cd} alt="cd"/>
  }

// 각각 Music마다 socket이 있는게 괜찮나? 아님 위에서 관리하는게 더 좋나?
class Music extends Component{
  constructor(props){
    super(props);
    this.state={
      isPlaying : false,
      isPlayed : this.props.isPlayed
    }
    this.handlePlayBtn = this.handlePlayBtn.bind(this);
  }

  handlePlayBtn(e){
    const {isPlaying, isPlayed} = this.state;
    const { id, socket} = this.props;
    if(this.state.isPlaying === false){
      socket.emit('SELECT_MUSIC', id, (data)=> { 
      console.log(`callback at MusicOne, ${data._id}`);
    })
    }
    // 재생 취소
    if(this.state.isPlaying === true){
      socket.emit('CANCEL_MUSIC', id);
    }
  }
  
  render(){
    const { artist, title, sender, user} = this.props;
    const musicClass = classNames({
      'music' : true,
      'isPlaying' : this.state.isPlaying,
      'isPlayed_USER' : this.state.isPlayed && user.nickname !=="DJ",
      'isPlayed_DJ' : this.state.isPlayed && user.nickname === "DJ"
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
    // 현재 재생할 곡 선택
    if(this.props.NowPlaying !== prevProps.NowPlaying ){
      if(this.props.NowPlaying === this.props.id){
        this.setState({isPlaying : true});
      }
      // 재생 된 후의 상태
      if(this.props.NowPlaying !== this.props.id && this.state.isPlaying){
        this.setState({isPlaying : false, isPlayed : true});
      }
      // 현재 재생할 곡 취소
      if(prevProps.NowPlaying === this.props.id && this.props.NowPlaying === ""){
        this.setState({isPlaying : false, isPlayed : false});
      }
    }
  }
}

export default Music;