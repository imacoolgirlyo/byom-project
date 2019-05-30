import React, { Component, Fragment } from 'react';
import Draggable from 'react-draggable';
import styled from 'styled-components'
import { WindowBox, WindowContentWrapper, WindowHeader } from 'Components/Window';

const AboutWrapper = styled.div`
  display : ${props => (props.windowStatus['About']==="open" ? "block": "none")};
`
class About extends Component {

  headerIconClick = (e) => {
    this.props.headerIconClick(e.target.name, "About");
  }

  render(){
    const {windowStatus} = this.props;
    return(
      <Draggable>
        <AboutWrapper windowStatus={windowStatus}>
          <WindowBox>
            <WindowHeader handleClick={this.headerIconClick}/>
            <WindowContentWrapper>
              hi~ we are BYOM.
            </WindowContentWrapper>
          </WindowBox>
        </AboutWrapper>
    </Draggable>
    )
  }
}


export default About