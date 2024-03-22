import React, { useEffect, useState } from 'react'

export function useLocalStorage (key,getValue){
  const [watch, setWatch] = useState(() => {  
    const saved = localStorage.getItem(key);
    const initialValue = JSON.parse(saved);
    return initialValue ;
  });

  useEffect(() => {
    localStorage.setItem(key,JSON.stringify(getValue));
   },[getValue])

  return ([watch, setWatch]);
}

// export default useLocalStorage
