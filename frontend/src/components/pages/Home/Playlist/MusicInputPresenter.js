import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { SubmitBtn, SeperateLine, Input, InputLabel } from 'components/commons';

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

const MusicInputPresenter = ({artist, title, handleInputChange, handleSubmit}) => {
  return(
     <Form onSubmit={handleSubmit}>
        <InputBlock>
          <InputLabel> Artist(B) : </InputLabel>
            <Input 
            onChange={handleInputChange}
            value={artist}
            name="artist"
            ></Input>
        </InputBlock>
        <InputBlock>
          <InputLabel> Title(C) : </InputLabel>
          <Input 
          onChange={handleInputChange}
          value={title}
          name="title"
          ></Input>
        </InputBlock>
        <SubmitBtn> Submit </SubmitBtn>
      </Form>
  )
}

export default MusicInputPresenter;


