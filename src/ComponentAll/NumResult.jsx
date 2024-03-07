import React from 'react'

import '../StylesCss/NumResult.css'

const NumResult = (props) => {
  
  const { movieArray } = props

  return (
    <div className='numResultContent'>
      <p className='numResultValue'>Found <strong>{movieArray.length}</strong> results</p>
    </div>
  )
}

export default NumResult
