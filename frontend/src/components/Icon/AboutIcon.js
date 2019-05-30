import React from 'react';
import docu from 'resource/image/docu.png'
import 'resource/sass/RouterAbout.scss';

function AboutIcon({handleIconClick}) {
    // Import result is the URL of your image
    return (
    <div onClick={handleIconClick} className="routeBtn-about">
        <img name="About" className="docu" src={docu} alt="logo"/>
        <div> About </div>
    </div>
    )
  }
  
export default AboutIcon;