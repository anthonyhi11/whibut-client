import React from 'react';
import './footer.css';
import WhibutContext from '../WhibutContext';
import TokenService from '../services/token-service';

export default class Footer extends React.Component {
  handleLogout = () => {
    TokenService.clearAuthToken();
    this.props.history.push('/');
  };

  handleHome = () => {
    this.props.history.push('/main');
  };

  handleSettings = () => {
    this.props.history.push('/settings');
  };

  static contextType = WhibutContext;
  render() {
    return (
      <WhibutContext.Consumer>
        {(context) => (
          <div className="footer">
            <button className="footer-buttons home-footer-button" onClick={this.handleHome}>
              Home
            </button>
            <button className="footer-buttons settings-footer-button" onClick={this.handleSettings}>
              Settings
            </button>
            <button className="footer-buttons logout-footer-button" onClick={this.handleLogout}>
              Logout
            </button>
          </div>
        )}
      </WhibutContext.Consumer>
    );
  }
}
