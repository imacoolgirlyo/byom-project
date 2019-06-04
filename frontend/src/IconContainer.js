import React, { Component, Fragment } from 'react';
import AboutIcon from 'Components/Icon/AboutIcon';
import ByomIcon from 'Components/Icon/ByomIcon';

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
      <Fragment>
        <AboutIcon handleIconClick={this.IconClick}/>
        <ByomIcon handleIconClick={this.IconClick}/>
      </Fragment>
    )
  }
}

export default IconContainer;