import React, { useEffect, useState } from 'react'

import StarComponent from '../ComponentAll/StarComponent'
import Loader from '../ComponentAll/Loader'
import '../StylesCss/MovieDetails.css'

const MovieDetails = (props) => {

const { selectedMovie,CloseDetails,updateWatch,watch,movie } = props;

console.log(selectedMovie);

const [selectItemDetails,setSelectItemDetails] = useState({});
const [FinalRating,setFinalRating] = useState(0);
const [loading,setLoading] = useState(false);

const isWatchedNew = watch.map((movie) => movie.imdbID).includes(selectedMovie);
const watchedMovie = watch.find(movie => movie.imdbID == selectedMovie);
const isSelectMovie = movie.find(movie => movie.imdbID == selectedMovie);

const { Title, Year,Rated,Released,Runtime,Actors,Genre,
  Writer,Poster,Type,imdbID,Plot,imdbRating } = selectItemDetails;

const list ={
  title: Title,
  year: Year,
  rated: Rated,
  released: Released,
  runtime: Runtime,
  actors: Actors,
  genre: Genre,
  writer: Writer,
  poster: Poster,
  type: Type,
  imdbID: imdbID,
  plot: Plot,
  imdbRating: imdbRating,
  userRating: FinalRating,
  selectedMovie : selectedMovie
}

const onAdd = () => {
  updateWatch(list);
  CloseDetails();
}

const updateRatting = (number) => {
  console.log(number);
  setFinalRating(number);
}  

useEffect(() => {
  const getMovie = async () => {
    try{
      setLoading(true); 
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
    finally{
      setLoading(false);
    }
  }
  getMovie();
  
}, [selectedMovie])

useEffect(() => {

  if(!isSelectMovie.Title) return;

  document.title =`${isSelectMovie.Title}`;

  return () => {
    document.title = "UsePopCorn";
  }
},[isSelectMovie.Title])

useEffect(
  function () {
    function callback(e) {
      if (e.code === "Escape") {
        CloseDetails();
      }
    }

    document.addEventListener("keydown", callback);

    return function () {
      document.removeEventListener("keydown", callback);
    };
  },
  [CloseDetails]
);

  return (
  <>
    {loading ? <Loader /> : 
    <div className='movie-details-content'>
      <button className='back-btn' onClick={CloseDetails}>&larr;</button>
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
      <div className='movie-details-below-content'>
        <div className='movie-details-star-component'>

        {isWatchedNew ? (
          <p className='watched-text'>You rated this movie {watchedMovie.userRating}⭐️</p>)
           : (
          <>
            <StarComponent maxLength={10} size={24} fetchRatting={updateRatting} selectedMovie={selectedMovie} />
            {FinalRating > 0 && <button className='rate-add-btn' onClick={onAdd}>+ Add to list</button>}
          </>
           )
        }    
        </div>
        <div className='movie-details-below'>
          <p>
            <em>{Plot}</em>
          </p>
          <p>Starring {Actors}</p>
          <p>Directed by {Writer}</p>
        </div>
      </div>
    </div>
    }
  </>
   
  )
}

export default MovieDetails
