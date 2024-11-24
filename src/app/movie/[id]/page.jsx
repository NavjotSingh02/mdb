import Image from 'next/image';
import React from 'react'

export default async function Moviepage({params}) {
    const movieId = params.id;
    const res= await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}&language=en-US`);
    const movie= await res.json();
  return (
    <div className='w-full'>
        <div className='p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6'>
            <Image src={`https://image.tmdb.org/t/p/original/${movie.poster_path || movie.backdrop_path}`} width={500} height={300} alt='hello'/>
            <div className='p-2'>
                <h2 className='text-lg mb-3 font-bold'> {movie.title || movie.name}</h2>
                <p className='pb-2'>{movie.overview}</p>
                <span className='font-semibold mr-1 pt-2'>Release Date:</span>
                <p>{movie.release_date || movie.first_air_date}</p>
                

            </div>
        </div>

    </div>
  )
}
