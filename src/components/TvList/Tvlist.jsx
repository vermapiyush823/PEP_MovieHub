import React, { useState } from 'react'
import TvCard from '../Cards/TvCard'
export default function Tvlist({series}) {
    const [sortOrder,setSortOrder] = useState('asc')
    const sortedMovies = [...series].sort((a,b)=>{
      if(sortOrder === "asc"){
        return a.vote_count - b.vote_count
      } else{
        return b.vote_count - a.vote_count
      }
    })
    const handleSort =()=>{
        setSortOrder((prev)=>(prev === "asc"?"desc":"asc"))
    }
  return (
    <div className="fulll" >
        <div>
            <button className="sort-button" onClick={handleSort}>
                Sort by vote average ({sortOrder==="asc"?"Ascending":"Descending"})
            </button>
            
        </div>
        <ul className='movielist'>
            {sortedMovies.map((tv)=>
            <TvCard  key={tv.id} tv = {tv}/>)}
        </ul>
    
    </div>
  )
}