import React, { useState } from 'react';

import Context from './context'

const Provider = ({ children }) => {
  const [hideHeader, setHideHeader] = useState()
  return (
    <Context.Provider value={{ hideHeader, setHideHeader }}>
      {children}
    </Context.Provider>
  )
}

export default Provider;
