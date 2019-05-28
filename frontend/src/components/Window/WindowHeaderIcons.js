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
  margin-right: 2px; 
`;


export const Min = () => {
  return (
    <WindowIcon>
      <img  src={min} alert="min" />
    </WindowIcon>
  )
}

export const Max = () => {
  return (
    <WindowIcon>
      <img src={max} alert="max" />
    </WindowIcon>
  )
}

export const Close = () => {
  return (
    <WindowIcon>
      <img  src={close} alert="close" />
    </WindowIcon>
  )
}