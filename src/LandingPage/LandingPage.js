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

//  iframe = {
//    src: 'https://www.youtube.com/embed/5qap5aO4i9A',
//    width: '560',
//    height: '315',
//  }

 static contextType = WhibutContext;
  render() {
    return (
      // <WhibutContext.Provider value={value}>
        <div>
          <header>
            <a href='/'><img src='./images/whibyt-mark1.png' className='hero-img' alt='whibut logo'></img></a> 
          </header>
          {/* <section className='video'>
            <Iframe src={this.iframe.src} height={this.iframe.height} width={this.iframe.width} />
          </section> */}
          <video  height='300px' width='450px' controls className='video' >
            <source src='./images/whibut.mp4' type='video/mp4'/>
          </video>
          {/* <img id='placeholder-img' src='./images/powerrangers.png' alt='placeholder before video'></img> */}
          {/* the buttons were wrapped in section at one point but that threw off styling*/}
            <button onClick={this.context.handleSignupClick} className='signup-button'>Sign Up</button>
              {this.context.signupActive && <SignUp handleSubmit={this.handleSubmit}/>}
            <p onClick={this.context.handleLoginClick} className='login-button'>Log in</p>
              {this.context.loginActive && <LogIn handleSubmit={this.handleSubmit}/>}

          {this.state.errorActive && <Error />}
        </div>  
      // </WhibutContext.Provider>
    )
  }
}