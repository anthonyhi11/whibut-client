import React from 'react';
// import Iframe from './Iframe/Iframe';
import LogIn from './LogIn/LogIn';
import SignUp from './SignUp/SignUp'
import './landingpage.css'
import WhibutContext from '../WhibutContext';
import Error from '../error';




export default class LandingPage extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      errorActive: false,
      error: null
    }
  }

  handleSubmit = () => {
    this.props.history.push('/main')
  }

 static contextType = WhibutContext;
  render() {
    return (
        <div className='landing-page-main'>
          <header>
            <a href='/'><img src='./images/whibyt-mark1.png' className='hero-img' alt='whibut logo'></img></a> 
          </header>
          <video  height='300px' width='450px' controls className='video' >
            <source src='./images/whibut.mp4' type='video/mp4'/>
          </video>
            <button onClick={this.context.handleSignupClick} className='signup-button'>Sign Up</button>
              {this.context.signupActive && <SignUp handleSubmit={this.handleSubmit}/>}
            <p onClick={this.context.handleLoginClick} className='login-button'>Log in</p>
              {this.context.loginActive && <LogIn handleSubmit={this.handleSubmit}/>}

          {this.state.errorActive && <Error />}
        </div>  
    )
  }
}