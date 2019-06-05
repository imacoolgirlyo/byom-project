import React from 'react';
import min from 'resource/image/min.png';
import max from 'resource/image/max.png';
import close from 'resource/image/close.png';
import styled from 'styled-components'

export const WindowIcon = styled('div')`
  background-color: #BDBEBD;
  width: 18px;
  height: 18px;
  border-top: 1px solid white;
  border-left: 1px solid white;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  text-align: center;
  margin-right: 8px; 
`;

export const Img = styled.img`
  width: 16px;
  margin-top: 1px;
`


export const Min = () => {
  return (
    <WindowIcon>
      <Img name="min"  src={min} alert="min" />
    </WindowIcon>
  )
}

export const Max = () => {
  return (
    <WindowIcon>
      <Img name="max" src={max} alert="max" />
    </WindowIcon>
  )
}

export const Close = () => {
  return (
    <WindowIcon>
      <Img name="close"  src={close} alert="close" />
    </WindowIcon>
  )
}