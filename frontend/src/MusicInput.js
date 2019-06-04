import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import SubmitBtn from 'Components/SubmitBtn';
import Input from 'Components/Input';
import InputLabel from 'Components/InputLabel';

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
const InputBlock = styled.div`
 display: flex;
 juestify-content: space-between;
 align-items: center;
`;

const MusicInput= ({artist, title, handleUserInputChange, handleUserInputSubmit}) => {
  return(
     <Form onSubmit={handleUserInputSubmit}>
        <InputBlock>
          <InputLabel> Artist(B) : </InputLabel>
            <Input 
            onChange={handleUserInputChange}
            value={artist}
            name="artist"
            ></Input>
        </InputBlock>
        <InputBlock>
          <InputLabel> Title(C) : </InputLabel>
          <Input 
          onChange={handleUserInputChange}
          value={title}
          name="title"
          ></Input>
        </InputBlock>
        <SubmitBtn> Submit </SubmitBtn>
      </Form>
  )
}
export default MusicInput;