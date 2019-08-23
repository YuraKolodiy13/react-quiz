import React, {Component} from 'react'
import classes from './Drawer.scss'
import BackDrop from '../../UI/BackDrop/BackDrop'
import {NavLink} from  'react-router-dom'

class Drawer extends Component {

  renderLinks(links){
   return  links.map((item, index) => {
     return (
         <li key={index}>
           <NavLink to={item.to} exact={item.exact} activeClassName={classes.active} onClick={this.props.onClose}>{item.label}</NavLink>
         </li>
     )
   });
  }
  render(){

    const cls = [classes.Drawer];

    if(!this.props.isOpen){
      cls.push(classes.close);
    }

    const links = [
      {to: '/', label: 'List', exact: true},
    ];

    if(this.props.isAuthenticated){
      links.push({to: '/quiz-creator', label: 'Create test', exact: false});
      links.push({to: '/logout', label: 'Logout', exact: false})
    }else {
      links.push({to: '/auth', label: 'Auth', exact: false})
    }

    return (
      <>
        <nav className={cls.join(' ')}>
          <ul>
            {this.renderLinks(links)}
          </ul>
        </nav>
        {this.props.isOpen ? <BackDrop onClick={this.props.onClose}/> : null}
      </>
    )
  }
}
export default Drawer