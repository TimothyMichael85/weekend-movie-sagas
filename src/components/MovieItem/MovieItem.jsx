import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import React from 'react';

function MovieItem ({movie}) {

    const dispatch = useDispatch();
    const history = useHistory();

    //select a movie
    const handleSelect = () => {
        console.log('handleSelect');

        //get selected movie info
        dispatch({ type: 'FETCH_DETAILS', payload: movie.id });
        dispatch({ type: 'FETCH_GENRE', payload: movie.id });

        //nav to movie details on click
        history.push(`/details/${movie.id}`);
    }

    return (
        // console.log('MovieItem Page')
        <div key = {movie.id} className='title'> 
            <p>{movie.title}
            <br></br>
            <img src={movie.poster} alt={movie.title} onClick={handleSelect} className="image1"/>
            </p>
        </div>
    )
}


export default MovieItem