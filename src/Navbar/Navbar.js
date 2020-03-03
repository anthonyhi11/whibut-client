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
      <nav className='navbar'>
        <img src='../../images/whibyt-mark1.png' className='navbar-home navbar-buttons'  alt='navbar home button' onClick={this.handleHome}></img>  
        <div className='navbar-container'>
          <img src='../../images/settings.png' className='navbar-buttons settings-button' onClick={this.handleSettings} />
          <p className='navbar-buttons logout-button' onClick={this.handleLogout}>Logout</p>
        </div>
      </nav>
      )}
    </WhibutContext.Consumer>
    )
  }
}