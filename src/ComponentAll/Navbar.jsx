import React, { useState } from 'react'

import '../StylesCss/Navbar.css'

const Navbar = (props) => {
  const { children,className } = props

  return (
   <>
    <div>
      {children}
    </div>
   </>
  )
}

export default Navbar
