import React, { useEffect, useState } from 'react';
import { FaHeart, FaRegHeart } from "react-icons/fa";
import './Card.css';

export default function MovieCard({ movie }) {
  const { id, poster_path, title, release_date, vote_count, vote_average } = movie;
  const [isFavorite, setIsFavorite] = useState(
    JSON.parse(localStorage.getItem('favoriteMovies'))?.some(([_, movieId]) => movieId === id) || false
  );
  const [showDetails, setShowDetails] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };

  useEffect(() => {
    const favMovies = JSON.parse(localStorage.getItem("favoriteMovies")) || [];
    if (isFavorite) {
      localStorage.setItem('favoriteMovies', JSON.stringify([...favMovies, [title, id]]));
    } else {
      localStorage.setItem('favoriteMovies',
        JSON.stringify(favMovies.filter(([_, movieId]) => movieId !== id)));
    }
  }, [isFavorite, title, id]);

  return (
    <div>
      <li className='card' onMouseEnter={() => setShowDetails(true)} onMouseLeave={() => setShowDetails(false)}>
        <img className='poster' src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt='title' />
        <h1 className='title'>{title}</h1>
        <div className='likebtn'>
          {!isFavorite ? (
            <FaRegHeart className='fav-icon-white' onClick={toggleFavorite} />
          ) : (
            <FaHeart className='fav-icon' onClick={toggleFavorite} />
          )}
        </div>
        <div className={`card-details ${showDetails ? 'visible' : ''}`}>
          <p><strong>Release Date:</strong> {release_date}</p>
          <p><strong>Vote Count:</strong> {vote_count}</p>
          <p><strong>Vote Average:</strong> {vote_average}</p>
        </div>
      </li>
    </div>
  );
}
