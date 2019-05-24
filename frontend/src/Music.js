import React, { Component, Fragment } from 'react';
import cd from 'resource/image/cd.png'
import { FaPlay } from 'react-icons/fa';
import classNames from 'classnames';
import './Music.scss';

const MusicLogo = () => {
    return <img className="logo" src={cd} alt="cd"/>
  }

class Music extends Component{
  constructor(props){
    super(props);
    this.state={
      isPlaying : false,
      isPlayed : this.props.isPlayed
    }
  }

render(){
  const { me, music, NowPlaying } =this.props;
  const musicClass = classNames({
  'music' : true,
  'isPlaying' : this.state.isPlaying,
  'isPlayed_USER' : this.state.isPlayed && me !=="DJ",
  'isPlayed_DJ' : this.state.isPlayed && me === "DJ"
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