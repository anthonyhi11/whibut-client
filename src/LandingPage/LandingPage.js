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
            <h1 className='hero'>whibut</h1>
          </header>
          {/* <section className='video'>
            <Iframe src={this.iframe.src} height={this.iframe.height} width={this.iframe.width} />
          </section> */}
          <video  height='300px' width='450px' controls className='video' >
            <source src='./images/whibut.mp4' type='video/mp4'/>
          </video>
          <section className='buttons'>
            <button onClick={this.context.handleSignupClick}>Sign Up</button>
              {this.context.signupActive && <SignUp handleSubmit={this.handleSubmit}/>}
            <button onClick={this.context.handleLoginClick}>Log In</button>
              {this.context.loginActive && <LogIn handleSubmit={this.handleSubmit}/>}
          </section>
          {this.state.errorActive && <Error />}
        </div>  
      // </WhibutContext.Provider>
    )
  }
}