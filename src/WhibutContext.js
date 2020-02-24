import React from 'react';

const WhibutContext = React.createContext({
  loginActive: false,
  signupActive: false,
  handleCancel: () => {},
})

export default WhibutContext