import React from 'react'
import styled from 'styled-components'
import LoginHeaderLogo from '../LoginHeaderLogo';
// 구조
{/* <WindowBox>
  <WindowHeader/>
  <WindowContentWrapper>
    {content}
  </WindowContentWrapper>
</WindowBox> */}

export const WindowBox = styled.div`
  box-sizing: border-box;
  position: relative;
  margin: auto;
  top: 40px;
  width: 80%;
  height: 475px;
  background: #BDBEBD;
  border-left: 1px solid white;
  border-bottom: 1px solid black;
  border-top: 1px solid white;
  border-right: 1px solid black;
  box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.75);
`;

// window header 
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
      <LoginHeaderLogo/>
          <div>{props.name}</div>
      </WindowHeaderColumn>
      <WindowHeaderColumn>
          <div className="window-icon min"></div>
          <div className="window-icon max"></div>
          <div className="window-icon close"></div>
      </WindowHeaderColumn>
    </WindowHeaderContainer>
  )
}

export const WindowContentWrapper = styled.div`
  height: calc( 100% - 32px);
  margin-top: 2px;
  border: 2px solid #808080;
  border-bottom: 2px solid white;
  border-right: 2px solid white;
`;