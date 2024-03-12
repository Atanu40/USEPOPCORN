import React from 'react'

import WatchEachList from '../ComponentAll/WatchEachList'
import "../StylesCss/WatchedMovieList.css"

const WatchedMovieList = (props) => {
  const {watch} = props;
  console.log(watch);
  return (
    <>
     <ul className='watch-movie-list'>
        {
          watch?.map((movie) => {
            return (
              <WatchEachList key={movie.imdbID} eachWatch={movie}/>
            )
          })
        }
     </ul> 
    </>
  )
}

export default WatchedMovieList
