import React, { Component } from 'react';
import styled from 'styled-components';
import { WindowBox, WindowHeader, WindowContentWrapper } from '../window/Window';
import { Input } from '../atoms/Input';
import { InputLabel} from '../atoms/InputLabel';
import { SubmitBtn } from '../atoms/SubmitBtn';
import { MusicPresenter } from './Music/MusicPresenter';

const Form = styled.form`
  padding-top : 10px;
  padding-bottom : 20px;
  position: relative;
  width: 240px;
  margin: auto;
  display: flex;
  flex-direction : column;
  align-items : center;
  border-top: 1px solid white;
`;

const Musics = styled.div`
  overflow : scroll;
  height : 300px;
  border : 0;
  background-color : black;
  color : white;
`;

const InputBlock = styled.div`
 display: flex;
 juestify-content: space-between;
 align-items: center;
`;
// musics 받고, input onChange, onSubmit 들 props로 input 값 처리
const PlaylistPresenter = ({musics, user, handleInputChange, handleSubmit}) => {
  return(
    <WindowBox>
      <WindowHeader name="Bring Your Own music.exe"/>
      <WindowContentWrapper>
        <Musics>
        {musics.map(music => {
          console.log(music);
          return <MusicPresenter 
          id={music.id}
          artist = {music.artist}
          sender= {music.sender}
          title={music.title}
          selected={music.selected} />
        })}
        </Musics>
      <Form onSubmit={handleSubmit}>
        <InputBlock>
          <InputLabel> Artist(B) : </InputLabel>
          <Input onChange={handleInputChange}></Input>
        </InputBlock>
        <InputBlock>
          <InputLabel> Title(C) : </InputLabel>
          <Input onChange={handleInputChange}></Input>
        </InputBlock>
        <SubmitBtn> Submit </SubmitBtn>
      </Form>
      </WindowContentWrapper>
    </WindowBox>

  )
}

export default PlaylistPresenter;