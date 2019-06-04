import React, {Component} from 'react';
import 'resource/sass/Footer/FooterBar.scss';

class FooterProgramButton extends Component{
  render(){
  const { name, footerPgmButtonHandler } = this.props;
  return (
    <div className="program" onClick={() => footerPgmButtonHandler(name)}>
      {name}.exe
    </div>
  )
}
}

export default FooterProgramButton;