import React, { Component, Fragment } from 'react';
import FooterMenu from './FooterMenu';
import FooterBar from './FooterBar';

class Footer extends Component{
  constructor(props){
    super(props);
    this.state = {
      isStartBtnOn : false
    }
  }

  startBtnClickHandler = () => {
    const { isStartBtnOn } = this.state;
    this.setState({isStartBtnOn : !this.state.isStartBtnOn});
  }
  render(){
    const {programs} = this.props;
    const {isStartBtnOn} = this.state;
    return(
      <Fragment>
        <FooterMenu
        isMenuShown = {isStartBtnOn}
        />
        <FooterBar 
        programs={programs}
        isStartBtnOn = {isStartBtnOn}
        onStartBtnClick = {this.startBtnClickHandler}
        />
      </Fragment>
    )
  }

}

export default Footer;