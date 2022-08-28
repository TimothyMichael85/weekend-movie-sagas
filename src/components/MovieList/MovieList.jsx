import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { useHistory } from 'react-router-dom';

function MovieList() {

    const history = useHistory();
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);


    //get all movies on page load
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    // click to take to detail page for selected movie
    const handleClick = (id) => {
        history.push(`/details/${id}`)
    }

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                        <h3>{movie.title}</h3>
                        <img onClick = {() => handleClick(movie.id)} src={movie.poster} alt={movie.title}/>
                        <br />
                    </div>
                );
            })}
        </section>
    </main>


    );
}

export default MovieList;