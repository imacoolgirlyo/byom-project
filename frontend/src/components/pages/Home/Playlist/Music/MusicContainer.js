import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import MusicPresenter from './MusicPresenter';

// music의 isPlaying, isPlayed
class MusicContainer extends Component{
  constructor(props){
    this.state={
      isPlayed : false,
      isPlaying : false
    }

  }
  render(){
    const { id, sender ,artist, title, NowPlaying } = this.props;
    const { isPlayed, isPlaying } = this.state;
    return(
      <MusicPresenter
        id={id}
        sender={sender}
        artist={artist}
        title={title}
        NowPlaying={NowPlaying}
        isPlayed={isPlayed}
        isPlaying= {isPlaying}
       />
    )
  }
}

export default MusicContainer;