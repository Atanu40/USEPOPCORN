import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'

import Navbar from './ComponentAll/Navbar'
import Logo from './ComponentAll/Logo'
import Search from './ComponentAll/Search'
import NumResult from './ComponentAll/NumResult'

function App() {

  const [movie, setMovie] = useState([]);
  const [search, setSearch] = useState('');


  return (
    <>
      <div className='page-width'>
        <Navbar>
          <Logo />
          <Search query={search} setQuery={setSearch} />
          <NumResult movieArray={movie} />
        </Navbar>
      </div>
    </>
  )
}

export default App
