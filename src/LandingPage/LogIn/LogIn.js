import React from 'react';
import WhibutContext from '../../WhibutContext';

export default class LogIn extends React.Component {

  handleLogIn = (e) => {
    e.preventDefault()
    console.log('log in clicked')
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
        <form onSubmit={e => this.handleLogIn(e)} id='form'>
          <h2>Log in!</h2>
          <label htmlFor='name'>Username</label>
          <input type='text' id="name" name='name' placeholder='Username' />
          <label htmlFor='password'>Password</label>
          <input type="password" id="password" name='password' placeholder='Password' />
          <button type='submit'>Log in</button>
        </form>
      </div>
    )
  }
}