import React from 'react'
import Movie from '../components/Movie';
import { dummy } from '../movieDummy';

export default function Movie_app() {
    return (
        <div className="movie-box">
        <div className="movies-container">
        {
          dummy.results.map((item) => {
            return (
              <Movie
                title={item.title}
                poster_path={item.poster_path}
                vote_average={item.vote_average}
               />
            )
          })
        }  
        </div> 
      </div>
    )
}