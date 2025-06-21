import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({movie}) => {
    const {id , original_title , overview , poster_path ,release_date}  = movie;

    const image = `https://image.tmdb.org/t/p/w342/${poster_path}`

  return (
    <Link to={`/movie/${id}`}>
    <div className='bg-white border border-gray-200 rounded-lg shadow mb-5 p-5'>
        <div className='mt-3 text-center md:text-left'>
            <div className='flex justify-center md:block'>
            <img className='mb-3 rounded-md shadow-lg' src={image} alt={original_title} />
            </div>
        <h5 className='mb-2 text-xl font-bold text-gray-900'>{original_title}</h5>
        <div className='h-[80px]'>
        <p className='mb-2 line-clamp-3 text-gray-600'>
            {overview ? overview : "No data yet"}
        </p>
        </div>
        <small className='mb-3 font-medium text-gray-800'>
           Release Date - {release_date}
        </small>
        </div>
    </div>
    </Link>
  )
}

export default Card