import React, { useState } from 'react'

import '../StylesCss/Box.css'

const Box = (props) => {
  const { children } = props;

  const [click,setClick] = useState(true);

  const onToggle = () => {
    setClick((prev) => !prev);
  }

  return (
    <div className='box'>
      <button className='box-btn-toggle' onClick={onToggle}>
         {click ? "-":"+"}   
      </button>
      {
        click && children
      }
    </div>
  )
}

export default Box
