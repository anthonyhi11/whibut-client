import React from 'react';
import './signUp.css';
import WhibutContext from '../../WhibutContext';

export default class SignUp extends React.Component {

  handleAddUser = (e) => {
    e.preventDefault()
    console.log('Sign Up was clicked')
    this.context.handleCancel();
    // const userName = e.target.name.value;
    // const password = e.target.password.value;
    // const passwordConfirm = e.target.passwordConfirm.value;
    //fetch request to SIGN UP should LOG IN 
  }

  static contextType = WhibutContext;
  render() {
    return (
      <div className='modal'>
        <form onSubmit={e => this.handleAddUser(e)} id='form'>
          <h2>Sign Up!</h2>
          <label htmlFor='name'>Username</label>
          <input type='text' id="name" name='name' placeholder='Choose Username' />
          <label htmlFor='password'>Password</label>
          <input type="password" id="password" name='password' placeholder='New Password' />
          <label htmlFor='password-confirm'>Confirm Password</label>
          <input type="password" id="passwordConfirm" name='passwordConfirm' placeholder='Confirm Password' />
          <button type='submit'>Sign Up</button> <button type='reset' onClick={this.context.handleCancel}>Cancel</button>
        </form>
      </div>
    )
  }
}