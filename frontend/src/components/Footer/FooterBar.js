import React, {Component, Fragment} from 'react';
import classNames from 'classnames';
import FooterProgramButton from './FooterProgramButton';
import FooterMenu from './FooterMenu';
import 'resource/sass/FooterBar.scss';


class FooterBar extends Component {
  constructor(props){
    super(props);
    this.state={
      isstartBtnOn : false
    }
  }
  startBtnClickHandler = () => {
    const { isstartBtnOn } = this.state;
    this.setState({isstartBtnOn: !this.state.isstartBtnOn});
  }

render(){
  const { programs } = this.props;
  const { isstartBtnOn } = this.state;
  let programList = programs.map( program => {
    return <FooterProgramButton name={program}/>
  })
  const startBtnClass = classNames({
    'start_button' : true,
    'start_button_on' : this.state.isstartBtnOn 
  })
  return(
    <Fragment>
    {/* <FooterMenu/> */}
    <div className="footer_bar">
      <div onClick={this.startBtnClickHandler} className={startBtnClass}>
      <b>Start</b>
      </div>
      {programList}
    </div>
    </Fragment>
  )
  }
}

export default FooterBar;