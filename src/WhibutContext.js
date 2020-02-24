import React from 'react';

const WhibutContext = React.createContext({
  loginActive: false,
  signupActive: false,
  handleLandingCancel: () => {},
  handleLandingSubmit: () => {},
  handleFormCancel: () => {},
})

export default WhibutContext