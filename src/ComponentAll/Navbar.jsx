import React from 'react'

import '../StylesCss/Navbar.css'

const Navbar = (props) => {
  const { children } = props
  return (
    <div className='nav-content'>
      {children}
    </div>
  )
}

export default Navbar
