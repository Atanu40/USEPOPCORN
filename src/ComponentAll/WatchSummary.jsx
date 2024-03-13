import React from 'react'

import '../StylesCss/WatchSummary.css'

const WatchSummary = (props) => {

  const {watch} = props;

  const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

  const avgImdbRating = average(watch.map((movie) => movie.imdbRating));
  const avgUserRating = average(watch.map((movie) => movie.userRating));
  const avgRuntime = average(watch.map((movie) => parseFloat(movie.runtime)));

  return (
    <div className='summary-movie'>
      <h2 className='summary-movie-heading'>MOVIES YOU WATCHED</h2>
      <div className='summary-info-content'>
        <p>
          <span>#️⃣</span>
          <span>{watch.length}movies</span>
        </p>
         
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
  )
}

export default WatchSummary
