import React from 'react';

const WhibutContext = React.createContext({
  loginActive: false,
  signupActive: false,
  handleLandingCancel: () => {},
  handleLandingSubmit: () => {},
})

export default WhibutContext