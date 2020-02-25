import React from 'react';
import './footer.css';
import WhibutContext from '../WhibutContext';

export default class Footer extends React.Component {

  handleLogout = () => {
    this.props.history.push('/');
  }

  handleHome = () => {
    this.props.history.push('/main')
  }

  static contextType = WhibutContext;
  render() {
    return ( 
    <WhibutContext.Consumer>
      {(context) => (
      <footer className='navbar'>
        <button className='footer-buttons' id='footer-left' onClick={this.handleHome}>Home</button>  
        <button className='footer-buttons'>Settings</button>
        <button className='footer-buttons' onClick={this.handleLogout}>Logout</button>
      </footer>
      )}
    </WhibutContext.Consumer>
    )
  }
}