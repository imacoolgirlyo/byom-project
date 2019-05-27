import React, {Component, Fragment} from 'react';
import classNames from 'classnames';
import { Icon } from './FooterMenuIcons';
import 'resource/sass/Footer/FooterMenu.scss';

const MenuDropdown = ({items}) => {
  let list = items.map( item => {
    return <div> {item.name}</div>
  } )
  return(
    <ul className="dropdown-content">
      {list}
    </ul>
  )
}

class FooterMenuContent extends Component{
  constructor(props){
    super(props);
    this.state={
      archive: []
    }
  }


  makeMenuList = () => {
    console.log('hiu');
    const { menuList } = this.props;
    let reverse = menuList.map( (val, index) => menuList[menuList.length-1-index]);

    let menu = reverse.map( content => {
      let menuClass = classNames({
      'menu_content' : true,
      'menu_hasDropdown' : content.dropdown
      })
      return (
        <div className={menuClass}>
         <Icon name={content.name} />
         <div className="menu_content-column">{content.name}</div>
          {
          content.dropdown ?
          <Fragment>
            <div className="menu_content-column">►</div>
            <MenuDropdown items={content.dropdown}/> 
            {/* db에서 archive 내용 가져와야함 */}
          </Fragment>
          :
          null
          }
      </div>
      )
    })
    return menu;
  }

  render(){
    console.log('kkk');
    const {menuList} = this.props;
    return(
      <div>
        {this.makeMenuList()}
      </div>
    )
  }
}

// const FooterMenuContent = (props) => {

//   let reverse = props.menuList.map( (val, index) => props.menuList[props.menuList.length-1-index]);

//   let menuContent = reverse.map( menu => {
//       let menuClass = classNames({
//       'menu_content' : true,
//       'menu_hasDropdown' : menu.dropdown
//       })

//     return (
//       <div className={menuClass}>
//         <Icon name={menu.name} />
//         <div className="menu_content-column">{menu.name}</div>
//          {
//           menu.dropdown ?
//           <Fragment>
//             <div className="menu_content-column">►</div>
//             <MenuDropdown items={menu.dropdown}/> 
//             {/* db에서 archive 내용 가져와야함 */}
//           </Fragment>
//           :
//           null
//           }
//       </div>
//     )
//   })

//   return (
//     <Fragment>
//     {menuContent}
//     </Fragment>
//   )}

export default FooterMenuContent;