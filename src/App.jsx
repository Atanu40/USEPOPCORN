import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import './StylesCss/Navbar.css'

import Navbar from './ComponentAll/Navbar'
import Logo from './ComponentAll/Logo'
import Search from './ComponentAll/Search'
import NumResult from './ComponentAll/NumResult'
import Main from './ComponentAll/Main'
import Box from './ComponentAll/Box'
import MovieList from './ComponentAll/MovieList'

const KEY = "814fb7bf"

function App() {

  const [movie, setMovie] = useState([]);
  const [search, setSearch] = useState('');
  const [nav,setNav] =  useState(false);
  const [error,setError] = useState("");

  useEffect(()=>{
    const getMovie = async () => {
      try{
        console.log(search)
        const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${search}`);


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
        console.log(err);
        setError(err);
      }   

    }
    getMovie();
  },[search])

  const hamburgerChange = () => {
    setNav((prev) => !prev)
  }

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
            <MovieList  movieList={movie}/>
          </Box>
          <Box>
            <h1>hello</h1>
          </Box>
        </Main>
      </div>
    </>
  )
}

export default App
