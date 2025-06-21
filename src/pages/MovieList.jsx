import React from 'react';
import useFetch from '../hooks/useFetch';
import Card from '../components/Card';


const MovieList = ({apiPath}) => {
    
  const {data:movies} = useFetch(apiPath);

  return (
   <main>
     <section className='min-h-screen'>
      <div className="max-w-6xl mx-auto py-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 sm:place-items-center">
          {
            movies.map(movie => (
              <Card key={movie.id} movie={movie}/>
            ))
          }
        </div>
      </div>
    </section>
   </main>
  )
}

export default MovieList