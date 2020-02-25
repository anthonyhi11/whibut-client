import React from 'react';

const WhibutContext = React.createContext({
  loginActive: false,
  signupActive: false,
  isAddActive: false,
  handleLandingCancel: () => {},
  handleLandingSubmit: () => {},
  handleFormCancel: () => {},
  handleAddClick: () => {},
  handleCancel: () => {},
  
})

export default WhibutContext