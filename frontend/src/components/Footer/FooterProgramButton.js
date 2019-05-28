import React, {Component} from 'react';
import 'resource/sass/Footer/FooterBar.scss';

const FooterProgramButton = (props) => {
  return (
    <div className="program">
    {props.name}
    </div>
  )
}

export default FooterProgramButton;