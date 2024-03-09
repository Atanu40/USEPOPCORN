import React from 'react'

import '../StylesCss/Main.css'

const Main = (props) => {
  const { children } = props;
  return (
    <div className='main-content-grid'>
      {children}
    </div>
  )
}

export default Main
