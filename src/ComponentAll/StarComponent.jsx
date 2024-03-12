import React, { useEffect, useState } from 'react'

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

  const { maxLength=5,defaultRating=0,color="#fcc419",size= 48,fetchRatting,selectedMovie} = props;

  const [Rating,setRating] =  useState(defaultRating);
  const [hoverRating,setHoverRating] =  useState(0);

  const updateRatting = (index) => {
    console.log("clicked");
    setRating(index+1);
    fetchRatting(index+1);
  }

  const hoverValueIncrement = (index) => {
    setHoverRating(index+1);
  }

  const hoverValueDecrement = () => {
    setHoverRating(0);
  }

  useEffect(() => {
    setRating(0);
  }, [selectedMovie])

  return (
    <div style={StarComponentContent}>
      <div style={StarEach}>
        {
          Array.from({length: maxLength}, (_, index) => {
            return (
              <StarSingle key={index} full={hoverRating ? hoverRating >= index + 1 : Rating >= index + 1} color={color} size={size} rate={()=>updateRatting(index)} hoverIncrement={()=>hoverValueIncrement(index)} hoverDecrement={()=>hoverValueDecrement(index)}/>
            )
          })
        }  
      </div> 
      <p className='rating-txt'>{hoverRating || Rating || ""}</p>
    </div>
  )
}

export default StarComponent
