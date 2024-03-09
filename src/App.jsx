import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import './StylesCss/Navbar.css'

import Navbar from './ComponentAll/Navbar'
import Logo from './ComponentAll/Logo'
import Search from './ComponentAll/Search'
import NumResult from './ComponentAll/NumResult'
import Main from './ComponentAll/Main'

function App() {

  const [movie, setMovie] = useState([]);
  const [search, setSearch] = useState('');
  const [nav,setNav] =  useState(false);


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
        <Main></Main>
      </div>
    </>
  )
}

export default App
