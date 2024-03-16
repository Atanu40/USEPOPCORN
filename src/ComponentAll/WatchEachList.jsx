import React from 'react'

import '../StylesCss/WatchEachedList.css'

const WatchEachList = (props) => {

  const { eachWatch,onDeleteWatched } = props;
 
  console.log(eachWatch);


  function average(arr) {
    if (arr.length === 0) return 0; // Avoid division by zero
    const sum = arr.reduce((acc, cur) => acc + cur, 0);
    return sum / arr.length;
  }
  
  console.log(eachWatch.title); 
  const avgImdbRating = average([parseFloat(eachWatch.imdbRating || 0)]);
  const avgUserRating = average([parseFloat(eachWatch.userRating)]);
  const avgRuntime = average([parseFloat(eachWatch.runtime)]);


  return (
    <>
      <li className='watched-each-container'>
         <div className='watch-each-img-container'>
            <img src={eachWatch.poster} alt={eachWatch.title} className='watch-each-img'/>
         </div>
         <div className='watched-each-container-details'>
            <h3 className='watch-each-title'>{eachWatch.title}</h3>
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

              <button
                className="btn-delete"
                onClick={() => onDeleteWatched(eachWatch.imdbID)}
              >
                X
              </button>

             </div>
         </div>
      </li>
    </>
  )
}

export default WatchEachList
