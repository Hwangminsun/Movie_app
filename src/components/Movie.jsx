import React from 'react'


export const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

export default function Movie(props) {

    


    return (
        <div className='movie-container' >
            {/* onClick={onClickMovieItem} */}
             <div className='movie-info'>
                <h4>{props.title}</h4>
                <span>★ {props.vote_average}</span>
            </div>
            <img src={IMG_BASE_URL + props.poster_path} alt="영화포스터" />
           
        </div>
    );
}