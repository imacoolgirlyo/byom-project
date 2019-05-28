import React from 'react'
import styled from 'styled-components'
import { Min, Max, Close } from './WindowHeaderIcons';

const WindowHeaderContainer = styled.div`
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

const WindowHeaderColumn = styled('div')`
  display: flex;
  align-items: center;
`;

export const WindowHeader = (props) => {
  return (
    <WindowHeaderContainer>
      <WindowHeaderColumn>
      {/* <LoginHeaderLogo/> */}
          {/* <div>{props.name}</div> */}
      </WindowHeaderColumn>
      <WindowHeaderColumn>
          <Min/>
          <Max/>
          <Close/>
      </WindowHeaderColumn>
    </WindowHeaderContainer>
  )
}

