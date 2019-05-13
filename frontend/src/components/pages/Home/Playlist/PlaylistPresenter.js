import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import  Music from './Music';

const Musics = styled.div`
  overflow : scroll;
  height : 300px;
  border : 0;
  background-color : black;
  color : white;
`;

const PlaylistPresenter = ({musics, NowPlaying, handleClick, checkScrollPosition}) => {
  return(
    <Musics onScroll={checkScrollPosition}>
      {musics.map(music => {
        return <Music
        id={music.id}
        sender= {music.sender}
        artist = {music.artist}
        title={music.title}
        NowPlaying={NowPlaying} />
      })}
    </Musics>
  )
}

export default PlaylistPresenter;

