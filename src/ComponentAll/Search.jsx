import React from 'react'

import '../StylesCss/Search.css'

const Search = (props) => {
 
  const { query, setQuery } = props

  const onSearch = (e) => {
    setQuery(e.target.value)
  }

  return (
    <>
     <input 
      className='search-bar'
      type="text" 
      placeholder="Search Movies..."
      value={query}
      onChange={onSearch}
     /> 
    </>
  )
}

export default Search
