import React, { useState } from 'react'

import StarSingle from '../ComponentAll/StarEach'  
import '../StylesCss/Star.css'   


const StarComponentContent = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '10px'
}

const StarEach = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '5px'
}

const StarComponent = (props) => {

  const { maxLength=5,defaultRating=0 ,color="#fcc419",size= 48} = props;

  const [Rating,setRating] =  useState(defaultRating);
  const [hoverRating,setHoverRating] =  useState(0);

  return (
    <div style={StarComponentContent}>
      <div style={StarEach}>
        {
          Array.from({length: maxLength}, (_, index) => {
            return (
              <StarSingle key={index} color={color} size={size}/>
            )
          })
        }  
      </div> 
      <p className='rating-txt'>{hoverRating || Rating || ""}</p>
    </div>
  )
}

export default StarComponent
