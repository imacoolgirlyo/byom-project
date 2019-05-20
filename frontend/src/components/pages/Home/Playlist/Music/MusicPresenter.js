import React from 'react';
import styled from 'styled-components';
import cd from 'resource/image/cd.png'
import { FaPlay } from 'react-icons/fa';

import './Logo.scss';

const Music = styled.div`
  display: flex;
  padding : 5px;
  margin : 3px;
`;
const MusicColumn = styled.div`
`;

const MusicLogo = () => {
    // Import result is the URL of your image
    return <img className="logo" src={cd} alt="cd"/>
  }

const MusicInfo = styled.div`
`;

const MusicSender = styled.div`
  font-size: 10px;
`;


const MusicPresenter = (
  {user, id, sender, artist, title, NowPlaying, isPlayed, isPlaying, handlePlayBtn}) => {
  return(
    <Music>
      <MusicColumn>
        <MusicLogo/>
      </MusicColumn>
      <MusicColumn>
        <MusicInfo>
          {artist} - {title}.mp3
        </MusicInfo>
        <MusicSender>
          by {sender}
        </MusicSender>
      </MusicColumn>
      {
        user.nickname === "DJ"?
        <div ><FaPlay/></div>
        :
        null
      }
    </Music>
  )
}

export default MusicPresenter;


