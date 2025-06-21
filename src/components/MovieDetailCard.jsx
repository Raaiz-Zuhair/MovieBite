import React from 'react'

const MovieDetailCard = ({movie}) => {

    const {original_title, overview, release_date , status , poster_path} = movie;
    const image = `https://image.tmdb.org/t/p/w342/${poster_path}`

  return (
    <div className='container mx-auto rounded-lg p- bg-gray-100 '>
        <div className='flex flex-col md:flex-row justify-content-between items-center px-6 py-4 gap-10'>
            <div className='w-full md:w-4/12'>
                <img width="100%" className='rounded-lg' src={image} alt={overview} />
            </div>
            <div className='w-full md:w-8/12'>
                <h3 className='font-bold text-gray-900 text-3xl mb-2'>
                    {original_title}
                </h3>
                <p className='text-gray-500 text-lg mb-8 font-medium'>
                    {overview}
                </p>
                <p className='font-bold text-gray-600'>
                    Status of the movie - {status}
                </p>
                <p className='font-bold text-gray-600'>
                   Release Date - {release_date}
                </p>
            </div>
        </div>
    </div>
  )
}

export default MovieDetailCard