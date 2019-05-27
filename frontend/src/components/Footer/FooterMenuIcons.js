import React from 'react';
import 'resource/sass/Footer/FooterMenu.scss';
// import programs from 'resource/image/programs.png'
// import shutdown from 'resource/image/shutdown.png';
// import logoff from 'resource/image/logoff.png';
// import run from 'resource/image/run.png';
// import help from 'resource/image/help.png';
// import find from 'resource/image/find.png';
// import settings from 'resource/image/settings.png';
// import folder from 'resource/image/folder.png';
// import archive from 'resource/image/archive.png';

export const Icon = (props) => {
  // 모두 소문자. 중간에 공백 제외 
  let { name } = props;
  console.log(name.toLowerCase());
  return(
    <div className="menu_content-column">
      <img className="icon" src={require(`resource/image/${name.toLowerCase()}.png`)} alt="logo"/>
    </div>
  )
}