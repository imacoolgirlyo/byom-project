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

const HeaderName = styled.div`
 margin-left: 10px;
`

export const WindowHeader = ({name, handleClick}) => {
  return (
    <WindowHeaderContainer onClick={handleClick}>
      <WindowHeaderColumn>
      {/* <LoginHeaderLogo/> */}
          <HeaderName>{name}</HeaderName>
      </WindowHeaderColumn>
      <WindowHeaderColumn>
          <Min/>
          {/* <Max/> */}
          <Close/>
      </WindowHeaderColumn>
    </WindowHeaderContainer>
  )
}

