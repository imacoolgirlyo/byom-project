import React, { Component } from 'react';
import MusicPresenter from './MusicPresenter';

// music의 isPlaying, isPlayed
class MusicContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      isPlayed : false,
      isPlaying : false
    }
    this.handlePlayBtn = this.handlePlayBtn.bind(this);
  }

  handlePlayBtn(e){
    console.log('playbtn is clicked');
    console.log(e.target);
  }

  render(){
    const { user, id, sender ,artist, title, NowPlaying } = this.props;
    const { isPlayed, isPlaying } = this.state;
    return(
      <MusicPresenter onClick={this.handlePlayBtn}
          user={user}
          key={id}
          id={id}
          sender={sender}
          artist={artist}
          title={title}
          NowPlaying={NowPlaying}
          isPlayed={isPlayed}
          isPlaying= {isPlaying}
          handlePlayBtn={this.handlePlayBtn}
        />
    )
  }
}

export default MusicContainer;