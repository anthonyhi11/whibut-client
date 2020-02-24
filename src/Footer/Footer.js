import React from 'react';
import { NavLink } from 'react-router-dom';
import './footer.css';

export default class Footer extends React.Component {
  render() {
    return (  
    <footer className='navbar'>
      <button className='footer-buttons' id='footer-left'>Home</button>  
      <button className='footer-buttons'>Settings</button>
      <button className='footer-buttons'>Logout</button>
    </footer>
    )
  }
}