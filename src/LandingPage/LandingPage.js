import React from 'react';
import Iframe from './Iframe/Iframe';
import LogIn from './LogIn/LogIn';
import SignUp from './SignUp/SignUp'
import './landingpage.css'
import WhibutContext from '../WhibutContext';

export default class LandingPage extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      loginActive: false,
      signupActive: false,
    }
  }

  handleSignUpClick = () => {
    this.setState({
      signupActive: true
    })
  }

  handleLogInClick = () => {
    this.setState({
      loginActive: true
    })
  }

  handleCancel = () => {
    this.setState({
      loginActive: false,
      signupActive: false,
    })
  }

 iframe = {
   src: 'https://www.youtube.com/embed/5qap5aO4i9A',
   width: '560',
   height: '315',

 }
 static contextType = WhibutContext;
  render() {
    const value = {
      loginActive: this.state.loginActive,
      signupActive: this.state.signupActive,
      handleCancel: this.handleCancel,
    }

    return (
      <WhibutContext.Provider value={value}>
        <div>
          <header>
            <h1 className='hero'>whibut</h1>
          </header>
          <section className='video'>
            <Iframe src={this.iframe.src} height={this.iframe.height} width={this.iframe.width} />
          </section>
          <section className='buttons'>
            <button onClick={this.handleSignUpClick}>Sign Up</button>
              {this.state.signupActive && <SignUp />}
            <button onClick={this.handleLogInClick}>Log In</button>
              {this.state.loginActive && <LogIn />}
          </section>
        </div>  
      </WhibutContext.Provider>
    )
  }
}