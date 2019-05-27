import React, {Component, Fragment} from 'react';
import classNames from 'classnames';
import FooterProgramButton from './FooterProgramButton';
import FooterMenu from './FooterMenu';
import 'resource/sass/FooterBar.scss';


class FooterBar extends Component {
  constructor(props){
    super(props);
  }

onclickHandler = () => {
  const {onStartBtnClick} = this.props;
  onStartBtnClick();
}

render(){
  const { programs, onStartBtnClick, isStartBtnOn } = this.props;
  let programList = programs.map( program => {
    return <FooterProgramButton name={program}/>
  })
  const startBtnClass = classNames({
    'start_button' : true,
    'start_button_on' : this.props.isStartBtnOn 
  })
  return(
    <Fragment>
    {/* <FooterMenu/> */}
    <div className="footer_bar">
      <div onClick={this.onclickHandler} className={startBtnClass}>
      <b>Start</b>
      </div>
      {programList}
    </div>
    </Fragment>
  )
  }
}

export default FooterBar;