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
  // 굳이 AboutIcon, ByomIcon 이라는 컴포넌트를 따로 만들어야하나? props를 한번 더 보내야해서 귀찮네
  // ex) AboutIcon에 onclick을 붙어도 되나? 굳이 div에 다이렉트로 안붙야도 되겠지?

  handleIconClick = (e) => {
    // e.target이 img일 때
    const programName = e.target.name;
    this.props.windowProgramIconClick(programName);
  }
  render(){
    return(
      <Fragment>
        <AboutIcon handleIconClick={this.handleIconClick}/>
        <ByomIcon handleIconClick={this.handleIconClick}/>
      </Fragment>
    )
  }
}

export default IconContainer;