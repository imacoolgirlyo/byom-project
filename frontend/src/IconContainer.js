import React, { Component } from 'react';
import AboutIcon from 'Components/Icon/AboutIcon';
import ByomIcon from 'Components/Icon/ByomIcon';
import styled from 'styled-components'

const IconBox = styled.div`
 display: flex;
 padding: 20px;
`

class IconContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      isBYOM : true
    }
  }
  
  IconClick = (e) => {
    // e.target이 img일 때
    const windowName = e.target.name;
    this.props.makeWindowTopZ(windowName);
  }
  render(){
    return(
      <IconBox>
        <AboutIcon handleIconClick={this.IconClick}/>
        <ByomIcon handleIconClick={this.IconClick}/>
      </IconBox>
    )
  }
}

export default IconContainer;