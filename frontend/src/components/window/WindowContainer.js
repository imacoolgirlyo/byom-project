import React, {Fragment} from 'react'
import styled from 'styled-components'

export const WindowOutContainer = styled('div')`
   box-sizing: border-box;
    position: relative;
    margin: auto;
    top: 40px;
    width: 80%;
    height: 435px;
    background: #BDBEBD;
    border-left: 1px solid white;
    border-bottom: 1px solid black;
    border-top: 1px solid white;
    border-right: 1px solid black;
    box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.75);
`;

export const WindowInnerContainer = styled('div')`
	height: 100%;
`;
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
