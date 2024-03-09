import React from 'react'

import Movie from '../ComponentAll/Movie'
import '../StylesCss/MovieList.css'

const MovieList = (props) => {

  const { movieList } = props;

  return (
    <>
      <ul className='list list.list-movies '>
        {
          movieList?.map((movie) => {
            console.log(movie);
            return (
              <Movie key={movie.imdbID} eachMovie={movie}/>
            )
          })
        }
      </ul>
    </>
  )
}

export default MovieList
