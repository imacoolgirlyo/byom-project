import React from 'react';
import styled from 'styled-components';
import  Music from './MusicOne';
// import Music from './Music';

const Musics = styled.div`
  overflow-y : scroll;
  height : 300px;
  border : 0;
  background-color : black;
  color : white;
`;

const PlaylistPresenter = (
  {socket, user, musics, NowPlaying, handleClick, checkScrollPosition, handleNowPlaying}) => {
  return(
    <Musics onScroll={checkScrollPosition}>
      {musics.map(music => {
        return (
        <Music
        socket={socket}
        user={user}
        id={music._id}
        sender= {music.sender}
        artist = {music.artist}
        title={music.title}
        NowPlaying={NowPlaying}
        handleNowPlaying={handleNowPlaying}
         />
      )})}
    </Musics>
  )
}

export default PlaylistPresenter;

