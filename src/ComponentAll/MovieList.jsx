import React from 'react'

import Movie from '../ComponentAll/Movie'
import '../StylesCss/MovieList.css'

const MovieList = (props) => {

  const { movieList,selectedMovie } = props;

  return (
    <>
      <ul className='list'>
        {
          movieList?.map((movie) => {
            return (
              <Movie key={movie.imdbID} eachMovie={movie} selectedMovie={selectedMovie} />
            )
          })
        }
      </ul>
    </>
  )
}

export default MovieList
