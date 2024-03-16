import { useEffect, useState } from 'react'

import './App.css'
import './StylesCss/Navbar.css'
import './StylesCss/Watched.css'

import Navbar from './ComponentAll/Navbar'
import Logo from './ComponentAll/Logo'
import Search from './ComponentAll/Search'
import NumResult from './ComponentAll/NumResult'
import Main from './ComponentAll/Main'
import Box from './ComponentAll/Box'
import MovieList from './ComponentAll/MovieList'
import WatchSummary from './ComponentAll/WatchSummary'
import WatchedMovieList from './ComponentAll/WatchedMovieList'
import MovieDetails from './ComponentAll/MovieDetails'
import Loader from './ComponentAll/Loader'

const KEY = "814fb7bf"

function App() {

  const [movie, setMovie] = useState([]);
  const [watch, setWatch] = useState([]);
  const [search, setSearch] = useState('');
  const [nav,setNav] =  useState(false);
  const [error,setError] = useState("");
  const [errorState,setErrorState] = useState(false);
  const [selectedMovie,setSelectedMovie] = useState(null);
  const [loading,setLoading] = useState(false);

  const selectedMovieFunc = (id) => {
    setSelectedMovie((prev) => prev === id ? null : id);
  }

  const CloseDetails=()=>{
    setSelectedMovie(null);
  }

  const hamburgerChange = () => {
    setNav((prev) => !prev)
  }

  const updateWatch = (movie) => {
    setWatch((prev) => [...prev,movie]);
  }

  const onDeleteWatched = (id) => {
    setWatch((prev) => prev.filter(movie => movie.imdbID !== id));
  }

  /*Search from data api using useEffect hook */
  useEffect(()=>{
    const controller = new AbortController(); // Create a new AbortController instance of AbortController class to abort fetch request when component unmounts or search changes before the fetch request is completed or when the fetch request is taking too long to complete //
    const getMovie = async () => {
      try{
        setLoading(true);
        setErrorState(false)
        const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${search}`,
        { signal: controller.signal }
        );

        if(!res.ok){
          throw new Error("Something went wrong with fetching movies");
        }

        const data = await res.json();

        if(data.Response === "False"){
          throw new Error("Movie not found");
        }

        setMovie(data.Search);
      }
      catch(err){
        if (err.name !== "AbortError") {
          console.log(err.message);
          setError(err.message);
        }
      }  
      finally{
        setLoading(false);
      } 
    }

    if(search < 3){
      setMovie([])
      setError("");
      return;
    }

    getMovie();

    return function () {
      controller.abort();
    };
  },[search])

   /*Direct dom manupulate using useEffect hook */
  useEffect(() => {
    if (nav) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }

    // Cleanup function to reset body overflow when component unmounts or nav changes
    return () => {
      document.body.style.overflowY = 'auto';
    };
  }, [nav]);


  return (
    <>
      <div className='page-width'>
        <Navbar>
          <div className="nav-content">
            <Logo />
            <Search query={search} setQuery={setSearch} />
            <NumResult movieArray={movie} />
          </div>

          <div className='small-device-navbar nav-small-content'>
            <Logo />
            <div onClick={hamburgerChange}>
              {
              nav ? <i className='fas fa-times hum'></i>
                  : <i className='fas fa-bars hum '></i>
              }
            </div>
            {
              nav ? <div className='nav-hide active'>
                        <Search query={search} setQuery={setSearch} />
                        <NumResult movieArray={movie} />
                    </div>
                  : <div className='nav-hide'>
                        <Search query={search} setQuery={setSearch} />
                        <NumResult movieArray={movie} />
                    </div>
            }
          </div>
        </Navbar>
      </div>
      <div className='page-width page-width--narrow'>
        <Main>
          <Box>
            {loading && <Loader />}
            {errorState ? <p className='error-message'>{error}</p> :
            <MovieList movieList={movie} selectedMovie={selectedMovieFunc}/>}
          </Box>
          <Box>
            {
              selectedMovie ? <MovieDetails selectedMovie={selectedMovie}         CloseDetails={CloseDetails} updateWatch={updateWatch} watch={watch} movie={movie}/> 
                            : <div className='watch-part'>
                                <WatchSummary watch={watch}/>
                                <WatchedMovieList watch={watch} onDeleteWatched={onDeleteWatched}/> 
                              </div>
            }
          </Box>
        </Main>
      </div>
    </>
  )
}

export default App
