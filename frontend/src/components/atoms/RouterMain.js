import React from 'react';
import byom from '../../resource/image/byom.png'
import '../../resource/sass/detail/RouterMain.scss';

function RouterMain() {
    // Import result is the URL of your image
    return (
        <div className="routeBtn-main">
             <a href='/'><img className="byom" src={byom} alt="logo"/></a>
             <div> BYOM.exe </div>
        </div>
    )
  }
  
export default RouterMain;
