import React, { useEffect, useState } from 'react'

import StarComponent from '../ComponentAll/StarComponent'
import '../StylesCss/MovieDetails.css'

const MovieDetails = (props) => {

  const { selectedMovie } = props;

 const [selectItemDetails,setSelectItemDetails] = useState({});

  console.log(selectItemDetails);

  const { Title, Year,Rated,Released,Runtime,Actors,Genre,
    Writer,Poster,Type,imdbID,Plot,imdbRating } = selectItemDetails;

  useEffect(() => {

    const getMovie = async () => {
      try{
        const res = await fetch(`http://www.omdbapi.com/?apikey=814fb7bf&i=${selectedMovie}`);

        if(!res.ok){
          throw new Error("Something went wrong with fetching movie details");
        }

        const data = await res.json();

        if(data.Response === "False"){
          throw new Error("Movie Details not found");
        }

        console.log(data);
        setSelectItemDetails(data);
      }
      catch(err){
        console.log(err);
      }
    }
    getMovie();
    
    }, [selectedMovie])

  return (
    <div className='movie-details-content'>
      <div className='movie-details-grid'>
        <div className='movie-details-poster'>
          <img className='details-poster-bg' src={Poster} alt={Title} />
        </div>
        <div className='movie-details-right'>
          <h2>{Title}</h2>
          <p>{Released} &bull; {Runtime}</p>
          <p>{Genre}</p>
          <p><span style={{marginRight:"3px"}}>⭐️</span>{imdbRating} IMDb rating</p>
        </div>
      </div>
      <div>
        <StarComponent />
      </div>
    </div>
  )
}

export default MovieDetails
