import React, { Component } from 'react';
import styled from 'styled-components';
import { WindowBox, WindowHeader, WindowContentWrapper } from '../window/Window';
import { Input } from '../atoms/Input';
import { InputLabel} from '../atoms/InputLabel';
import { SubmitBtn } from '../atoms/SubmitBtn';

const Form = styled.form`
  position: relative;
  width: 240px;
  margin: auto;
`;

// musics 받고, input onChange, onSubmit 들 props로 input 값 처리
const PlaylistPresenter = ({musics, user, handleInputChange, handleSubmit}) => {
  return(
    <WindowBox>
      <WindowHeader name="Bring Your Own music.exe"/>
      <WindowContentWrapper>
        {/* musics, user, socket */}
        {musics.map(music => {
          return <div> music</div>
        })}
      <Form onSubmit={handleSubmit}>
        <InputLabel> Artist(B) : </InputLabel>
        <Input onChange={handleInputChange}></Input>
        <InputLabel> Titile(C) : </InputLabel>
        <Input onChange={handleInputChange}></Input>
        <SubmitBtn> Submit </SubmitBtn>
      </Form>
      </WindowContentWrapper>
    </WindowBox>

  )
}

export default PlaylistPresenter;