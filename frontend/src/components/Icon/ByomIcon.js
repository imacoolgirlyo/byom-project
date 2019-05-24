import React from 'react';
import byom from 'resource/image/byom.png'
import 'resource/sass/RouterMain.scss';

function ByomIcon({handleIconClick}) {
    // Import result is the URL of your image
    return (
        <div onClick={handleIconClick} className="routeBtn-main">
            <img name="byom"  className="byom" src={byom} alt="logo"/>
             <div> BYOM.exe </div>
        </div>
    )
  }
  
export default ByomIcon;
