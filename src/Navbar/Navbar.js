import React from 'react';
import './Navbar.css';
import WhibutContext from '../WhibutContext';
import TokenService from '../services/token-service'

export default class Navbar extends React.Component {

  handleLogout = () => {
    TokenService.clearAuthToken();
    this.props.history.push('/');
  }

  handleHome = () => {
    this.props.history.push('/main')
  }

  handleSettings = () => {
    this.props.history.push('/settings')
  }

  static contextType = WhibutContext;
  render() {
    return ( 
    <WhibutContext.Consumer>
      {(context) => (
      <Navbar className='navbar'>
        <button className='Navbar-buttons' id='Navbar-left' onClick={this.handleHome}>Home</button>  
        <button className='Navbar-buttons' onClick={this.handleSettings}>Settings</button>
        <button className='Navbar-buttons' onClick={this.handleLogout}>Logout</button>
      </Navbar>
      )}
    </WhibutContext.Consumer>
    )
  }
}