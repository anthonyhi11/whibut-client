import React from 'react';
import LogIn from './LogIn/LogIn';
import SignUp from './SignUp/SignUp';
import './landingpage.css';
import WhibutContext from '../WhibutContext';
import HowToUse from './HowToUse/HowToUse';
import LogInSignUpService from '../services/login-signup-service';
import TokenService from '../services/token-service';

export default class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorActive: false,
      error: null,
      modalShown: false,
      successShown: false,
    };
  }

  handleSubmit = () => {
    this.props.history.push('/main');
  };

  handleHow = () => {
    this.setState({
      modalShown: true,
    });
  };

  handleCancel = () => {
    this.setState({
      modalShown: false,
    });
  };

  handleDemo = (e) => {
    e.preventDefault();
    this.setState({ successShown: true });

    const loginAttempt = {
      username: 'demouser',
      password: 'AAaa11!!',
    };
    LogInSignUpService.loginUser(loginAttempt)
      .then((res) => {
        TokenService.saveAuthToken(res.authToken);
        this.context.handleCancel();
        this.handleSubmit(); //routes you to the main dashboard
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  static contextType = WhibutContext;
  render() {
    const { successShown } = this.state;
    return (
      <div className="landing-page-main">
        {successShown && (
          <div className="success-screen">
            <h3>Success!</h3>
            <p>This application is hosted on Heroku with a free plan. It may take a few seconds to spin up.</p>
          </div>
        )}
        <header>
          <a href="/">
            <img src="./images/whibyt-mark1.png" className="hero-img" alt="whibut logo"></img>
          </a>
        </header>
        <p className="howtouse-button" onClick={this.handleHow}>
          How to use?
        </p>
        <video height="300px" width="450px" controls className="video">
          <source src="./images/whibut.mp4" type="video/mp4" />
        </video>

        {this.state.modalShown && <HowToUse handleCancel={this.handleCancel} />}
        <div className="signinbuttons">
          <button onClick={this.context.handleLoginClick} className="login-button">
            Log In
          </button>
          <button onClick={this.context.handleSignupClick} className="signup-button">
            Sign Up
          </button>
          {this.context.signupActive && <SignUp handleSubmit={this.handleSubmit} />}
          <p onClick={this.handleDemo} className="demo-button">
            Demo
          </p>
          {this.context.loginActive && <LogIn handleSubmit={this.handleSubmit} />}
        </div>
      </div>
    );
  }
}
