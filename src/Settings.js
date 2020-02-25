import React from 'react';
import Footer from './Footer/Footer'

export default class Settings extends React.Component {

  handleMakeChanges = (e) => {
    e.preventDefault();
    console.log('changes made')
  }
  render() {
    return (
      <div>
        <h1>whibut</h1>
        <form onSubmit={e => this.handleMakeChanges(e)} id='form'>
            <h2>Make Changes to User Profile</h2>
            <label htmlFor='name'>Username</label>
            <input type='text' id="name" name='name' placeholder='Choose Username' />
            <label htmlFor='password'>Password</label>
            <input type="password" id="password" name='password' placeholder='New Password' />
            <label htmlFor='password-confirm'>Confirm Password</label>
            <input type="password" id="passwordConfirm" name='passwordConfirm' placeholder='Confirm Password' />
            <button type='submit'>Make Changes</button>
          </form>
          <Footer history={this.props.history}/>
        </div>
    )
  }
}