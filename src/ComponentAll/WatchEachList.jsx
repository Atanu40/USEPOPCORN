import React from 'react'

import '../StylesCss/WatchEachedList.css'

const WatchEachList = (props) => {

  const { eachWatch } = props;
 
  const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

  const avgImdbRating = average(eachWatch.map((movie) => movie.imdbRating));
  const avgUserRating = average(eachWatch.map((movie) => movie.userRating));
  const avgRuntime = average(eachWatch.map((movie) => movie.runtime));

  return (
    <>
      <li className='watched-each-container'>
         <div className='watch-each-img-container'>
            <img src={Poster} alt={Title} className='watch-each-img'/>
         </div>
         <div className='watched-each-container-details'>
            <h3 className='watch-each-title'>{Title}</h3>
             <div className='watch-each-subtile'>
              <p>
                <span>⭐️</span>
                <span>{avgImdbRating.toFixed(2)}</span>
              </p>

              <p>
                  <span>🌟</span>
                  <span>{avgUserRating.toFixed(2)}</span>
              </p>

              <p>
                  <span>🎬</span>
                  <span>{avgRuntime.toFixed(2)} min</span>
              </p>
             </div>
         </div>
      </li>
    </>
  )
}

export default WatchEachList
