import { Api, Movie } from '@mui/icons-material'
import React from 'react'
import { useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
const BigView = ({movie}) => {
    const navigate = useNavigate()
    const { id } = useParams()
    const ref = useRef()
    const { movie_path } = movie
  return (
    <>
    <div>
        <h1>BigView</h1>
        <button onClick={() => navigate(-1)}>Back</button>
        <div ref={ref}>
        <img className='poster' src={`https://image.tmdb.org/t/p/original/${movie_path}`} alt='title' />
        </div>
    </div>
    
    </>
  )
}

export default BigView