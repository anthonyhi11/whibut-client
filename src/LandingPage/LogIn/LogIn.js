import React from 'react';
import WhibutContext from '../../WhibutContext';
import LogInSignUpService from '../../services/login-signup-service';
import TokenService from '../../services/token-service'

export default class LogIn extends React.Component {

  state = { error: null }
  handleLogIn = (e) => {
    e.preventDefault()
    const loginAttempt = {
      username: e.target.name.value,
      password: e.target.password.value
    }
    LogInSignUpService.loginUser(loginAttempt)
      .then(res => {

        TokenService.saveAuthToken(res.authToken)
        this.context.handleCancel();
        this.props.handleSubmit(); //routes you to the main dashboard
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }//add error handling
  static contextType = WhibutContext;
  render() {
    const { error } = this.state
    return (
      <div className='modal'>
        <form onSubmit={e => this.handleLogIn(e)} id='form'>
          <h2>Log in!</h2>
          <p>demo username: demouser</p>
          <p>demo password: AAaa11!!</p>
          <div role='alert'>
            {error && <p className='red'>{error}</p>}
          </div>
          <label htmlFor='name'>Username</label>
          <input type='text' id="name" name='name' placeholder='Username' />
          <label htmlFor='password'>Password</label>
          <input type="password" id="password" name='password' placeholder='Password' />
          <button type='submit'>Log in</button><button type='reset' onClick={this.context.handleCancel}>Cancel</button>
        </form>
  
      </div>
    )
  }
}