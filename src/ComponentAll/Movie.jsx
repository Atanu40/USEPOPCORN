import React from 'react'

import '../StylesCss/Movie.css'

const Movie = (props) => {

  const { eachMovie,selectedMovie } = props;
  const { Title, Year, Poster,Type,imdbID } = eachMovie;

  const movieClicked = () => {
    selectedMovie(imdbID);
  }

  return (
    <>
     <li className='each-movie-item' onClick={movieClicked}>
       <div className='movie-item-img'>
          <img className='movie-img' src={Poster} alt={Title} />
       </div>
       <div className='movie-details'>
          <h3 className='movie-details-title'>{Title}</h3>
          <p className='movie-details-subtitle'>
            <span>🗓</span>
            <span>{Year}</span>
          </p>
       </div>
     </li> 
    </>
  )
}

export default Movie
