import js from '@eslint/js';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { options } from '../utils/Options';
import MovieDetailCard from "../components/MovieDetailCard"

const MovieDetails = () => {

  const param = useParams();
  const [data , setData] = useState({});

  useState(() => {
    const fetchData = async () => {
      try{
        const response = await fetch(`https://api.themoviedb.org/3/movie/${param.id}`  ,options)
      const json = await response.json();

      setData(json)
      console.log(json)
      }catch(error){
        console.error("Fetching the movie detail" , error)
      }
    }
    fetchData();
  })

  return (
    <div className='md:py-10 md:px-25 p-8'>
      <MovieDetailCard movie={data}/>
    </div>
  )
}

export default MovieDetails