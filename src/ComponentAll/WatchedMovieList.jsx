import React from 'react'

import WatchEachList from '../ComponentAll/WatchEachList'
import "../StylesCss/WatchedMovieList.css"

const WatchedMovieList = (props) => {
  const {watch,onDeleteWatched} = props;
  console.log(watch);
  return (
    <>
     <ul className='watch-movie-list'>
        {
          watch?.map((movie) => {
            return (
              <WatchEachList key={movie.imdbID} eachWatch={movie} onDeleteWatched={onDeleteWatched}/>
            )
          })
        }
     </ul> 
    </>
  )
}

export default WatchedMovieList
