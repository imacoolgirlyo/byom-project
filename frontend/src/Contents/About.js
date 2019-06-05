import React, { Component } from 'react';
import Draggable from 'react-draggable';
import styled from 'styled-components'
import { WindowBox, WindowContentWrapper, WindowHeader } from 'Components/Window';

const AboutWrapper = styled.div`
  display : ${props => (props.About ==="open" ? "block": "none")}
  zindex: ${props => (props.topZ === "About" ? "1" : "0")}
  
`
class About extends Component {

  headerBoxClick = (e) => {
    this.props.headerIconClick("About", e.target.name);
  }

  render(){
    const { About, topZ } = this.props;
    return(
      <Draggable>
        <AboutWrapper About={About} topZ={topZ}>
          <WindowBox>
            <WindowHeader name="About.exe" handleClick={this.headerBoxClick}/>
            <WindowContentWrapper>
              hi~ we are BYOM.
            </WindowContentWrapper>
          </WindowBox>
        </AboutWrapper>
    </Draggable>
    )
  }
}


export default About;