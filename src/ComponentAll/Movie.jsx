import React from 'react'

import '../StylesCss/Movie.css'

const Movie = (props) => {

  const { eachMovie } = props;


  const { Title, Year, Poster,Type,imdbID } = eachMovie;

  return (
    <>
     <li className='each-movie-item'>
       <div className='movie-item-img'></div>
       <div></div>
     </li> 
    </>
  )
}

export default Movie
