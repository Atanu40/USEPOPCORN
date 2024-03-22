import React, { useRef, useEffect } from 'react';

import '../StylesCss/Search.css'

const Search = (props) => {

  const inputRef = useRef(null);
 
  const { query, setQuery } = props

  useEffect(() => {
    inputRef.current.focus();
  }, []); 

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
      ref={inputRef}
     /> 
    </>
  )
}

export default Search
