import React, { Component } from 'react';
import cd from 'resource/image/cd.png'
import MusicInfoButton from './MusicInfoButton';
import classNames from 'classnames';
import 'resource/sass/Music.scss';

const MusicLogo = () => {
    return <img className="logo" src={cd} alt="cd"/>
  }

class Music extends Component{
  constructor(props){
    super(props);
    this.state={
      isPlaying : false,
      isPlayed : this.props.music.isPlayed
    }
  }

  handlePlayBtn = e => {
    const { isPlaying } = this.state;
    const { music, socket } = this.props;
    if(!isPlaying){
      socket.emit('SELECT_MUSIC', music._id)
    }else{
      socket.emit('CANCEL_MUSIC', music._id);
  }
  }

render(){
  console.log(this.props.music);
  const { me, music } =this.props;
  const musicClass = classNames({
  'music' : true,
  'isPlaying' : this.state.isPlaying
})

  return(
  <div className={musicClass}>
    <div className="music-column">
      <MusicLogo/>
    </div>
    <div className="music-column">
      <div className="music-info"> {music.artist} - {music.title}.mp3</div>
      <div className="music-sender"> by {music.sender}</div>
    </div>
    {
      me === "DJ"?
      // <FaPlay onClick={this.handlePlayBtn}/>
      <MusicInfoButton 
        isPlayed= {this.state.isPlayed}
        isPlaying = {this.state.isPlaying}
        onPlayButtonClick = {this.handlePlayBtn}
        />
      :
      null
    }
  </div>
  )

}
    // props로 받은 NowPlaying이 바꼈을 때, 렌더링 다시 적용
  componentDidUpdate(prevProps){ 
    const {NowPlaying, music} = this.props;
    // 현재 재생할 곡 선택
    if(NowPlaying !== prevProps.NowPlaying ){
      if(NowPlaying === music._id){
        this.setState({isPlaying : true});
      }
      // 재생 된 후의 상태
      if(NowPlaying !== music._id && this.state.isPlaying){
        this.setState({isPlaying : false, isPlayed : true});
      }
      // 현재 재생할 곡 취소
      if(prevProps.NowPlaying === music._id && NowPlaying === ""){
        this.setState({isPlaying : false, isPlayed : false});
      }
    }
  }

}

export default Music;