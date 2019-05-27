import React, { Component, Fragment } from 'react';
import FooterMenu from './FooterMenu';
import FooterBar from './FooterBar';

class Footer extends Component{
  constructor(props){
    super(props);
  }
  render(){
    const {programs} = this.props;
    return(
      <Fragment>
        <FooterMenu />
        <FooterBar programs={programs}/>
      </Fragment>
    )
  }

}

export default Footer;