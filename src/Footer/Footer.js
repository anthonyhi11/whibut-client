import React from 'react';
import './footer.css';
import WhibutContext from '../WhibutContext';

export default class Footer extends React.Component {

  handleLogout = () => {
    console.log('logoutpushed')
    this.props.history.push('/');
  }

  static contextType = WhibutContext;
  render() {
    return ( 
    <WhibutContext.Consumer>
      {(context) => (
      <footer className='navbar'>
        <button className='footer-buttons' id='footer-left'>Home</button>  
        <button className='footer-buttons'>Settings</button>
        <button className='footer-buttons' onClick={this.handleLogout}>Logout</button>
      </footer>
      )}
    </WhibutContext.Consumer>
    )
  }
}