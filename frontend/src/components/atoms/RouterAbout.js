import React from 'react';
import docu from '../../resource/image/docu.png'
import '../../resource/sass/detail/RouterAbout.scss';

function RouterAbout() {
    // Import result is the URL of your image
    return (
    <div className="routeBtn-about">
        <a href='/about'><img className="docu" src={docu} alt="logo"/></a>
        <div> About </div>
    </div>
    )
  }
  
export default RouterAbout;
