import React from 'react';

// Components
import Header from './Header';

export default ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}