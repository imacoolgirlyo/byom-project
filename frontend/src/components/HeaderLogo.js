import React from 'react';
import run from 'resource/image/run.png'
import 'resource/sass/detail/LoginHeaderLogo.scss';

function LoginHeaderLogo() {
    // Import result is the URL of your image
    return <img className="logo" src={run} alt="logo"/>
  }
  
export default LoginHeaderLogo;
