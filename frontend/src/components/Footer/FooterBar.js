import React, {Component, Fragment} from 'react';
import classNames from 'classnames';
import FooterProgramButton from './FooterProgramButton';
import FooterMenu from './FooterMenu';
import window from 'resource/image/window.png';
import 'resource/sass/Footer/FooterBar.scss';

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
         <div ><img className="startLogo" src={window} alt="logo"/> </div>
         <div><b>Start</b></div>
        </div>
        {programList}
      </div>
      </Fragment>
    )
    }
}

export default FooterBar;