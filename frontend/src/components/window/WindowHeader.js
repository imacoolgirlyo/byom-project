import React, {Fragment}from 'react'
import styled from 'styled-components'

export const WindowHeaderContainer = styled('div')`
  display: flex;
  flex-direction : row;
  justify-content: space-between;
  align-items: center;
  height: 27px;
  background: linear-gradient(to right, #000080, #1084d0);
  font-size: 15px;
  color: white;
  font-family: Helvetica;
`;

export const WindowHeaderColumn = styled('div')`
  display: flex;
  align-items: center;
`;
