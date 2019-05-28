import React from 'react';
import 'resource/sass/Footer/FooterMenu.scss';

export const Icon = (props) => {
  // 모두 소문자. 중간에 공백 제외 
  let { name } = props;
  return(
    <div className="menu_content-column">
      <img className="icon" src={require(`resource/image/${name.toLowerCase()}.png`)} alt="logo"/>
    </div>
  )
}